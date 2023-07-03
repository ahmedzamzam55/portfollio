  // Form submission handling
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Disable form submission while processing
      form.querySelector("button[type='submit']").disabled = true;
  
      // Show a loading spinner or message
      const loadingMessage = document.createElement("p");
      loadingMessage.innerText = "Submitting...";
      form.appendChild(loadingMessage);
  
      // Simulate form submission delay (replace this with actual form submission logic)
      setTimeout(() => {
        // Remove loading message
        loadingMessage.remove();
  
        // Enable form submission
        form.querySelector("button[type='submit']").disabled = false;
  
        // Perform form validation
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const message = document.querySelector("textarea[name='message']").value;
  
        if (!name || !email || !message) {
          // Display an error message if any field is empty
          const errorMessage = document.createElement("p");
          errorMessage.innerText = "Please fill in all fields.";
          errorMessage.style.color = "red";
          form.appendChild(errorMessage);
          return;
        }
  
        // Clear form fields
        document.querySelector("input[name='name']").value = "";
        document.querySelector("input[name='email']").value = "";
        document.querySelector("textarea[name='message']").value = "";
  
        // Display a success message or perform any other necessary actions
        const successMessage = document.createElement("p");
        successMessage.innerText = "Form submitted successfully!";
        successMessage.style.color = "green";
        form.appendChild(successMessage);
      }, 2000); // Delay set to 2 seconds (2000 milliseconds)
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".navigation");
  
    navToggle.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      navigation.classList.toggle("show");
    }
  
    const navigationLinks = document.querySelectorAll(".navigation a");
  
    navigationLinks.forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("show");
      });
    });
  });

  window.onscroll = function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollToTopButton = document.querySelector('.scroll-to-top');
  
    if (scrollPosition > 0) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  const name = "I'm Ahmed Zamzam";
  console.log(name);
  const typewriterSpan = document.querySelector('.typewriter');

  function typeWriter(text, index) {
    if (index < text.length) {
      typewriterSpan.textContent += text.charAt(index);

      setTimeout(() => typeWriter(text, index + 1), 100);
      console.log(typewriterSpan.name);

    } else {
      setTimeout(() => {
        typewriterSpan.textContent = '';
        typeWriter(text, 0);
      }, 1500);
    }
  }

  typeWriter(name, 0);


  const services = document.querySelectorAll('.service');

  services.forEach(service => {
    service.addEventListener('mouseover', () => {
      services.forEach(otherService => {
        if (otherService !== service) {
          otherService.classList.remove('active');
        }
      });

      service.classList.toggle('active');
    });
  });

  const colorToggle = document.getElementById('colorToggle');
  const body = document.body;

  colorToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
  
  
  
  
  
  