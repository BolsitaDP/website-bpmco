import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import procesosImg from "../../assets/Procesos.png";
import { clientesBPMco } from "../../utils/clientes";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <h1 className="about-title">Qué hacemos</h1>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            alignItems: "center",
            height: "50vh",
            display: "flex",
            gap: "10%",
          }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}>
            Nuestros servicios están orientados a proveer mecanismos para que
            los Procesos Administrativos tengan un nivel de gestión similar al
            que se tiene para los Procesos Productivos, con una gestión estricta
            de las entradas, los procedimientos y los controles para tener el
            resultado final deseado. Vamos más allá de los Diagramas de Procesos
            que sólo funcionan en el papel. Nos involucramos en el Proceso como
            tal, en cómo se ejecuta día a día y cómo intervienen sus actores
            para llegar a una implementación en la que los controles y la
            gestión no sacrifiquen la Productividad.
          </Col>
          <Col md={5} style={{}} className="about-img">
            <img src={procesosImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col md={12}>
            <h2>Conoce nuestros clientes</h2>
          </Col>
          <Col md={12}>
            <div className="clientes-container">
              {clientesBPMco.map((cliente, index) => {
                return (
                  <div className="card-cliente" key={index}>
                    <div className="cliente-nombre">{cliente.nombre}</div>
                    <div className="cliente-logo">
                      <img alt={cliente.nombre} src={cliente.logo} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
