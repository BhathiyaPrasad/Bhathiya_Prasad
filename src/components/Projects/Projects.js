import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soulfood from "../../Assets/Projects/soulfood.png";
import sweetbeans from "../../Assets/Projects/sweetbeans.png";
import chatify from "../../Assets/Projects/chatify.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import QrFoodOrder from "../../Assets/Projects/QRFoodOrder.jpeg";
import TourBook from "../../Assets/Projects/TourBook.jpeg";
import ECommerce from "../../Assets/Projects/ECommerce.jpeg";
import './projects.css'; 

function Projects() {
  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white overflow-hidden">
      <Particle className="absolute inset-0" />
      <div className="project-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 to-[#0a192f]" />
        <div className="relative z-10 text-center p-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            My <span className="text-[#c770f0] inline-block hover:scale-110 transition-transform duration-300">Projects</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>
      </div>
      {/* Main content container with gradient overlay */}
      <Container fluid className="relative  px-4 py-16 md:py-24">
        <Container className="p-10">
          {/* Heading Section with Animation */}
          <div className="text-center mb-12 md:mb-16">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              My <span className="text-[#c770f0] inline-block hover:scale-110 transition-transform duration-200">Projects</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up">
              Here are a few projects I've worked on recently.
            </p> */}
          </div>

          {/* Projects Grid */}
          <Row className="justify-content-center g-4">
            {[
              {
                imgPath: chatify,
                title: "Clothing Store",
                domain: "Saluni Fashion",
                description: "",
                ghLink: "https://Salunifashion.lk/",
                demoLink: "https://Salunifashion.lk/",
              },
              {
                imgPath: portfolio,
                title: "My Portfolio",
                domain: "Bhathiya Prasad",
                description: "",
                ghLink: "https://github.com/BhathiyaPrasad/Bhathiya_Prasad.git",
                demoLink: "https://bhathiyaprasad.com",
              },
              {
                imgPath: sweetbeans,
                title: "Sweet Beans Cafe Website",
                domain: "Sweet Beans Kandy",
                description: "",
                ghLink: "https://sweetbeans.lk",
                demoLink: "https://sweetbeans.lk",
              },
              {
                imgPath: soulfood,
                title: "Restaurant QR Food Order With Website",
                domain: "Soul Food Kandy",
                description: "",
                ghLink: "https://soulfood.lk",
                demoLink: "https://soulfood.lk",
              },
              {
                imgPath: QrFoodOrder,
                title: "QR Food Ordering Platform",
                description: "",
                ghLink: "https://github.com/BhathiyaPrasad",
                demoLink: "https://food-menu-silverray.vercel.app/",
              },
              {
                imgPath: TourBook,
                title: "Tour Booking Platform",
                description: "",
                ghLink: "https://github.com/BhathiyaPrasad",
                demoLink: "https://tourism-web-app-eight.vercel.app/",
              },
              {
                imgPath: ECommerce,
                title: "ECommerce Platform",
                description: "",
                ghLink: "https://github.com/BhathiyaPrasad",
                demoLink: "https://clothing-platform-nextjs-nkcq.vercel.app/",
              },
            ].map((project, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard {...project} isBlog={false} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/50 to-[#0a192f] pointer-events-none" />
    </div>
  );
}

export default Projects;