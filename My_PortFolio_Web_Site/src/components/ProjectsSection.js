import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   tag:["MongoDB","ExpressJS","ReactJS","NodeJS"],
   title: "Laundry-Cart Web Application", 
   Giturl:'https://github.com/ShivkumarSalunkhe/Laundry_Cart_MERN',
   Weburl:'https://laundry-cart-mern-aj9w.onrender.com',
   description:"Laundry Cart Web App is a real-time laundry service provider with user authentication by JWT's, where user can book/track/cancel their cloths order from anywhere. Be it steam ironing, Washing, Washing and Ironing, Dry Cleaning. This application provides a very intuitive user experience and tries to make the order process as easy as possible.", 
   getImageSrc: () => require("../images/LaundryCartGif.gif"), 
 }, 
 { 
   tag:["ReactJS","NodeJS","HTML","CSS"],
   title: "ToDo Web Application", 
   Giturl:'https://github.com/ShivkumarSalunkhe/Todo_Web_App',
   Weburl:'https://todowebapp.onrender.com',
   description: 
     "A ReactJS Todo Web App where user can create/read/update/delete todo task from UI.Used MongoDb for store tasks in backend, used NodeJS, ExpressJS to handle backend API's, used React JS for UI with context. Also used Promises and Axios to get the data to render on front end, for managing the tasks used react useStates and useEffect Hooks.", 
   getImageSrc: () => require("../images/TodoGif.gif"), 
 }, 
 { 
  tag: ["RaeactJS","MongoDB","Cloudinary","NodeJS"],
   title: "Insta-Clone Web Application", 
   Giturl:'https://github.com/ShivkumarSalunkhe?tab=repositories',
   Weburl:'https://instaclone10.netlify.app',
   description: 
     "Designed and Developed InstaClone web application using React Js. It has got look and feel of Instagram with the features like to create a post. Technologies Used: HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose. Used Cloudinary for storing images in the backend.", 
   getImageSrc: () => require("../images/Instaclonegif.gif"), 
 }, 
 { 
  tag: ["Material UI","Raeact JS","JWT Auth","NodeJS"],
   title: "Blog App Using MERN Stack", 
   Giturl:'https://github.com/ShivkumarSalunkhe?tab=repositories',
   Weburl:'',
   description: 
     "A Blog App is a software or service that allows you to create, manage, and publish content on the internet in the form of a blog.Technologies Used: ReactJS, NodeJS, ExpressJS, MongoDB, Material UI, HTML, CSS & many other libraries. Also Used JWTs for users Authentication and Authorization.",
   getImageSrc: () => require("../images/BlogAppgif.gif"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#097d81" 
     isDarkBackground 
     p={10} 
     alignItems="flex-start" 
     spacing={10} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={10} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           tag={project.tag}
           Giturl={project.Giturl} 
           Weburl={project.Weburl}
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;