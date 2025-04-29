
  
        document.addEventListener('DOMContentLoaded', function () {
            // dashboard.js
            document.addEventListener('DOMContentLoaded', function () {
                // Toggle sidebar on mobile
                const menuToggle = document.createElement('div');
                menuToggle.className = 'menu-toggle';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.querySelector('.top-nav').prepend(menuToggle);

                menuToggle.addEventListener('click', function () {
                    document.querySelector('.sidebar').classList.toggle('active');
                });

                // Theme switcher
                const themeToggle = document.createElement('div');
                themeToggle.className = 'theme-toggle';
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                document.querySelector('.user-actions').prepend(themeToggle);

                themeToggle.addEventListener('click', function () {
                    document.body.classList.toggle('dark-theme');
                    const icon = this.querySelector('i');
                    if (document.body.classList.contains('dark-theme')) {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                        localStorage.setItem('theme', 'dark');
                    } else {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                        localStorage.setItem('theme', 'light');
                    }
                });

                // Check for saved theme preference
                if (localStorage.getItem('theme') === 'dark') {
                    document.body.classList.add('dark-theme');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                }

                // Language switcher
                const languageSwitcher = document.createElement('div');
                languageSwitcher.className = 'language-switcher';
                languageSwitcher.innerHTML = '<i class="fas fa-globe"></i> العربية';
                document.querySelector('.user-actions').prepend(languageSwitcher);

                languageSwitcher.addEventListener('click', function () {
                    const currentLang = this.textContent.trim();
                    if (currentLang === 'العربية') {
                        this.innerHTML = '<i class="fas fa-globe"></i> English';
                        document.documentElement.lang = 'en';
                        document.documentElement.dir = 'ltr';
                        localStorage.setItem('language', 'en');
                    } else {
                        this.innerHTML = '<i class="fas fa-globe"></i> العربية';
                        document.documentElement.lang = 'ar';
                        document.documentElement.dir = 'rtl';
                        localStorage.setItem('language', 'ar');
                    }
                });

                // Check for saved language preference
                if (localStorage.getItem('language') === 'en') {
                    languageSwitcher.innerHTML = '<i class="fas fa-globe"></i> English';
                    document.documentElement.lang = 'en';
                    document.documentElement.dir = 'ltr';
                }

                // Calendar navigation
                const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
                    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

                let currentDate = new Date();
                updateCalendarTitle();

                document.querySelector('.calendar-nav button:first-child').addEventListener('click', function () {
                    currentDate.setMonth(currentDate.getMonth() - 1);
                    updateCalendarTitle();
                    highlightSessions();
                });

                document.querySelector('.calendar-nav button:last-child').addEventListener('click', function () {
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    updateCalendarTitle();
                    highlightSessions();
                });

                function updateCalendarTitle() {
                    document.querySelector('.calendar-title').textContent =
                        `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
                }

                // Highlight days with sessions (mock data)
                function highlightSessions() {
                    document.querySelectorAll('.calendar-day').forEach(day => {
                        day.classList.remove('has-session');
                    });

                    // Mock session dates - in a real app, this would come from an API
                    const sessionDates = [13, 14, 15, 17];
                    sessionDates.forEach(day => {
                        const dayElement = document.querySelector(`.calendar-day .day-number:contains("${day}")`)?.parentElement;
                        if (dayElement) {
                            dayElement.classList.add('has-session');
                        }
                    });
                }

                // Initialize
                highlightSessions();
            });
        });
