function switchTheme() {
    var body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  
  window.onload = function() {
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', switchTheme);
  
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href');
        const sectionPosition = document.querySelector(sectionId).offsetTop;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      });
    });
  
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const images = carousel.querySelectorAll('img');
      let currentIndex = 0;
      setInterval(() => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
      }, 3000);
    }
  
    const form = document.querySelector('#contact form');
    if (form) {
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (email.value && message.value) {
          // Add your email sending code here
          console.log(`Sending email to: ${email.value}`);
          console.log(`Message: ${message.value}`);
        }
      });
    }
  
    const title = document.querySelector('header .logo');
    if (title) {
      const text = title.textContent;
      let index = 0;
      title.textContent = '';
      const typeWriterEffect = () => {
        if (index < text.length) {
          title.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriterEffect, 200);
        }
      };
      typeWriterEffect();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const progressContainer = document.getElementById('progress-container');
    const progressData = [
      {
        title: 'Web Development 101',
        description: 'I learned basics of web development, including HTML, CSS, JavaScript, Git, and more.',
        completionDate: '2023-01-01',
        linkToProject: 'https://github.com/yourusername/yourproject'
      },
      {
        title: 'Ruby Programming',
        description: 'I learned basics of Ruby and object-oriented programming.',
        completionDate: '2023-02-15',
        linkToProject: 'https://github.com/yourusername/yourproject'
      },
      // Add more objects here as you progress
    ];
  
    progressData.forEach(progressItem => {
      const html = `
        <div class="progress-item">
          <h4>${progressItem.title} <small>(Completed on ${progressItem.completionDate})</small></h4>
          <p>${progressItem.description}</p>
          <p>Check out my project <a href="${progressItem.linkToProject}" target="_blank">here</a>.</p>
        </div>
      `;
      progressContainer.insertAdjacentHTML('beforeend', html);
    });
  });
  