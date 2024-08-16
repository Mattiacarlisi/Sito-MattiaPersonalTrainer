   // tasto navbar
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle_btn');
    const dropdownMenu = document.querySelector('.dropdown_menu');
  
    // Aggiunge l'evento di click al pulsante di toggle
    toggleButton.addEventListener('click', () => {
      // Toglie o aggiunge la classe 'active' al menu a discesa
      dropdownMenu.classList.toggle('active');
    });
  });
  
  