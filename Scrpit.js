
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const bookCards = document.querySelectorAll('.book-card');

  
    function openModal() {
        modal.style.display = 'block';
    }

 
    function closeModal() {
        modal.style.display = 'none';
    }

   
    bookCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
