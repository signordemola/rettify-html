// Schema toggle via URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getSchema = urlParams.get("schema");
if (getSchema === "dark") {
  document.documentElement.classList.add("uk-dark");
  localStorage.setItem("darkMode", "1");
} else if (getSchema === "light") {
  document.documentElement.classList.remove("uk-dark");
  localStorage.setItem("darkMode", "0");
}

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("hidden");
  }, 750); // 3000 milliseconds = 3 seconds
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  // Header animation starts at time 0 and lasts 1 second.
  tl.from("#header", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "back.out",
  });

  const animatedImgs = document.querySelectorAll(".animated-img");

  animatedImgs.forEach((element) => {
    gsap.from(
      element,
      {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "back.out",
      },
      1.1
    );
  });

  tl.from(
    "#truobleshooter",
    {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "back.out",
    },
    0.5
  );

  tl.from(
    "#flex-center",
    {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "back.out",
    },
    0.5
  );

  tl.from(
    "#investors",
    {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "back.out",
    },
    0.6
  );

  gsap.fromTo(
    "#divider",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: "#divider",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      duration: 1,
      scale: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#divider-2",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: "#divider-2",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      duration: 1,
      scale: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#next-circle",
    {
      scale: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: "#next-circle",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      duration: 1,
      y: 0,
      scale: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    ".columns",
    {
      scale: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: ".columns",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      duration: 1,
      y: 0,
      scale: 1,
      ease: "ease.inOut",
      stagger: 0.2,
    }
  );

  gsap.fromTo(
    "#platform",
    {
      y: 75,
    },
    {
      scrollTrigger: {
        trigger: "#platform",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      duration: 1,
      y: 0,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#about-left",
    {
      x: -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#about-left",
        start: "top bottom-=200",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#about-right",
    {
      x: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#about-right",
        start: "top bottom-=200",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#web-three-left",
    {
      x: -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#web-three-left",
        start: "top bottom-=200",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "back.out",
    }
  );

  gsap.fromTo(
    "#web-three-right",
    {
      x: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#web-three-right",
        start: "top bottom-=200",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "back.out",
    }
  );
});

const connectWallet = document.getElementById("uni_connect_wallet");

const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.getElementById("close-modal");

openModal.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked");

    connectWallet.style.display = "block";
    connectWallet.classList.add("uk-open");
  });
});

closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("closed");

  connectWallet.style.display = "none";
  connectWallet.classList.remove("uk-open");
});

// Reference to the <html> element.
const htmlEl = document.documentElement;

// Define arrays for each breakpoint.
const bpClasses = {
  xs: [
    "uk-background-white",
    "dark:uk-background-gray-100",
    "dark:uk-text-gray-20",
    "uk-dark",
    "dom-ready",
    "bp-xl-max",
    "bp-l-max",
    "bp-m-max",
    "bp-s-max",
    "bp-xs-max",
  ],
  s: [
    "uk-background-white",
    "dark:uk-background-gray-100",
    "dark:uk-text-gray-20",
    "uk-dark",
    "dom-ready",
    "bp-xl-max",
    "bp-l-max",
    "bp-m-max",
    "bp-s-max",
    "bp-xs",
  ],
  m: [
    "uk-background-white",
    "dark:uk-background-gray-100",
    "dark:uk-text-gray-20",
    "uk-dark",
    "dom-ready",
    "bp-xl-max",
    "bp-l-max",
    "bp-m-max",
    "bp-xs",
    "bp-s",
  ],
  l: [
    "uk-background-white",
    "dark:uk-background-gray-100",
    "dark:uk-text-gray-20",
    "uk-dark",
    "dom-ready",
    "bp-xl-max",
    "bp-l-max",
    "bp-xs",
    "bp-s",
    "bp-m",
  ],
  xl: [
    "uk-background-white",
    "dark:uk-background-gray-100",
    "dark:uk-text-gray-20",
    "uk-dark",
    "dom-ready",
    "bp-xl-max",
    "bp-xs",
    "bp-s",
    "bp-m",
    "bp-l",
  ],
};

// A helper to remove all bp-related classes.
function removeAllBpClasses() {
  const allBpClasses = [].concat(...Object.values(bpClasses));
  allBpClasses.forEach((cls) => htmlEl.classList.remove(cls));
}

// Define media queries for each breakpoint.
const mqXs = window.matchMedia("(max-width: 479px)");
const mqS = window.matchMedia("(min-width: 480px) and (max-width: 649px)");
const mqM = window.matchMedia("(min-width: 650px) and (max-width: 949px)");
const mqL = window.matchMedia("(min-width: 950px) and (max-width: 1200px)");
const mqXl = window.matchMedia("(min-width: 1201px)");

// Function to update the classes on the <html> element.
function updateBpClasses() {
  removeAllBpClasses();

  if (mqXl.matches) {
    bpClasses.xl.forEach((cls) => htmlEl.classList.add(cls));
  } else if (mqL.matches) {
    bpClasses.l.forEach((cls) => htmlEl.classList.add(cls));
  } else if (mqM.matches) {
    bpClasses.m.forEach((cls) => htmlEl.classList.add(cls));
  } else if (mqS.matches) {
    bpClasses.s.forEach((cls) => htmlEl.classList.add(cls));
  } else if (mqXs.matches) {
    bpClasses.xs.forEach((cls) => htmlEl.classList.add(cls));
  }
}

// Listen for changes in the media queries.
[mqXs, mqS, mqM, mqL, mqXl].forEach((mq) => {
  mq.addEventListener("change", updateBpClasses);
});

// Run on initial load.
updateBpClasses();
