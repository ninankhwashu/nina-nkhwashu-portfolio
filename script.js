const developerProjects = [
  {
    title: "Arcane Chronicles",
    media: "dev media/Arcane Chronicles.mp4",
    type: "video",
    description:
      "An immersive, character-based quiz game inspired by Arcane: League of Legends. Players test their knowledge of the series by answering character-based questions, unlocking rich lore & interactive visuals along the way. Built with HTML, CSS, JavaScript. Features: Character selection system, quiz logic with score tracking, progress bar, custom animations (shimmer, shake, glow), real-time feedback, and a localStorage-based scoreboard. UI/UX: Looping background video (via AWS S3), SVG logo, custom favicon, Google Fonts, hover effects, blur states, responsive layout, and immersive theme styling. Tools used: Netlify (hosting), GitHub (version control), Google Fonts, Inkscape/Photoshop/Illustrator (for logo/favicons), AWS S3 (video background delivery).",
    link: "https://arcanequizgame.netlify.app",
  },
  {
    title: "The Lyrithium Engine",
    media: "dev media/The Lyrithium Engine.mp4",
    type: "video",
    description:
      "An elegant AI-powered poem generator that transforms user prompts into short, romantic verses with a single click. It uses natural language processing to craft personalized 8-line poems in real time. Built with HTML, CSS, JavaScript. Features: Typewriter animation for poem output, dynamic user input, SheCodes AI API integration, stylized poem formatting, form validation, loading indicator. UI/UX: Pastel color palette, soft shadowing, animated feedback, branded logo & favicon, background image styling. Tools used: SheCodes AI API, Axios (HTTP requests), Typewriter.js, Netlify (hosting), GitHub (version control), Inkscape/Photoshop/Illustrator (for logo & favicon).",
    link: "https://thelyrithiumengine.netlify.app",
  },
  {
    title: "Devallune",
    media: "dev media/Devallune.mp4",
    type: "video",
    description:
      "A responsive web app designed to inspire developers who feel stuck or need a push to start building. With a single click, users receive a random challenge, ranging from unconventional app ideas to quirky UI constraints (e.g. Build a weather app that speaks the forecast out loud or Create a form that changes based on typing speed. Built with HTML, CSS, JavaScript. Features: Animated glowing orbs for ambient motion, one-click random idea generation, UI highlight feedback, responsive design. UI/UX: Retro-futuristic black-and-gold aesthetic, glowing gradients, centered layout with smooth hover transitions. Tools used: Vanilla JS, CSS keyframe animations, Netlify (hosting), GitHub (version control), Inkscape/Photoshop/Illustrator (for logo/favicons).",
    link: "https://devallune.netlify.app",
  },
  {
    title: "Pathpholio",
    media: "dev media/Pathpholio.mp4",
    type: "video",
    description:
      "An interactive job application tracker that helps users organize and monitor their job hunt in one place, with smart filtering and localStorage-powered persistence. Built with HTML, CSS, JavaScript. Features: Add, filter, and delete job applications with live UI updates, localStorage persistence, status-based filtering, and real-time alerts. UI/UX: Green-and-cyan neon visual palette, responsive design, form validation, table-based data layout. Tools used: Vanilla JS, custom CSS transitions, Google Fonts, Netlify (hosting), GitHub (version control), Poppins font for professional feel, and Inkscape/Photoshop/Illustrator (for logo/favicons).",
    link: "https://pathpholio.netlify.app",
  },
  {
    title: "Standard Bank: UX Login Experience",
    media: "dev media/Standard Bank UX Login Experience.mp4",
    type: "video",
    description:
      "A modern and responsive login interface designed to enhance user onboarding and authentication flow for digital banking platforms using Standard Bank as a case study. Built with HTML, CSS, JavaScript. Features: Dual login/sign-up panels with smooth animated transitions, a reset password module with dynamic reveal, and a toggle system to switch between views. UI/UX: Modern banking aesthetic using gradients, rounded containers, subtle shadows, and responsive design powered by News Cycle font. Tools used: DOM scripting for state toggling, smooth CSS transitions/animations, mobile-first layout responsiveness, Figma (for branding), and Inkscape/Photoshop/Illustrator (for logo/favicons). Project Type: UI/UX showcase — frontend only, no backend functionality.",
    link: "https://stdbankuserlogin.netlify.app",
  },
  {
    title: "Pexzzles",
    media: "dev media/Pexzzles.mp4",
    type: "video",
    description:
      "A drag-and-drop photo puzzle game that lets users search for images using the Pexels API and solve them as customizable grid-based puzzles.Built with HTML, CSS, JavaScript, and REST API integration. Features: Drag & drop puzzle logic, image search, infinite scroll, timer, score tracking. UI/UX: Custom logo & favicon (designed in Inkscape/Photoshop/Illustrator), responsive layout, Google Fonts, CSS transitions. Tools used: Pexels API, GitHub, Figma (for branding), and Inkscape/Photoshop/Illustrator (for logo/favicons).",
    link: "https://pexzzles.netlify.app",
  },
  {
    title: "Tech Hub Solutions",
    media: "dev media/Tech Hub Solutions.mp4",
    type: "video",
    description:
      "Tech Hub Solutions is a professionally crafted website that showcases the offerings of an office supply company. The site includes dynamic product filtering, a customer testimonial slider, animated business stats, and interactive modals for service requests and cart actions. Built with HTML, CSS, JavaScript, jQuery, Slick Carousel. Features: • Product catalog with category filtering and interactive modals • Animated stats counters triggered on scroll • Contact form with validation and modal success feedback • Dark mode toggle with persistent state (localStorage) • Responsive design with mobile menu and smooth scrolling navigation. UX Focus: B2B-first layout emphasizing clarity, trust, and service accessibility. Tools used: DOM manipulation, Intersection Observer API, CSS animations, component-based layouting, Figma (for branding), Figma (for branding), and Inkscape/Photoshop/Illustrator (for logo/favicons).",
    link: "https://techhubsolutions.netlify.app",
  },
  {
    title: "FNB: UX Appointment Booking Experience",
    media: "dev media/FNB UX Appointment Booking Experience.mp4",
    type: "video",
    description:
      "A user-friendly interface designed to simplify and speed up the process of booking in-branch banking appointments without the hassle of waiting in queues.  Built with HTML, CSS, JavaScript. Features: • Client-side form validation with dynamic employee assignment • Weekday-only booking logic with real-time date filtering • Interactive onboarding screen and user-friendly UI • Appointment details summary with assistant assignment • Responsive, branded FNB design with custom background and animations. Tools used: DOM manipulation, date logic, event listeners, CSS animations, form validation, and Figma (for branding). UX Focus: Seamless booking experience with minimal clicks and clear confirmations. Goal: Streamlined branch traffic and eliminated queue congestion with a digital-first approach.",
    link: "https://fnbappointmentbooking.netlify.app",
  },
];

