// GSAP Анімація для мутантів
gsap.to("#bloodsucker-img", {
  opacity: 1,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
gsap.to("#snork-img", {
  opacity: 1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
gsap.to("#controller-img", {
  opacity: 1,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// Particles.js для ефекту аномалії
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00ff00" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ff00",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});