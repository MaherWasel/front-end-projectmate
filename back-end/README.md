<p align="center">
  <img src="https://github.com/user-attachments/assets/b497dea8-9f9f-44b4-a477-58e03125a267" width="160" height="160" alt="image">
</p>
<div align="center">

<h1 align="center">ProjectMates for backend</h1>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#technology-stack">Technology Stack</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#assumption">Assumption</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


<p> We have 7 folders in the main directory and 2 files:

1. ------: this file connects to the database and that is it.
2. ------: this folder is responsible for the schemas, it can also be used for validation. check the user.js file inside this folder, you can see how it specifies the min and max length of the username and other restrictions.
3. ------: this folder has functions, such as signUp(), logIn(), and other CRUD (create, read, update, delete) operations. it also imports the user models created in the user.js inside models folder.
4. ------: this folder is called api, we can also call it routes. it is responsible for routing, or in other words it connects the server.js to the controller. notice every route inside any file in this folder calls a function that is made in controller folder.
5. ------: this file has the styles and images folders inside of it, as well as static html files, but in our case all of our files are dynamic. so no html files. 
6. ------: this file serves dynamic files, notice all html files we did in phase 1 are now njk files in this folder.
7. server.js: this file starts up the website and calls for actions that will be executed in the controller.
<p align="right">(<a href="#about-the-project">back to top</a>)</p>

<!-- BUILT WITH -->
### Built With

* [![React][React.js]][React-url]
* <a href="https://tailwindcss.com/"><img src="https://github.com/user-attachments/assets/395d64c8-a11a-419e-ba7a-4505f903b391" width="130" height="40" alt="Tailwind CSS"></a>
* <a href="https://www.mongodb.com/"><img src="https://github.com/user-attachments/assets/5b2fc34f-8235-401d-8a13-d7b7af5880ab" width="130" height="40" alt="MongoDB"></a>

<p align="right">(<a href="#about-the-project">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/MaherWasel/front-end-projectmate

   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the Development Server
   ```js
   npm start
   ```


<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- USAGE EXAMPLES -->

## Technology Stack

- **Frontend**: [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Used for smooth and responsive animations.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building modern designs.
- **Navigation**: [React Router DOM](https://reactrouter.com/) - For efficient and seamless page navigation.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>


## Screenshots



## Assumption

- All necessary data files are located in `src/helpers`.

### Routes

- **User Routes**
  - `/login` - Login page
  - `/register` - Register page
  - `/` or `/home` - Home page for normal users
  - `/MyProjects` - User's projects page
  - `/myInvites` - User's invites page
  - `/myProfile` - User's profile page
  - `/profile/:userId` - Profile page of other users
  - `/project/:projectId` - Project details page

- **Admin Routes**
  - `/admin/home` - Home page for admin
  - `/admin/users` - User management page for admin
  - `/admin/reports` - Reports page for admin

### Access Requirements

- To access **normal pages**, `currentUser` in the `helpers` folder must not be `null` and must have a status other than `banned`.
- To access **admin pages**, the `currentUser` status must be set to `admin`.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Image-icon]: https://github.com/user-attachments/assets/395d64c8-a11a-419e-ba7a-4505f903b391
[Image-icon]: <img src="https://github.com/user-attachments/assets/395d64c8-a11a-419e-ba7a-4505f903b391" width="6" height="30">
[Image-url]: https://tailwindcss.com/