const imageVideoProjects = [
  {
    title: "Virtual Styling & Personal Shopper",
    media: "vs ps media/personal styling.jpg",
    type: "image",
    description:
      "Provided personalized fashion solutions tailored to the unique preferences, lifestyles, and needs of private clients. Delivered curated virtual styling sessions and personal shopping services, offering expert guidance on wardrobe selection, trend integration, and occasion-specific outfits—all through a seamless online experience.",
    link: "vs ps media/personal styling.jpg",
  },
  {
    title: "Steal Her Look",
    media: "vs ps media/steal her look.mp4",
    type: "video",
    description:
      "Created shoppable recreations of iconic outfits worn by public figures, expertly sourcing and styling each piece for effortless integration into clients' existing wardrobes. Delivered fashion-forward solutions that allowed clients to emulate high-profile looks with ease and confidence.",
    link: "vs ps media/steal her look.mp4",
  },
  {
    title: "Visual Merchandising",
    media: "vs ps media/visual merchandising.jpg",
    type: "image",
    description:
      "Curated strategic fashion displays for private clients, designed to provide clear insight into each piece and its styling potential. Presented thoughtfully arranged selections that enhanced the shopping experience and empowered clients with a deeper understanding of what they were purchasing.",
    link: "vs ps media/visual merchandising.jpg",
  },
  {
    title: "Virtual Haul",
    media: "vs ps media/virtual haul.mp4",
    type: "video",
    description:
      "Presented fashion hauls in a virtual format, showcasing key pieces, highlighting seasonal trends, and offering styling ideas to inspire clients. Delivered engaging and informative sessions that helped clients stay fashion-forward from the comfort of their own space.",
    link: "vs ps media/virtual haul.mp4",
  },
  {
    title: "What Would You Wear",
    media: "vs ps media/what would you wear.mp4",
    type: "video",
    description:
      "Developed audience-focused, interactive style scenarios aimed at sparking inspiration and guiding confident outfit choices for real-life moments. Engaged viewers through relatable fashion challenges, encouraging creativity and personal expression in everyday styling.",
    link: "vs ps media/what would you wear.mp4",
  },
  {
    title: "Fashion Item Sale Alert",
    media: "vs ps media/sale alert.png",
    type: "image",
    description:
      "Delivered real-time updates to private clients on must-have clothing, footwear, accessories, and jewelry pieces as they went on sale. Ensured clients stayed ahead of trends and secured coveted items at the best possible value through timely and personalized alerts.",
    link: "vs ps media/sale alert.png",
  },
  {
    title: "Brand Discount Alert",
    media: "vs ps media/discount alert.mp4",
    type: "video",
    description:
      "Provided timely updates on exclusive brand discounts, thoughtfully curated to align with the audience's personal style goals and budget-friendly must-haves. Helped clients make intentional purchases by connecting them with stylish deals tailored to their fashion preferences.",
    link: "vs ps media/discount alert.mp4",
  },
  {
    title: "Personal Style Mood Board",
    media: "vs ps media/mood board.png",
    type: "image",
    description:
      "Crafted personalized editorial mood boards to visually communicate style inspiration and direction for private clients. Translated individual tastes and fashion goals into cohesive, curated boards that served as a foundation for building or refining a client's personal style.",
    link: "vs ps media/mood board.png",
  },
];

