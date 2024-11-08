import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "../../../components/buttons/BackButton";
import CircularProgressIndicator from "../../../components/spinner/circulatProgressIndicator";
import Avatar from "../components/Avatar";
import TextInput from "../../../components/input/TextInput";
import Textarea from "../../../components/input/TextArea";
import Button from "../../../components/buttons/SubmitButton";
import Links from "../components/Links";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: null,
  });
  const [updatedImg, setUpdatedImg] = useState(null);
  const [updatedBio, setUpdatedBio] = useState("");
  const [links, setLinks] = useState(["x.com", "gmail.com"]);
  const { userId } = useParams();
  const hasAccess = userId ? false : true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      setUserState((old) => ({ ...old, loading: true }));
      try {
        const userData = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                name: "Ahmed",
                email: "ahmed@gmail.com",
                bio: "Hello, I’m Ahmed. I’m a passionate software developer with a strong background in web and mobile application development. Over the past few years, I've specialized in creating user-centered, responsive, and visually appealing applications. I love to explore the latest in technology, especially frameworks like React, Flutter, and Next.js, and I’m always eager to implement creative solutions that enhance user experience. When I’m not coding, you can find me reading tech blogs, hiking, or exploring new cuisines. I believe in continuous learning and am constantly working to improve my skills and knowledge in the tech world. Excited to be part of a community that values growth and innovation!",
                links: ["x.com", "gmail.com"],
              }),
            2000
          )
        );
        setUserState({
          loading: false,
          success: true,
          error: false,
          errorMessage: null,
          data: userData,
        });
        setUpdatedImg(userData.img);
        setUpdatedBio(userData.bio);
        setLinks(userData.links);
      } catch (error) {
        setUserState({
          loading: false,
          success: false,
          error: true,
          errorMessage: error.message || "Failed to load profile data",
          data: null,
        });
      }
    };
    fetchUserData();
  }, []);

  const handleImageEdit = (newImage) => {
    if (hasAccess) {
      setUpdatedImg(newImage);
    }
  };

  const handleBioChange = (event) => {
    if (hasAccess) {
      setUpdatedBio(event.target.value);
    }
  };

  const onSubmit = (data) => {
    if (hasAccess) {
      console.log("Updated Image:", updatedImg);
      console.log("Updated Bio:", updatedBio);
      console.log("Updated Links:", links);
    }
  };

  const isModified =
    updatedImg !== userState.data?.img ||
    updatedBio !== userState.data?.bio ||
    JSON.stringify(links) !== JSON.stringify(userState.data?.links);

  return (
    <div className="w-full h-screen bg-darkGray relative flex flex-col justify-center items-center overflow-auto">
      <span className="m-4 absolute top-4 left-4">
        <BackButton onClick={() => navigate("/")} />
      </span>
      <AnimatePresence>
        {userState.loading ? (
          <CircularProgressIndicator />
        ) : userState.success ? (
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center p-4 flex flex-col items-center w-full">
              <Avatar
                src={updatedImg}
                onEdit={handleImageEdit}
                hasAccess={hasAccess}
              />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full sm:w-1/2 mt-4"
              >
                <TextInput
                  label="Email"
                  name="email"
                  register={register}
                  errors={errors}
                  disabled
                  defaultValue={userState.data.email}
                  placeholder="Enter your email"
                />
                <Textarea
                  label="Bio"
                  name="bio"
                  register={register}
                  errors={errors}
                  defaultValue={updatedBio}
                  placeholder="Enter your bio"
                  labelColorProp="text-white"
                  onChange={handleBioChange}
                  disabled={!hasAccess}
                  rowNum={updatedBio.length > 50 ? 6 : null}
                />
                <Links
                  links={links}
                  setLinks={setLinks}
                  hasAccess={hasAccess}
                />
                {hasAccess && (
                  <div className="w-full h-18">
                    <Button disabled={!isModified}>Save</Button>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        ) : userState.error ? (
          <p className="text-redError flex justify-center items-center">
            {userState.errorMessage || "ERROR"}
          </p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
