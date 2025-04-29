 document.addEventListener('DOMContentLoaded', function () {
            // معالجة نموذج طلب إعادة التعيين
            document.getElementById('resetRequestForm').addEventListener('submit', function (e) {
                e.preventDefault();
                const email = document.getElementById('reset-email').value;

                // هنا يمكنك إضافة كود إرسال رابط إعادة التعيين
                // عادةً ما يكون عبر إرسال طلب AJAX إلى الخادم

                // عرض رسالة نجاح (في الواقع، يجب أن يتم التحقق من البريد أولاً)
                alert(`تم إرسال رابط إعادة التعيين إلى ${email}\n(هذا مثال فقط، في التطبيق الحقيقي سيتم إرسال بريد فعلي)`);

                // في الواقع الفعلي، بعد إرسال البريد بنجاح، يمكن توجيه المستخدم لصفحة تأكيد
                // window.location.href = 'reset-confirm.html';
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