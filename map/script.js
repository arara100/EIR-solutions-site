document.addEventListener('DOMContentLoaded', function() {
    var profilButton = document.querySelector('.profil');
    var menu = document.getElementById('list');

    profilButton.addEventListener('click', function(event) {
        // Toggle the menu's visibility
        menu.classList.toggle('show-menu');
        
        // Position the menu below the profilButton and move it left by 30 pixels
        var buttonRect = profilButton.getBoundingClientRect();
        menu.style.left = (buttonRect.left - 80) + 'px'; // Adjusted left position
        menu.style.top = (buttonRect.bottom + 5) + 'px'; // Adjusted top position
    });
});
