
    
        document.addEventListener('DOMContentLoaded', function() {
            // كود لإدارة التخصصات
            const specialtiesContainer = document.querySelector('.specialties-container');
            const addSpecialtyInput = document.querySelector('.add-specialty input');
            const addSpecialtyBtn = document.querySelector('.add-specialty .btn');
            
            addSpecialtyBtn.addEventListener('click', function() {
                if (addSpecialtyInput.value.trim()) {
                    const newTag = document.createElement('span');
                    newTag.className = 'specialty-tag';
                    newTag.innerHTML = `${addSpecialtyInput.value.trim()} <i class="fas fa-times"></i>`;
                    
                    newTag.querySelector('i').addEventListener('click', function() {
                        newTag.remove();
                    });
                    
                    specialtiesContainer.appendChild(newTag);
                    addSpecialtyInput.value = '';
                }
            });
            
            // إضافة حدث لحذف التخصصات الموجودة
            document.querySelectorAll('.specialty-tag i').forEach(icon => {
                icon.addEventListener('click', function() {
                    this.parentElement.remove();
                });
            });
            
            console.log('صفحة تعديل بروفايل الأخصائي جاهزة!');
        });
  