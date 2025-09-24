
// Light Mode Toggle (default is dark)
const toggleBtn = document.getElementById("darkToggle");
if (toggleBtn) {
  // Set initial icon and mode from localStorage
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    toggleBtn.textContent = '🌙';
  }
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Contact Form Feedback
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const formStatus = document.getElementById("formStatus");

if (contactForm && sendBtn && clearBtn && formStatus) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      formStatus.textContent = "Please fill out all fields.";
      formStatus.className = "form-status error";
      return;
    }
    // Simulate sending
    formStatus.textContent = "Message sent! I'll get back to you soon.";
    formStatus.className = "form-status success";
    contactForm.reset();
  });

  clearBtn.addEventListener("click", function () {
    contactForm.reset();
    formStatus.textContent = "";
    formStatus.className = "form-status";
  });
}
