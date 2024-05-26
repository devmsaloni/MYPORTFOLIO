import React, {useState, useEffect } from 'react';
import "../components/MyPage.css"
import Typed from 'typed.js';
import { motion } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'
import myImage from "../components/Image/WhatsApp Image 2023-12-01 at 12.28.16_6976a1da.jpg"
import project1 from "../components/Image/Agecalculatorimage.jpg"
import project2 from "../components/Image/amazoncloneimage.jpg"
import project3 from "../components/Image/blogwebsiteimage.jpg"
import project4 from "../components/Image/CURRENCYCONVERTER.jpg"
import project5 from "../components/Image/WhatsApp Image editor.jpg"
import project6 from "../components/Image/WhatsApp Image editor1st.jpg"



const MyPage = () => {

    
//   ***************
        useEffect(() => {
          const typeData = new Typed('.role', {
            strings: [
              "DEVELOPER",
              "Full Stack Developer",
              "Web Developer",
              "Backend Developer",
              "Coder",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
          });
      
          return () => {
            typeData.destroy();
          };
        }, []);



        useEffect(()=>{
            Aos.init({duration:2000});
          }
          ,[]);

          
          
  return (
    <div>


{/* ************************** */}
<nav class="navbar NavSection fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand navtex  text-dark " href="#">SALONI,S PORTFOLIO</a>
    <button class="navbar-toggler  bg-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">SALONI,S PORTFOLIO</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active navtext  text-light " aria-current="page" href="#About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext   text-light " href="#Education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext   text-light" href="#Skill">Skill</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext   text-light " href="#SoftSkill">SoftSkill</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext  text-light " href="#Project">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext   text-light " href="#Experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  active navtext  text-light " href="#Contact">Contact</a>
          </li>
          
        </ul>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
{/* ******************************************************** */}


<div class="container namesection">
<div class="container text-center text-dark NameText"data-aos="fade-right">
    <h1>I AM SALONI KUMARI</h1>
    <div className="sectionsub">
      I am a <span className="role"></span>
    </div>
    <button class="btn btn-primary mt-3">
      <a href="#About" class="text-white text-decoration-none">Know Me Better</a>
    </button>
  </div>
  

  </div>

           
{/* **************************************** */}



        <div class="container about-section mt-3">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6">
                    <img src={myImage} alt="Your Image" class="about-image"/>
                </div>
                <div class="col-lg-8 col-md-6 text-dark">
                    <h2 id="About">About Me</h2>
                    <p class="about-text">Namaste ! I'm Saloni Kumari, a passionate Fullstack developer with expertise in HTML, CSS, JavaScript, React,Mongodb and Node.js. I enjoy creating visually appealing and user-friendly websites. My goal is to deliver high-quality code and seamless user experiences. In my free time, I love exploring new technologies and working on exciting projects. Let's connect and create something amazing together!</p>
                </div>
            </div>
        </div>
   


  {/* ****************************************************** */}
  <div class="container mt-5">
    <h2 class="text-center mb-4 textcolor"Id="Education">Education</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body"data-aos="fade-up">
            <h5 class="card-title">Bachelor of Commerce (B.Com) </h5>
            <p class="card-text">Lalit Narayan Mithila University, 2021 - 2024</p>
            <p class="card-text">Graduated with First Class Honors</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body"data-aos="fade-up">
            <h5 class="card-title">Higher Secondary Education</h5>
            <p class="card-text">D.A.V Public School, 2020 - 2021</p>
            <p class="card-text">Achieved 85% in Commerce Stream</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4"data-aos="fade-up">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Secondary Education</h5>
            <p class="card-text">ABC School, 2018 - 2019</p>
            <p class="card-text">Achieved 64% </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ************************************************* */}

  <div class="container mt-5">
    <h2 class="text-center mb-4 textcolor"id="Skill">Skills</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-up">
            <h5 class="card-title">HTML<i class="fa-brands fa-html5"></i></h5>
            <p class="card-text">Proficient in creating and structuring web content using HTML.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-up">
            <h5 class="card-title">CSS<i class="fa-brands fa-css3"></i></h5>
            <p class="card-text">Skilled in designing and styling web pages using CSS, including Flexbox and Grid.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-up">
            <h5 class="card-title">JavaScript<i class="fa-brands fa-js"></i></h5>
            <p class="card-text">Experienced in adding interactivity and dynamic behavior to web pages using JavaScript.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-down">
            <h5 class="card-title">Bootstrap<i class="fa-brands fa-bootstrap"></i></h5>
            <p class="card-text">Proficient in using Bootstrap for responsive.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-down">
            <h5 class="card-title">React<i class="fa-brands fa-react"></i></h5>
            <p class="card-text">Experienced in building single-page applications using React.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
  <div class="card h-100">
    <div class="card-body"data-aos="fade-down">
      <h5 class="card-title">MongoDB</h5>
      <p class="card-text">Skilled in using MongoDB for database management, including designing schemas and performing CRUD operations.</p>
    </div>
  </div>
</div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body"data-aos="fade-down">
            <h5 class="card-title">Node.js<i class="fa-brands fa-node-js"></i></h5>
            <p class="card-text">Skilled in building backend services and APIs using Node.js.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ************************************************************* */}

  
        <div class="container bg-teritory soft-skills-section mt-3">
            <h2 class="text-dark"id="SoftSkill">Soft Skills</h2>
            <div class="row ">
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-comments"></i>
                    <p>Communication</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-users"></i>
                    <p>Teamwork</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-lightbulb "></i>
                    <p>Problem-Solving</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-chart-line"></i>
                    <p>Adaptability</p>
                </div>
               
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-briefcase"></i>
                    <p>Work Ethic</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-brain"></i>
                    <p>Critical Thinking</p>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 soft-skill text-dark"data-aos="fade-right">
                    <i class="fas fa-tasks"></i>
                    <p>Time Management</p>
                </div>
            </div>
        </div>
   
  {/* ***************************************************** */}

  <div class="container mt-5">
  <h2 class="text-center mb-4 textcolor"id="Project">Project</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card"data-aos="fade-up">

          <img src={project1} class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">Age Calculator</h3>
          <a href="https://github.com/devmsaloni/AgeCalculator.git" class="btn btn-primary">See Code Here!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" data-aos="fade-up">

          <img src={project2}  class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">Amazon Clon</h3>
          <a href="https://github.com/devmsaloni/amazonClone.git" class="btn btn-primary">See Code Here!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card"data-aos="fade-up" >
          <img src={project3}  class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">Blog Website</h3>
          <a href="https://github.com/devmsaloni/Blog-website.git" class="btn btn-primary">See Code Here!</a>

          </div>
        </div>
      </div>
    </div>
  </div>
  {/* *********** */}

  <div class="container mt-5">
  <h2 class="text-center mb-4 textcolor"id="Project"></h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card"data-aos="fade-right">

          <img src={project4} class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">Currency Converter</h3>
          <a href="https://github.com/devmsaloni/CURRENCYCONVERTER.git" class="btn btn-primary">See Code Here!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" data-aos="fade-down">

          <img src={project5}  class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">FirstEditor</h3>
          <a href="https://github.com/devmsaloni/SecondEditorproject.git" class="btn btn-primary">See Code Here!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" data-aos="fade-right">
          <img src={project6}  class="card-img-top" alt="..."/>
          <div class="card-body">
          <h3 class="card-title">SecondEditor</h3>
          <a href="https://github.com/devmsaloni/Editor_project.git" class="btn btn-primary">See Code Here!</a>

          </div>
        </div>
      </div>
    </div>
  </div>
{/* *************************************************** */}

{/* <div class="container mt-5">
    <h2 class="text-center mb-4 textcolor"id="Experience">Experience</h2>
    <div class="timeline">
      <div class="timeline-item"data-aos="fade-right">
        <div class="timeline-icon text-dark">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-content text-dark">
          <h5 class="timeline-title">Frontend Developer</h5>
          <p class="timeline-date">XYZ Company, Jan 2021 - Present</p>
          <p class="timeline-description">Worked on developing responsive web applications using HTML, CSS, and JavaScript. Collaborated with designers and backend developers to create seamless user experiences.</p>
        </div>
      </div>
      <div class="timeline-item"data-aos="fade-right">
        <div class="timeline-icon text-dark">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-content text-dark">
          <h5 class="timeline-title">Backend Developer</h5>
          <p class="timeline-date">ABC Company, Jun 2019 - Dec 2020</p>
          <p class="timeline-description">Developed and maintained server-side logic using Node.js and MongoDB. Ensured high performance and responsiveness of applications by optimizing database queries and implementing caching strategies.</p>
        </div>
      </div>
      <div class="timeline-item"data-aos="fade-right">
        <div class="timeline-icon text-dark">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-content text-dark">
          <h5 class="timeline-title">Web Developer Intern</h5>
          <p class="timeline-date">Tech Startup, Jan 2018 - May 2019</p>
          <p class="timeline-description">Assisted in the development of web applications by writing clean and efficient code. Gained hands-on experience in both frontend and backend technologies, including React and Express.js.</p>
        </div>
      </div>
    </div>
  </div> */}
  {/* ************** */}

  
{/* ******************************************* */}

<div class="container my-5 ">
<h2 class="text-center mb-4 textcolor"id="Contact">Contact</h2>
  <footer class="bg-dark text-center text-dark">
  
  <div class="container p-4">
    
    <section class="mb-4">
    <a class="btn btn-outline-light btn-floating m-1" data-aos="fade-right" href=''><i class="fa-solid fa-phone "></i>  8826001740</a>
      {/* <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a> */}

      
      <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right"  href=" https://x.com/Salonimish69076?t=7WY-dDkOp-85Hpb9NShhTA&s=08" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      
      {/* <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a> */}

     
      {/* <a class="btn btn-outline-light btn-floating m-1" data-aos="fade-right"href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a> */}

     
      <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right" href="https://www.linkedin.com/in/saloni-kumari-44116b2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right" href="https://github.com/devmsaloni" role="button"
        ><i class="fab fa-github"></i
      ></a>
      <a class="btn btn-outline-light btn-floating m-1"data-aos="fade-right"  href=''><i class="fa-solid fa-envelope"></i>  msaloni252@gmail.com</a>

    </section>
    
  </div>
 

 </footer>
 
  
</div>

    </div>
  )
}

export default MyPage