const graphicDesignProjects = [
  {
    title: "ACAKÉ – Brand Identity Design",
    media: "gd media/brand identity.png",
    type: "image",
    description:
      "The brand identity for ACAKÉ blends whimsical charm with sophistication. The logo creatively combines the letter A with a cupcake silhouette, establishing a strong, memorable symbol. Typography choices include the refined Amoria and the friendly Violina, balancing elegance with approachability.",
    link: "gd media/brand identity.png",
  },
  {
    title: "Sassy Sunday – Event Poster Design",
    media: "gd media/event poster.png",
    type: "image",
    description:
      "The poster design radiates bold luxury and energy, aligning with the upscale and lively vibe of the event. The central figure of Uncle Waffles is styled in red fur and gold accessories, creating a high-fashion focal point.",
    link: "gd media/event poster.png",
  },
  {
    title: "Chromatic Reverie - Etsy Art Poster Design",
    media: "gd media/art poster.png",
    type: "image",
    description:
      "This artwork fuses cybernetic aesthetics with surrealism, using a bold palette of teal, orange, and chrome to create a hypnotic, reflective surface effect. The smooth gradients and abstract patterning suggest a synthetic or augmented being.",
    link: "gd media/art poster.png",
  },
  {
    title: "ACAKÉ – Bakery Website Design",
    media: "gd media/web design.png",
    type: "image",
    description:
      "This web design features a warm, inviting aesthetic that blends soft pastel colors with high-quality food imagery to create an engaging user experience. The homepage welcomes visitors with a hero image of fresh pastries and a clear call-to-action.",
    link: "gd media/web design.png",
  },
  {
    title: "BAD GAL RIRI – T-Shirt Design",
    media: "gd media/tshirt design.png",
    type: "image",
    description:
      "This design uses a deep red monochrome palette with layered vector effects to create a gritty, high-contrast image that radiates confidence and rebellion. The artwork captures Rihanna mid-expression—playful, fierce, and unapologetic.",
    link: "gd media/tshirt design.png",
  },
  {
    title: "Cloud of Zen – Matcha Ice Cream Promo Design",
    media: "gd media/ice cream promo.png",
    type: "image",
    description:
      "This design blends elegance and flavor with a rich green palette inspired by matcha. The swirling soft-serve cone takes center stage, emphasized by a stylized background of flowing clouds and traditional Eastern motifs.",
    link: "gd media/ice cream promo.png",
  },
  {
    title: "The Holy Grail – Fast Food Promo Design",
    media: "gd media/fast food promo.png",
    type: "image",
    description:
      "This bold and energetic layout uses high-contrast colors—black, orange, and white—to grab attention and emphasize urgency with the #limitededition tag. The food imagery is vibrant, detailed, and mouth-watering.",
    link: "gd media/fast food promo.png",
  },
  {
    title: "Scarlet Sin – Mocktail Promo Design",
    media: "gd media/drink promo.png",
    type: "image",
    description:
      "This design radiates luxury and allure through its rich red color scheme and floral illustrations. The deep crimson mocktail, served in a faceted glass and garnished with dark cherries, captures immediate attention.",
    link: "gd media/drink promo.png",
  },
];

const projectModal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");
const modalMediaContainer = document.querySelector(".modal-media");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const closeBtn = document.querySelector(".close-btn");

let currentProjectIndex = 0;
let currentProjectArray = [];

