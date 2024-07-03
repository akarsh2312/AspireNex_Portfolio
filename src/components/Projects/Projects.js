import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import two from "../../Assets/Projects/2.png";
import notion from "../../Assets/Projects/notion.jpg"; 
import blog from "../../Assets/Projects/blog.jpg"; 
import crypto from "../../Assets/Projects/crypto.jpg"; 
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
              imgPath={notion}
              isBlog={false}
              title="Note taking Application"
              description="Created a clone of Notion which provides a boasting real-time database functionality and a user-friendly editor. It supports infinite children documents, Trash-Can features for soft deletes and robust authentication. "
              ghLink="https://github.com/akarsh2312/Notion"
              demoLink="https://notion-clone-incruder1.vercel.app/"
            />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title=" Awesome Blog"
              description=" Developed a robust blogging application using React.js,Redux, and React Hook Forms integrated with Appwrite backendservices."
              ghLink="https://github.com/akarsh2312/Blog-website-using-Appwrite"
              demoLink="https://appwrite-vite-blog-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={two}
              isBlog={false}
              title="Videotube"
              description=" Developed a robust backend of video streaming platform using Node.js, Express.js, MongoDB, cloudinary, etc. and implemented functionalities like user authentication,video uploads,like,commenting, replying, subscription management,etc" 
              ghLink="https://github.com/akarsh2312/TubeTime"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="X-Crypto"
              description="X-Crypto is a real time crypto exchanges and coins listing application which also show rate of change of rates of cryptocurrencies with respect to time developed using ReactJS and CoinGeckGO API"
              ghLink="https://github.com/akarsh2312/Xcrypto"
              demoLink="https://mycrypto-pied.vercel.app/"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
