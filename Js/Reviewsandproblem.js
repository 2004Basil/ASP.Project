
        document.addEventListener('DOMContentLoaded', function() {
            // تبديل التبويبات
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // إزالة التنشيط من جميع التبويبات
                    tabs.forEach(t => t.classList.remove('active'));
                    // تفعيل التبويب الحالي
                    this.classList.add('active');
                    
                    // إخفاء جميع محتويات التبويبات
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // إظهار محتوى التبويب الحالي
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // نظام التقييم بالنجوم
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.getAttribute('data-rating'));
                    
                    // تحديث النجوم
                    stars.forEach((s, index) => {
                        if (index < rating) {
                            s.classList.add('active');
                            s.classList.remove('far');
                            s.classList.add('fas');
                        } else {
                            s.classList.remove('active');
                            s.classList.remove('fas');
                            s.classList.add('far');
                        }
                    });
                    
                    // هنا يمكنك إضافة كود لتحديث قيمة التقييم في النموذج
                });
            });
            
            // إرسال نموذج المراجعة
            const reviewForm = document.getElementById('review-form');
            reviewForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('تم إرسال مراجعتك بنجاح!');
                this.reset();
                
                // إعادة تعيين النجوم
                stars.forEach(star => {
                    star.classList.remove('active');
                    star.classList.remove('fas');
                    star.classList.add('far');
                });
            });
            
            console.log('صفحة المراجعات والشكاوى جاهزة!');
        });
        // تبديل الوضع النهاري/الليلي
            const themeToggle = document.getElementById('theme-toggle');
            let isDarkMode = false;

            // التحقق من تفضيلات النظام
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                enableDarkMode();
            }

            themeToggle.addEventListener('click', toggleTheme);

            function enableLightMode() {
                document.body.classList.remove('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                isDarkMode = false;
                localStorage.setItem('theme', 'light');
            }

            function enableDarkMode() {
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                isDarkMode = true;
                localStorage.setItem('theme', 'dark');
            }

            function toggleTheme() {
                if (isDarkMode) {
                    enableLightMode();
                } else {
                    enableDarkMode();
                }
            }

            // تحميل الثيم المحفوظ
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                enableDarkMode();
            } else if (savedTheme === 'light') {
                enableLightMode();
            }
 