const specialVideos = [
  "vs ps media/steal her look.mp4",
  "vs ps media/virtual haul.mp4",
  "vs ps media/what would you wear.mp4",
  "vs ps media/discount alert.mp4",
];

function openProjectModal(index, projectArray) {
  currentProjectIndex = index;
  currentProjectArray = projectArray;
  updateModalContent();
  projectModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function updateModalContent() {
  const project = currentProjectArray[currentProjectIndex];

  modalTitle.textContent = project.title;
  modalText.textContent = project.description;
  modalLink.href = project.link;

  modalMediaContainer.innerHTML = "";

  if (project.type === "video") {
    const video = document.createElement("video");
    video.setAttribute("controls", "");
    const source = document.createElement("source");
    source.src = project.media;
    source.type = "video/mp4";
    video.appendChild(source);
    video.appendChild(
      document.createTextNode("Your browser does not support the video tag.")
    );

    if (specialVideos.includes(project.media)) {
      video.style.width = "70%";
      video.style.height = "70%";
    }

    modalMediaContainer.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = project.media;
    img.alt = project.title;
    modalMediaContainer.appendChild(img);
  }
}

function navigateProjects(direction) {
  if (direction === "next") {
    currentProjectIndex =
      (currentProjectIndex + 1) % currentProjectArray.length;
  } else {
    currentProjectIndex =
      (currentProjectIndex - 1 + currentProjectArray.length) %
      currentProjectArray.length;
  }
  updateModalContent();
}

function closeProjectModal() {
  projectModal.style.display = "none";
  document.body.style.overflow = "";
}

nextBtn.addEventListener("click", () => navigateProjects("next"));
prevBtn.addEventListener("click", () => navigateProjects("prev"));
closeBtn.addEventListener("click", closeProjectModal);

window.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (projectModal.style.display === "flex") {
    if (event.key === "Escape") {
      closeProjectModal();
    } else if (event.key === "ArrowRight") {
      navigateProjects("next");
    } else if (event.key === "ArrowLeft") {
      navigateProjects("prev");
    }
  }
});

document
  .querySelectorAll("#developer-projects .view-project")
  .forEach((btn, index) => {
    btn.addEventListener("click", () =>
      openProjectModal(index, developerProjects)
    );
  });

document
  .querySelectorAll("#image-video-projects .view-project")
  .forEach((btn, index) => {
    btn.addEventListener("click", () =>
      openProjectModal(index, imageVideoProjects)
    );
  });

document
  .querySelectorAll("#graphic-design-projects .view-project")
  .forEach((btn, index) => {
    btn.addEventListener("click", () =>
      openProjectModal(index, graphicDesignProjects)
    );
  });

