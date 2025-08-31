document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": { "value": "#4f8ef7" },
            "shape": { "type": "circle" },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4f8ef7",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            }
        },
        "retina_detect": true
    });

    // Audio control
    const toggleAudioBtn = document.getElementById('toggleAudio');
    const backgroundAudio = document.getElementById('backgroundAudio');

    let isAudioPlaying = true;

    toggleAudioBtn.addEventListener('click', function () {
        if (isAudioPlaying) {
            backgroundAudio.pause();
            toggleAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            backgroundAudio.play();
            toggleAudioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        isAudioPlaying = !isAudioPlaying;
    });

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(() => startCounter(), 1);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Start counter when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(15, 17, 26, 0.98)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(15, 17, 26, 0.95)';
        }
    });
});