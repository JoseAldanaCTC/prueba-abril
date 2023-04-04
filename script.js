// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Fade-in Animation on Scroll
  window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
  
  // Text Typing Effect
  const typeWriter = (textElement, words, wait = 3000) => {
    let wordIndex = 0;
    let text = "";
    const type = () => {
      if (wordIndex === words.length) {
        return;
      }
      text += words[wordIndex] + " ";
      wordIndex++;
      textElement.innerHTML = text;
      setTimeout(type, wait);
    };
    return type;
  };
  
  const textElement = document.querySelector(".header h2");
  const words = ["front-end developer", "video game developer", "programmer"];
  const type = typeWriter(textElement, words, 200);
  type();
  