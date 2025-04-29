

        // دالة معالجة نموذج الحجز
        function submitBookingForm() {
            // هنا يمكنك إضافة كود إرسال النموذج
            alert('تم استلام طلب الحجز بنجاح، سنتصل بك قريباً لتأكيد الموعد');
            document.getElementById('bookingForm').reset();

            // يمكنك إضافة إعادة توجيه أو أي إجراء آخر هنا
            // window.location.href = 'thank-you.html';
        }

        // إضافة تأثيرات للخطوات
        document.querySelectorAll('.booking-step').forEach(step => {
            step.addEventListener('click', function () {
                document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // إضافة تأكيد عند محاولة مغادرة الصفحة مع بيانات غير محفوظة
        window.addEventListener('beforeunload', function (e) {
            const form = document.getElementById('bookingForm');
            const inputs = form.querySelectorAll('input, textarea, select');
            let hasData = false;

            inputs.forEach(input => {
                if (input.value.trim() !== '') {
                    hasData = true;
                }
            });

            if (hasData) {
                e.preventDefault();
                e.returnValue = 'لديك بيانات غير محفوظة، هل تريد مغادرة الصفحة؟';
            }
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
    // Footer Functionality (if needed)
    function initFooter() {
        // Currently no specific JS needed for footer
        // Can be used for:
        // - Newsletter subscription
        // - Social media interactions
        // - Dynamic copyright year

        // Example: Update copyright year automatically
        const copyrightElement = document.querySelector('.copyright');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `© ${currentYear} WithYou. جميع الحقوق محفوظة.`;
        }
    }

    // Initialize footer when DOM is loaded
    document.addEventListener('DOMContentLoaded', initFooter);
        // Initialize header when DOM is loaded
        document.addEventListener('DOMContentLoaded', initHeader);
  