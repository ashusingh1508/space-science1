// Sample data for missions
const missionsData = [
    {
        id: 1,
        name: "Chandrayaan-3",
        description: "India's successful lunar landing mission that made history by reaching the Moon's south pole.",
        year: "2023",
        image: "images/chandrayaan.jpg",
        link: "#"
    },
    {
        id: 2,
        name: "Mangalyaan",
        description: "India's Mars Orbiter Mission that made ISRO the fourth space agency to reach Mars orbit.",
        year: "2014",
        image: "images/mangalyaan.jpg",
        link: "#"
    },
    {
        id: 3,
        name: "Gaganyaan",
        description: "India's first human spaceflight program, preparing to send astronauts to space.",
        year: "2024",
        image: "images/gaganyaan.jpg",
        link: "#"
    },
    {
        id: 4,
        name: "PSLV-C37",
        description: "Created world record by launching 104 satellites in a single mission.",
        year: "2017",
        image: "images/pslv.jpg",
        link: "#"
    },
    {
        id: 5,
        name: "Aditya-L1",
        description: "India's first solar mission to study the Sun's corona and solar winds.",
        year: "2023",
        image: "images/aditya.jpg",
        link: "#"
    },
    {
        id: 6,
        name: "RISAT-2B",
        description: "Radar imaging satellite for agriculture, forestry and disaster management.",
        year: "2019",
        image: "images/risat.jpg",
        link: "#"
    }
];

// Sample data for news
const newsData = [
    {
        id: 1,
        title: "ISRO announces new student satellite program",
        date: "15 Oct 2023",
        excerpt: "Educational institutions can now propose satellite projects to be launched by ISRO.",
        image: "images/news1.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "Chandrayaan-3 data reveals new lunar findings",
        date: "5 Oct 2023",
        excerpt: "Scientists discover unexpected mineral composition at Moon's south pole.",
        image: "images/news2.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "ISRO to launch 3 more satellites for navigation system",
        date: "28 Sep 2023",
        excerpt: "Expansion of NAVIC constellation to improve coverage and accuracy.",
        image: "images/news3.jpg",
        link: "#"
    }
];

// Populate mission cards
document.addEventListener('DOMContentLoaded', function() {
    const missionGrid = document.querySelector('.mission-grid');
    const newsGrid = document.querySelector('.news-grid');
    
    // Populate missions
    missionsData.forEach(mission => {
        missionGrid.innerHTML += `
            <div class="mission-card">
                <div class="mission-image">
                    <img src="${mission.image}" alt="${mission.name}">
                </div>
                <div class="mission-details">
                    <h3>${mission.name}</h3>
                    <p>${mission.description}</p>
                    <span class="mission-year">${mission.year}</span>
                    <a href="${mission.link}" class="btn small">Learn More</a>
                </div>
            </div>
        `;
    });
    
    // Populate news
    newsData.forEach(news => {
        newsGrid.innerHTML += `
            <div class="news-card">
                <div class="news-image">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="news-content">
                    <span class="news-date">${news.date}</span>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <a href="${news.link}" class="btn small">Read More</a>
                </div>
            </div>
        `;
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(Thank you for subscribing with ${email}! You'll receive updates about India's space program.);
        this.reset();
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});