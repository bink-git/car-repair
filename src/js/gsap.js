gsap.registerPlugin(ScrollTrigger);

gsap.from(".main__logo, .main__nav, .main__title, .main__btn", {duration: 2, y: -50, opacity: 0, stagger: 0.4});
gsap.from(".main__nav-link", {duration: 1, y: 40, stagger: 0.2, opacity: 0,});


gsap.from(".about__title", {
  scrollTrigger: {
    trigger: ".about_title",
    toggleActions: "restart none none none"
  },

  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".services__title", {
  scrollTrigger: {
      trigger: ".services__title",
      toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".promices__title", {
  scrollTrigger: {
    trigger: ".promices__title",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

