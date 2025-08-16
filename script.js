document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and contents
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding content
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
            
            // Smooth scroll to section
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active tab based on scroll positio
    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 100;
        
        tabContents.forEach(content => {
            const section = content.id;
            const offset = document.getElementById(section).offsetTop;
            const height = document.getElementById(section).offsetHeight;
            
            if (fromTop >= offset && fromTop < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });s
});

 // Optional: Form submission handler
    document.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        document.getElementById('success').style.display = 'block';
      }
    });

// In your script.js file
document.querySelector('#home .btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all tabs
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Activate projects tab
    document.querySelector('a[href="#projects"]').classList.add('active');
    document.querySelector('#projects').classList.add('active');
    
    // Smooth scroll to projects
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

 const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });