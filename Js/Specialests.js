
        document.addEventListener('DOMContentLoaded', function () {
            // كود لجعل الصفحة أكثر تفاعلية
            const bookButtons = document.querySelectorAll('.book-btn');

            bookButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const specialistName = this.closest('.specialist-card').querySelector('.specialist-name').textContent;
                    alert(`سيتم تحويلك إلى صفحة حجز جلسة مع ${specialistName}`);
                    // يمكن استبدال هذا بالسكريبت الخاص بالتحويل إلى صفحة الحجز
                });
            });

            console.log('صفحة الأخصائيين جاهزة!');
        });
        // Header Functionality
        function initHeader() {
            const header = document.getElementById('header');
            const searchIcon = document.getElementById('search-icon');
            const searchBox = document.getElementById('search-box');
            const languageIcon = document.getElementById('language-icon');
            const languageMenu = document.getElementById('language-menu');

            // Header scroll effect
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Toggle search box
            searchIcon.addEventListener('click', function (e) {
                e.stopPropagation();
                searchBox.classList.toggle('active');
                if (languageMenu.classList.contains('active')) {
                    languageMenu.classList.remove('active');
                }
            });

            // Toggle language menu
            languageIcon.addEventListener('click', function (e) {
                e.stopPropagation();
                languageMenu.classList.toggle('active');
                if (searchBox.classList.contains('active')) {
                    searchBox.classList.remove('active');
                }
            });

            // Close menus when clicking outside
            document.addEventListener('click', function () {
                searchBox.classList.remove('active');
                languageMenu.classList.remove('active');
            });

            // Prevent closing when clicking inside menus
            searchBox.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            languageMenu.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            // Language change functionality
            const languageLinks = document.querySelectorAll('.language-menu a');
            languageLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');

                    document.body.style.opacity = '0.5';
                    document.body.style.transition = 'opacity 0.3s';

                    setTimeout(() => {
                        alert(`تم اختيار اللغة: ${lang}`);
                        document.body.style.opacity = '1';
                        languageMenu.classList.remove('active');
                    }, 300);
                });
            });

            // Search functionality
            const searchInput = searchBox.querySelector('input');
            searchInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
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
        }

        // Initialize header when DOM is loaded
        document.addEventListener('DOMContentLoaded', initHeader);
    