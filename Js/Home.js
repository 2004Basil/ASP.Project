
        document.addEventListener('DOMContentLoaded', function () {
            const searchIcon = document.getElementById('search-icon');
            const searchBox = document.getElementById('search-box');
            const languageIcon = document.getElementById('language-icon');
            const languageMenu = document.getElementById('language-menu');
            const header = document.getElementById('header');
            const particlesContainer = document.getElementById('particles');

            // Create floating particles for hero section
            function createParticles() {
                const count = 30;
                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');

                    const size = Math.random() * 10 + 5;
                    const posX = Math.random() * window.innerWidth;
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 10 + 10;

                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${posX}px`;
                    particle.style.bottom = `-${size}px`;
                    particle.style.animationDelay = `${delay}s`;
                    particle.style.animationDuration = `${duration}s`;
                    particle.style.opacity = Math.random() * 0.5 + 0.1;

                    particlesContainer.appendChild(particle);
                }
            }

            createParticles();

            // Header scroll effect
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // إظهار/إخفاء صندوق البحث
            searchIcon.addEventListener('click', function (e) {
                e.stopPropagation();
                searchBox.classList.toggle('active');
                if (languageMenu.classList.contains('active')) {
                    languageMenu.classList.remove('active');
                }
            });

            // إظهار/إخفاء قائمة اللغة
            languageIcon.addEventListener('click', function (e) {
                e.stopPropagation();
                languageMenu.classList.toggle('active');
                if (searchBox.classList.contains('active')) {
                    searchBox.classList.remove('active');
                }
            });

            // إغلاق القوائم عند النقر خارجها
            document.addEventListener('click', function () {
                searchBox.classList.remove('active');
                languageMenu.classList.remove('active');
            });

            // منع إغلاق القوائم عند النقر عليها
            searchBox.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            languageMenu.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            // تغيير اللغة
            const languageLinks = document.querySelectorAll('.language-menu a');
            languageLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');

                    // Animation effect when changing language
                    document.body.style.opacity = '0.5';
                    document.body.style.transition = 'opacity 0.3s';

                    setTimeout(() => {
                        alert(`تم اختيار اللغة: ${lang}`);
                        document.body.style.opacity = '1';
                        languageMenu.classList.remove('active');
                    }, 300);
                });
            });

            // البحث عند الضغط على Enter
            const searchInput = searchBox.querySelector('input');
            searchInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    // Animation effect when searching
                    searchBox.style.transform = 'scale(0.95)';
                    searchBox.style.transition = 'transform 0.2s';

                    setTimeout(() => {
                        searchBox.style.transform = 'scale(1)';
                        alert(`بحث عن: ${this.value}`);
                        this.value = '';
                        searchBox.classList.remove('active');
                    }, 200);
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Add animation classes when elements come into view
            const animateOnScroll = function () {
                const elements = document.querySelectorAll('.animate__animated');

                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (elementPosition < windowHeight - 100) {
                        const animationClass = element.getAttribute('data-animate');
                        if (animationClass) {
                            element.classList.add(animationClass);
                        }
                    }
                });
            };







            // Run once on page load
            animateOnScroll();

            // Run on scroll
            window.addEventListener('scroll', animateOnScroll);
        });
