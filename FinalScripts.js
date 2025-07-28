/* =====================================
   Smooth Scrolling for Anchor Links
====================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
/* =====================================
   Contact Form Validation & Feedback
====================================== */
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector('textarea');
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
/* =====================================
   Basic Validation
====================================== */
    if (!emailValue || !validateEmail(emailValue)) {
      alert('Please enter a valid email address.');
      email.focus();
      return;
    }

    if (!messageValue) {
      alert('Please enter your message.');
      message.focus();
      return;
    }

    alert("Thank you for your message, Parsa will get back to you soon!");
    this.reset();
  });
}
/* =====================================
   Email Validation Function
====================================== */
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
/* =====================================
   Active Menu Highlighting on Scroll
====================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
/* =====================================
   Optional: Back to Top Button
====================================== */
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 14px;
  font-size: 16px;
  display: none;
  z-index: 1000;
  border: none;
  background-color: #0066cc;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});