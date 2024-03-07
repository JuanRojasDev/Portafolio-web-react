import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from '../assets/img/project-img1.png';
import project2 from '../assets/img/project-img2.png';
import project3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: "This is a project description",
            imgUrl: project1,
        },
        {
            title: "Project 2",
            description: "This is a project description",
            imgUrl: project2,
        },
        {
            title: "Project 3",
            description: "This is a project description",
            imgUrl: project3,
        },
        {
            title: "Project 4",
            description: "This is a project description",
            imgUrl: project1,
        },
        {
            title: "Project 5",
            description: "This is a project description",
            imgUrl: project2,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Estos son algunos de mis proyectos</p>
                        <Tab.Container id="projects-tabs" defaultActivateKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">                        <Nav.Item>
                        <Nav.Link eventKey="first">Python</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">React</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Flutter</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                     </Tab.Pane>
                     <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                 </Tab.Container>
               </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}