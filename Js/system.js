
        // تفعيل نظام النجوم للتقييم
        document.querySelectorAll('.rating-stars i[data-rating]').forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                const stars = this.parentElement.querySelectorAll('i');
                
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
