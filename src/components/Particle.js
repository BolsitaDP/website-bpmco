import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  const root = document.documentElement;

  // Obtén el valor de la variable --main-color
  const mainColor = getComputedStyle(root).getPropertyValue("--azulClaro");

  // Obtén el valor de la variable --background-color
  const backgroundColor =
    getComputedStyle(root).getPropertyValue("--background-color");

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          color: {
            value: mainColor, // Cambia este valor al color deseado (en formato hexadecimal)
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