document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = Array.from(
    document.querySelectorAll(".testimonial-card")
  );
  const testimonialPopup = document.querySelector(".testimonial-popup");
  const popupImg = document.querySelector(".testimonial-popup-img");
  const closeBtn = document.querySelector(".testimonial-close");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");

  let currentTestimonialIndex = 0;
  const testimonialImages = testimonialCards.map(
    (card) => card.querySelector("img").src
  );

  function openTestimonialPopup(index) {
    currentTestimonialIndex = index;
    updateTestimonialImage();
    testimonialPopup.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function updateTestimonialImage() {
    popupImg.src = testimonialImages[currentTestimonialIndex];
  }

  function navigateTestimonials(direction) {
    if (direction === "next") {
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonialImages.length;
    } else {
      currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonialImages.length) %
        testimonialImages.length;
    }
    updateTestimonialImage();
  }

  function closeTestimonialPopup() {
    testimonialPopup.classList.remove("active");
    document.body.style.overflow = "";
  }

  testimonialCards.forEach((card, index) => {
    card.addEventListener("click", () => openTestimonialPopup(index));
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateTestimonials("next");
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateTestimonials("prev");
  });

  closeBtn.addEventListener("click", closeTestimonialPopup);

  testimonialPopup.addEventListener("click", (e) => {
    if (e.target === testimonialPopup) {
      closeTestimonialPopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (testimonialPopup.classList.contains("active")) {
      if (e.key === "Escape") {
        closeTestimonialPopup();
      } else if (e.key === "ArrowRight") {
        navigateTestimonials("next");
      } else if (e.key === "ArrowLeft") {
        navigateTestimonials("prev");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emailElement = document.querySelector(".copy-email");
  if (emailElement) {
    emailElement.addEventListener("click", function () {
      const email = "ninankhwashu@gmail.com";

      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          const originalText = emailElement.textContent;
          emailElement.textContent = "Copied!";
          setTimeout(() => {
            emailElement.textContent = originalText;
          }, 2000);
        }
      } catch (err) {
        console.error("Failed to copy email: ", err);
      }

      document.body.removeChild(textarea);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const years = [
    "2015",
    "2016",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2024",
    "2025",
    "FUTURE",
  ];

  const container = document.getElementById("particles");
  const containerRect = container.getBoundingClientRect();
  const particles = [];

  years.forEach((year) => {
    const particle = document.createElement("div");
    particle.className = `timeline-particle ${
      year === "FUTURE" ? "future" : ""
    }`;
    particle.textContent = year;
    particle.dataset.year = year;

    const size = 90;
    const x = Math.random() * (containerRect.width - size * 2) + size;
    const y = Math.random() * (containerRect.height - size * 2) + size;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    container.appendChild(particle);
    particles.push({
      element: particle,
      x: x,
      y: y,
      vx: Math.random() * 3 - 1,
      vy: Math.random() * 3 - 1,
      year: year,
    });
  });

  function animateParticles() {
    const container = document.getElementById("particles");
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    const particleSize = 80;

    particles.forEach((p) => {
      let nextX = p.x + p.vx;
      let nextY = p.y + p.vy;

      if (nextX + particleSize > width) {
        p.vx *= -1;
        nextX = width - particleSize;
      } else if (nextX < 0) {
        p.vx *= -1;
        nextX = 0;
      }

      if (nextY + particleSize > height) {
        p.vy *= -1;
        nextY = height - particleSize;
      } else if (nextY < 0) {
        p.vy *= -1;
        nextY = 0;
      }

      p.x = nextX;
      p.y = nextY;
      p.element.style.left = `${p.x}px`;
      p.element.style.top = `${p.y}px`;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  const timelineModal = document.getElementById("timeline-modal");
  const closeModal = document.querySelector(".close-modal");
  const prevYearBtn = document.querySelector(".prev-year");
  const nextYearBtn = document.querySelector(".next-year");
  const allContent = document.querySelectorAll(".timeline-content");

  let currentYearIndex = 0;

  function showContentForYear(year) {
    allContent.forEach((content) => content.classList.remove("active"));

    const contentToShow = document.querySelector(
      `.timeline-content[data-year="${year}"]`
    );
    if (contentToShow) {
      contentToShow.classList.add("active");
      currentYearIndex = years.indexOf(year);
    }
  }

  function openTimelineModal(year) {
    showContentForYear(year);
    timelineModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function navigateYears(direction) {
    if (direction === "prev") {
      currentYearIndex = (currentYearIndex - 1 + years.length) % years.length;
    } else {
      currentYearIndex = (currentYearIndex + 1) % years.length;
    }
    showContentForYear(years[currentYearIndex]);
  }

  function closeTimelineModal() {
    timelineModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  particles.forEach((p) => {
    p.element.addEventListener("click", () => openTimelineModal(p.year));
  });

  closeModal.addEventListener("click", closeTimelineModal);
  prevYearBtn.addEventListener("click", () => navigateYears("prev"));
  nextYearBtn.addEventListener("click", () => navigateYears("next"));

  timelineModal.addEventListener("click", (e) => {
    if (e.target === timelineModal) {
      closeTimelineModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (timelineModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeTimelineModal();
      } else if (e.key === "ArrowLeft") {
        navigateYears("prev");
      } else if (e.key === "ArrowRight") {
        navigateYears("next");
      }
    }
  });

  document.getElementById("download-cv").addEventListener("click", function () {
    const cvUrl = "media/ROLW Resume CV Nina Nkhwashu.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "ROLW Resume CV Nina Nkhwashu.pdf";
    link.style.display = "none";

    const notification = document.createElement("div");
    notification.textContent = "Download started!";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "#1abc9c";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";

    document.body.appendChild(link);
    link.click();
    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(link);
      notification.style.opacity = "0";
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  });

  window.addEventListener("resize", () => {
    containerRect = container.getBoundingClientRect();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cube = document.querySelector(".skills-cube");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cube.classList.remove("paused");
        } else {
          cube.classList.add("paused");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (cube) {
    observer.observe(cube);
  }
});

window.addEventListener("load", () => {
  const bgVideo = document.querySelector(".video-background video");
  if (bgVideo) {
    bgVideo.play().catch((e) => {
      console.warn("Background video autoplay failed:", e);
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.querySelector(".logo-link");

  if (logoLink) {
    logoLink.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload();
    });
  }
});
