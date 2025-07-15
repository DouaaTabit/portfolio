// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle for mobile
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('nav');
    
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-times');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
        });
    });
    
    // Highlight active section in navbar
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Project demo button functionality
document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Ici vous pouvez ajouter le lien vers votre démo en ligne si disponible
        alert('Live demo will be available soon!');
        // Ou remplacer par: window.open('https://votre-live-demo.com', '_blank');
    });
});
// Project links functionality
document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Pour la calculatrice, on peut afficher une image agrandie
        if(this.closest('.projects-box').querySelector('h4').textContent === 'Python Calculator') {
            const screenshotUrl = 'https://raw.githubusercontent.com/DouaaTabit/douaahorse/main/assets/img/calculator.jpg';
            const popup = window.open('', 'Calculator Screenshot', 'width=600,height=500');
            popup.document.write(`<img src="${screenshotUrl}" style="max-width:100%;">`);
        } else {
            alert('Live demo will be available soon!');
        }
    });
});

document.querySelectorAll('.code-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('GitHub repository will be available soon!');
        // Quand vous aurez uploadé le code: window.open('https://github.com/yourusername/calculator', '_blank');
    });
});
// Project demo functionality
document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Pour la calculatrice
        if(this.classList.contains('calculator-demo')) {
            const screenshots = [
                'https://raw.githubusercontent.com/DouaaTabit/calculator-project/main/calculator-screenshot.jpg',
                // Ajoutez d'autres screenshots si disponible
            ];
            
            let currentImg = 0;
            const popup = window.open('', 'Calculator Screenshots', 'width=600,height=500,top=100,left=100');
            popup.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Calculator Screenshots</title>
                    <style>
                        body { 
                            margin: 0; 
                            padding: 20px; 
                            background-color: #161616; 
                            color: white;
                            text-align: center;
                            font-family: 'Poppins', sans-serif;
                        }
                        img { 
                            max-width: 100%; 
                            max-height: 400px;
                            border: 2px solid #b74b4b;
                            border-radius: 10px;
                        }
                        .nav-btn {
                            background-color: #b74b4b;
                            color: white;
                            border: none;
                            padding: 8px 15px;
                            margin: 10px;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                    </style>
                </head>
                <body>
                    <h2>Python Calculator</h2>
                    <img src="${screenshots[0]}" id="screenshot-img">
                    <div>
                        <button class="nav-btn" onclick="changeImg(-1)">Previous</button>
                        <button class="nav-btn" onclick="changeImg(1)">Next</button>
                    </div>
                    <script>
                        let currentImg = 0;
                        const screenshots = ${JSON.stringify(screenshots)};
                        
                        function changeImg(direction) {
                            currentImg = (currentImg + direction + screenshots.length) % screenshots.length;
                            document.getElementById('screenshot-img').src = screenshots[currentImg];
                        }
                    </script>
                </body>
                </html>
            `);
        } else {
            // Pour les autres projets
            alert('Live demo will be available soon!');
        }
    });
});
// Smooth scrolling for education link
document.querySelector('a[href="#education"]').addEventListener('click', function(e) {
    e.preventDefault();
    const educationSection = document.querySelector('#education');
    if (educationSection) {
        window.scrollTo({
            top: educationSection.offsetTop - 100,
            behavior: 'smooth'
        });
    }
});
// Antivirus Tool Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scanBtn = document.getElementById('scan-btn');
    const cleanBtn = document.getElementById('clean-btn');
    const resultsDiv = document.getElementById('results');
    const statsDiv = document.getElementById('stats');
    
    // This is a client-side simulation
    // For real functionality, you'd need a backend
    scanBtn.addEventListener('click', function() {
        const directory = document.getElementById('scan-path').value;
        
        if (!directory) {
            alert('Please enter a directory path');
            return;
        }
        
        // Simulate scanning (in a real app, this would be an API call)
        resultsDiv.innerHTML = '<p>Scanning directory: ' + directory + '</p>';
        
        setTimeout(() => {
            // Simulated results
            resultsDiv.innerHTML = `
                <p>Found 3 duplicate files:</p>
                <ul>
                    <li>image1.jpg (2 copies)</li>
                    <li>document.pdf (3 copies)</li>
                    <li>video.mp4 (2 copies)</li>
                </ul>
                <p>Total duplicates: 7 files</p>
            `;
            statsDiv.textContent = 'Ready to clean duplicates';
        }, 1500);
    });
    
    cleanBtn.addEventListener('click', function() {
        const directory = document.getElementById('scan-path').value;
        const keepNewest = document.getElementById('keep-newest').checked;
        
        if (!directory) {
            alert('Please scan a directory first');
            return;
        }
        
        // Simulate cleaning
        statsDiv.textContent = 'Cleaning duplicates...';
        
        setTimeout(() => {
            statsDiv.textContent = 'Success! Removed 5 duplicate files, freed 15.2 MB';
            resultsDiv.innerHTML += '<p>Cleaning completed!</p>';
        }, 2000);
    });
    
    // For a real implementation, you would need:
    // 1. A backend API (Flask/Django/Node.js)
    // 2. AJAX calls to the API endpoints
    // 3. Proper error handling
});
// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});