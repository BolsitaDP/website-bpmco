import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <h1 className="heading-name">
            <strong className="main-name">BPMco S.A.S.</strong>
          </h1>
          <h3 className="subheading-name">
            Trabajar por procesos es posible y fácil.
          </h3>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
