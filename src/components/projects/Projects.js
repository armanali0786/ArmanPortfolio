import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,live, netflix,addtocart , deliverypoint} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <a href='http://405live.com' target='_blank' style={{textDecoration: "none",color:"white"}}>
        <ProjectsCard
          title="405 Live "
          des="Developed a user-friendly platform for accessing information on
          upcoming events, including event details, venue information, and event
          locations, user authentication and advanced search functionality, events, filtered events,venues events, favourites. "
          src={live}
        />
        </a>
        <a href='https://github.com/armanali0786/delivery-point' target='_blank' style={{ textDecoration: "none", color: "white" }}>
            <ProjectsCard
              title=" Delivery Point "
              des="Design and developed websites features such as food listing with quick delivery options within 30 minutes, showcasing top-rated restaurants, 
          and enabling robust search capabilities for food items and restaurants, 
          Developed detailed food item pages displaying images, descriptions, prices and ratings."
              src={deliverypoint}
            />
          </a>
        <a href='https://github.com/armanali0786/social-media-app' target='_blank' style={{textDecoration: "none",color:"white"}}>
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" The project will be implemented using the MERN stack to ensure scalability, performance, and responsiveness. 
          Key features include user authentication and advanced search functionality,add friends, profiles, post sharing, likes, comments. "
          src={projectOne}
        />
        </a>
        <a href='https://github.com/armanali0786/Netflix_Clone' target='_blank' style={{textDecoration: "none",color:"white"}}>
         <ProjectsCard
          title="NetFlix Clone"
          des=" The Netflix Clone project aims to replicate the core functionality and user experience of the popular streaming platform Netflix. 
          Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js). "
          src={netflix}
        />
         </a> 
        <a href='https://github.com/armanali0786/Rental-Management-System' target='_blank' style={{textDecoration: "none", color:"white"}} > 
        <ProjectsCard
          title="Rental Management System"
          des=" Developed a web application which is used to find the house on rent nearby share. 
          Implemented an admin panel that allows administrator to add customers and add their services to see all rental details. "
          src={projectThree}
        />
        </a>
         <a href='https://github.com/armanali0786/Redux-Add-To-Cart' target='_blank' style={{textDecoration: "none",color:"white"}}>
         <ProjectsCard
          title="Redux AddToCart"
          des=" A React Redux Add to Cart application utilizes React for UI components and Redux for state management. 
          It allows users to browse items, add them to a cart, and manage the cart's contents efficiently. "
          src={addtocart}
        />
         </a> 
        <a href='https://github.com/armanali0786/Dashboard-prime-react' target='_blank' style={{textDecoration: "none",color:"white"}}>
         <ProjectsCard
          title="Dashboard Prime React"
          des=" A basic MERN stack dashboard project that displays user signup data with a Line Chart and Pie Chart representing signup counts by month. 
          It also includes a data table showing detailed user information. "
          src={projectTwo}
        />
         </a> 
      </div>
    </section>
  );
}

export default Projects