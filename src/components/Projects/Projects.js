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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clothing Store"
              domain = "Saluni Fashion"
              description=""
              ghLink="https://Salunifashion.lk/"
              demoLink="https://Salunifashion.lk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              domain = "Bhathiya Prasad"
              description=""
              ghLink="https://github.com/BhathiyaPrasad/Bhathiya_Prasad.git"
              demoLink="https://bhathiyaprasad.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sweetbeans}
              isBlog={false}
              title="Sweet Beans Cafe Website"
              domain = "Sweet Beans Kandy"
              description=""
              ghLink="https://sweetbeans.lk"
              demoLink="https://sweetbeans.lk"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soulfood}
              isBlog={false}
              title="Restaurant QR Food Order With Website"
              domain = "Soul Food Kandy"
              description=""
              ghLink="https://soulfood.lk"
              demoLink="https://soulfood.lk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QrFoodOrder}
              isBlog={false}
              title="QR Food Ordering Platform"
              description=""
              ghLink=""
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TourBook}
              isBlog={false}
              title="Tour Booking Platform"
              description=""
              ghLink=""
              demoLink=""    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E-Commerce}
              isBlog={false}
              title="ECommerce_Platform"
              description=""
              ghLink=""
              demoLink=""    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
