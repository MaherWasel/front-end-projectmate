import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import CircularProgressIndicator from "../../../components/spinner/circulatProgressIndicator";
import ProjectPageHeader from "../components/ProjectPageHeader";
import ProjectDetails from "../components/ProjectDetails";
import axios from "axios";
import { apiUrl } from "../../../config";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [project, setProject] = useState({});
  const [pageState, setPageState] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, loading: true }));

      try {
        const response = await axios.get(`${apiUrl}/projects/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPageState({
          loading: false,
          success: true,
          error: false,
          errorMessage: null,
          data: response.data.record,
        });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle 401 by redirecting to login
          navigate("/login");
          console.error("Unauthorized: Redirecting to login.");
          localStorage.removeItem("token"); // Clear the invalid token
        } else {
          // Handle other errors
          setPageState({
            loading: false,
            success: false,
            error: true,
            errorMessage:
              error.response?.data.message || "Something went wrong",
            data: null,
          });
        }
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <main className="bg-darkGray min-h-screen w-full flex flex-col py-16 px-8">
      {pageState.loading ? (
        <div className="flex justify-center items-center flex-1">
          <CircularProgressIndicator />
        </div>
      ) : pageState.success ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-24 flex-col"
        >
          <ProjectPageHeader project={pageState.data} />
          <ProjectDetails project={pageState.data} />
        </motion.section>
      ) : pageState.error ? (
        <p className="text-redError flex justify-center flex-1 items-center">
          {pageState.errorMessage || "ERROR"}
        </p>
      ) : null}
    </main>
  );
};

export default ProjectPage;
