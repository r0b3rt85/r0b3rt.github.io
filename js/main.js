// Navigation
// TODO: Add navigation scripts


// Particle.js for animated background
particlesJS("particles", {
  particles: {
    number: { value: 29, density: { enable: true, value_area: 800 } },
    color: { value: "#1b7be7" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.13629002517356945,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 44.09383167380187,
      random: true,
      anim: {
        enable: true,
        speed: 2.4362316369040355,
        size_min: 10,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 109.63042366068159,
        size: 20.301930307533627,
        duration: 0.9744926547616141,
        opacity: 0.828318756547372,
        speed: 3
      },
      repulse: { distance: 600, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
requestAnimationFrame(update);