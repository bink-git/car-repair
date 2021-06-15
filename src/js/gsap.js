gsap.registerPlugin(ScrollTrigger);

gsap.from(".main__logo, .main__nav, .main__title, .main__btn", {
  duration: 2, 
  y: -50, 
  opacity: 0, 
  stagger: 0.4
});

gsap.from(".main__nav-link", {
  duration: 1, 
  y: 40, 
  stagger: 0.2, 
  opacity: 0,
});


gsap.from(".about__title", {
  scrollTrigger: {
    trigger: ".about_title",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".about__descr", {
  scrollTrigger: {
    trigger: ".about_descr",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  x: -70, 
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

gsap.from(".gallery__title",  {
  scrollTrigger: {
    trigger: ".gallery__title",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".impact__title",  {
  scrollTrigger: {
    trigger: ".impact__title",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".customers__title", {
  scrollTrigger: {
    trigger: ".customers__title",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0
});

gsap.from(".promices__block", {
  scrollTrigger: {
    trigger: ".promices__block",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  y: 70, 
  opacity: 0,
  stagger: 0.4
});

gsap.from(".text-overlay", {
  scrollTrigger: {
    trigger: ".text-overlay",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  x: 60, 
  opacity: 0
});

gsap.from(".services__block", {
  scrollTrigger: {
    trigger: ".services__block",
    toggleActions: "restart none none none"
  },
  duration: 1, 
  y: 70, 
  opacity: 0,
  stagger: 0.4
});

gsap.from(".form__wrapper", {
  scrollTrigger: {
    trigger: ".form__wrapper",
    toggleActions: "restart none none none",
  },
  duration: 1.5, 
  x: -60, 
  opacity: 0,
  stagger: 0.4,
});

gsap.from(".form__text", {
  scrollTrigger: {
    trigger: ".form__text",
    toggleActions: "restart none none none",
  },
  duration: 2, 
  x: 60, 
  opacity: 0,
  stagger: 0.4,
});

gsap.from(".swiper-wrapper", {
  scrollTrigger: {
    trigger: ".swiper-wrapper",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  y: 70, 
  opacity: 0,
  stagger: 0.4
});

gsap.from(".impact__counter", {
  scrollTrigger: {
    trigger: ".impact__counter",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  y: 70, 
  opacity: 0,
  stagger: 0.4
});

gsap.from(".impact__marker", {
  scrollTrigger: {
    trigger: ".impact__marker",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  x: -80, 
  opacity: 0, 
  scale: 0.8
});


gsap.from(".impact__img", {
  scrollTrigger: {
    trigger: ".impact__img",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  x: 0, 
  opacity: 0, 
  scale: 0.8
});

gsap.from(".about__img", {
  scrollTrigger: {
    trigger: ".about__img",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  x: 0, 
  opacity: 0, 
  scale: 0.8
});


gsap.from("#map", {
  scrollTrigger: {
    trigger: "#map",
    toggleActions: "restart none none none"
  },
  duration: 2, 
  x: 0, 
  opacity: 0, 
  scale: 0.8
});

gsap.from(".main__footer", {
  scrollTrigger: {
    trigger: ".main__footer",
    toggleActions: "restart none none none"
  },
  duration: 1.5, 
  y: 80, 
  opacity: 0.3,
  stagger: 0.5
});