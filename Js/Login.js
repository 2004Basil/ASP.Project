
        document.addEventListener('DOMContentLoaded', function () {
            // تبديل بين تسجيل الدخول وإنشاء حساب
            const tabs = document.querySelectorAll('.auth-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    document.querySelectorAll('.auth-form').forEach(form => {
                        form.classList.remove('active');
                    });

                    const tabId = this.getAttribute('data-tab') + '-form';
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // تبديل بين نوعي الحساب (مريض/طبيب)
            const accountTypes = document.querySelectorAll('.account-type');
            const accountSlider = document.querySelector('.account-type-slider');
            const doctorFields = document.getElementById('doctor-fields');
            const patientAlert = document.getElementById('patient-alert');
            const doctorAlert = document.getElementById('doctor-alert');

            accountTypes.forEach(type => {
                type.addEventListener('click', function () {
                    accountTypes.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    // تحريك المنزلق
                    const index = Array.from(accountTypes).indexOf(this);
                    accountSlider.style.right = `calc(${index * 50}% + 5px)`;

                    // إظهار/إخفاء الحقول المناسبة
                    const accountType = this.getAttribute('data-type');
                    if (accountType === 'doctor') {
                        doctorFields.style.display = 'block';
                        patientAlert.style.display = 'none';
                        doctorAlert.style.display = 'flex';
                    } else {
                        doctorFields.style.display = 'none';
                        patientAlert.style.display = 'flex';
                        doctorAlert.style.display = 'none';
                    }
                });
            });

            // تأثيرات رفع الملفات
            const fileUploads = document.querySelectorAll('.file-upload input[type="file"]');
            fileUploads.forEach(input => {
                input.addEventListener('change', function () {
                    const parent = this.closest('.file-upload');
                    if (this.files.length > 0) {
                        parent.style.borderColor = 'var(--primary)';
                        parent.style.backgroundColor = 'rgba(0, 119, 182, 0.05)';
                        parent.querySelector('.file-upload-text').textContent = this.files[0].name;
                    } else {
                        parent.style.borderColor = '#cbd5e1';
                        parent.style.backgroundColor = 'transparent';
                        parent.querySelector('.file-upload-text').innerHTML =
                            'اسحب وأفلت الصورة هنا أو <strong>انقر للاختيار</strong>';
                    }
                });
            });

            // معالجة النماذج
            document.getElementById('loginForm').addEventListener('submit', function (e) {
                e.preventDefault();
                // هنا يمكنك إضافة كود تسجيل الدخول
                alert('تم تسجيل الدخول بنجاح!');
            });

            document.getElementById('registerForm').addEventListener('submit', function (e) {
                e.preventDefault();
                // هنا يمكنك إضافة كود إنشاء الحساب
                const accountType = document.querySelector('.account-type.active').getAttribute('data-type');
                alert(`تم إنشاء حساب ${accountType === 'doctor' ? 'أخصائي' : 'مستخدم'} بنجاح!`);
            });

            // تأثيرات العائمة عند التركيز على الحقول
            const floatLabels = document.querySelectorAll('.floating-label');
            floatLabels.forEach(label => {
                const input = document.getElementById(label.getAttribute('for'));
                if (input.value.trim() !== '') {
                    label.style.top = '-10px';
                    label.style.right = '10px';
                    label.style.fontSize = '0.8rem';
                    label.style.color = 'var(--primary)';
                    label.style.background = 'linear-gradient(to bottom, white 50%, var(--light-bg) 50%)';
                }
            });
        });
    