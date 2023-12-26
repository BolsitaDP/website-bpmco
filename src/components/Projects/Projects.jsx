import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import { productosBPMco } from "../../utils/productos";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="producto-heading">
          Nuestros <strong className="purple">productos</strong>
        </h1>
        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="productos-container">
          {productosBPMco.map((prod, index) => {
            return (
              <Col md={3} key={index} className="producto-card">
                <h3 className="producto-nombre">{prod.nombre}</h3>
                <div className="producto-img">
                  <img src={prod.logo} alt={prod.nombre} />
                </div>
                <div className="producto-informacion">{prod.informacion}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
