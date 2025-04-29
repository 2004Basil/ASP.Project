
        document.addEventListener('DOMContentLoaded', function () {
            // محاكاة استخراج التوكن من الرابط (في الواقع الفعلي، يتم الحصول عليه من URL الصفحة)
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            document.getElementById('reset-token').value = token || '';

            // تحقق من قوة كلمة المرور
            const passwordInput = document.getElementById('new-password');
            const strengthBar = document.getElementById('password-strength-bar');
            const strengthText = document.getElementById('password-strength-text');

            passwordInput.addEventListener('input', function () {
                const password = this.value;
                let strength = 0;

                // تحقق من الطول
                if (password.length >= 8) strength += 1;
                if (password.length >= 12) strength += 1;

                // تحقق من وجود أحرف كبيرة وصغيرة
                if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

                // تحقق من وجود أرقام
                if (/\d/.test(password)) strength += 1;

                // تحقق من وجود رموز خاصة
                if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

                // تحديث شريط القوة
                let width = 0;
                let color = '#e53e3e';
                let text = 'ضعيفة جداً';

                if (strength > 4) {
                    width = 100;
                    color = '#38a169';
                    text = 'قوية جداً';
                } else if (strength > 3) {
                    width = 80;
                    color = '#68d391';
                    text = 'قوية';
                } else if (strength > 2) {
                    width = 60;
                    color = '#f6e05e';
                    text = 'متوسطة';
                } else if (strength > 1) {
                    width = 40;
                    color = '#ed8936';
                    text = 'ضعيفة';
                } else if (password.length > 0) {
                    width = 20;
                    color = '#e53e3e';
                    text = 'ضعيفة جداً';
                }

                strengthBar.style.width = width + '%';
                strengthBar.style.backgroundColor = color;
                strengthText.textContent = text;
                strengthText.style.color = color;
            });

            // معالجة نموذج كلمة المرور الجديدة
            document.getElementById('newPasswordForm').addEventListener('submit', function (e) {
                e.preventDefault();

                const newPassword = document.getElementById('new-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                const token = document.getElementById('reset-token').value;

                // التحقق من تطابق كلمتي المرور
                if (newPassword !== confirmPassword) {
                    alert('كلمتا المرور غير متطابقتين!');
                    return;
                }

                // التحقق من قوة كلمة المرور
                if (newPassword.length < 8) {
                    alert('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل!');
                    return;
                }

                // هنا يمكنك إضافة كود إرسال كلمة المرور الجديدة إلى الخادم
                // مع التوكن للتحقق من الصحة

                // عرض رسالة نجاح
                alert('تم تحديث كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول بكلمة المرور الجديدة.');

                // توجيه المستخدم إلى صفحة تسجيل الدخول
                window.location.href = 'login.html';
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
  