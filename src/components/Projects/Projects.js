import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soulfood from "../../Assets/Projects/soulfood.png";
import emotion from "../../Assets/Projects/emotion.png";
import sweetbeans from "../../Assets/Projects/sweetbeans.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E Commerce Clothing Store"
              description=""
              ghLink="https://Salunifashion.lk/"
              demoLink="https://Salunifashion.lk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
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
              description=""
              ghLink="https://sweetbeans.lk"
              demoLink="https://sweetbeans.lk"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soulfood}
              isBlog={false}
              title="Restaurant QR Food Order With Website - SoulFoods"
              description=""
              ghLink="https://soulfood.lk"
              demoLink="https://soulfood.lk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description=""
              ghLink=""
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
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
