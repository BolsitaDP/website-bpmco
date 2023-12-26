import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logoBlanco from "../../assets/BPMcoBlanco.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <div className="description-container">
        <h3 className="description-titulo">Conócenos</h3>
        <div className="description-content">
          <div className="description-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra
            sodales enim. In vulputate turpis vel finibus ullamcorper. Sed vitae
            consectetur turpis, at varius massa. Donec dapibus placerat nisi, a
            semper metus pharetra in. Fusce eget elit a lacus hendrerit aliquam.
            Etiam mollis lobortis tortor, vel tristique nisi finibus vitae.
            Praesent fermentum vel nisl a pellentesque. Sed nec dictum nulla.
            Quisque aliquam viverra justo eget scelerisque. Nulla ut metus
            faucibus, sodales erat eget, gravida arcu. Etiam aliquam tortor sit
            amet nisl tempor iaculis. Aenean in ex ante.
          </div>
          <div className="description-right">
            <img src={logoBlanco} alt="Logo BPMco blanco" />
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Home2;
