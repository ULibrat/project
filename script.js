document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.textContent = "☀️";
  }

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      themeToggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");

  burgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    if (mainNav.classList.contains("active")) {
      burgerBtn.textContent = "✕";
    } else {
      burgerBtn.textContent = "☰";
    }
  });

  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      burgerBtn.textContent = "☰";
    });
  });

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("formSuccess");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    nameError.classList.remove("visible");
    emailError.classList.remove("visible");
    messageError.classList.remove("visible");
    successMsg.classList.remove("visible");
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    messageInput.classList.remove("error");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Пожалуйста, введите ваше имя.";
      nameError.classList.add("visible");
      nameInput.classList.add("error");
      isValid = false;
    }
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Пожалуйста, введите ваш Email.";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent =
        "Введите корректный Email (например: name@mail.com).";
      emailError.classList.add("visible");
      emailInput.classList.add("error");
      isValid = false;
    }
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Пожалуйста, напишите сообщение.";
      messageError.classList.add("visible");
      messageInput.classList.add("error");
      isValid = false;
    }

    if (isValid) {
      successMsg.classList.add("visible");
      form.reset();

      setTimeout(() => {
        successMsg.classList.remove("visible");
      }, 4000);
    }
  });

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
});
