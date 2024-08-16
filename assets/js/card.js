 // tasto card maggiori informazioni

 document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-more-info');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const cardContent = this.closest('.card-content');
            cardContent.classList.toggle('expanded');
        });
    });
});
