// Toggle dropdown menu function
function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    dropdownMenu.classList.toggle('show');

    // Move the hamburger icon to the left when the dropdown menu is shown
    if (dropdownMenu.classList.contains('show')) {
        hamburgerIcon.classList.add('move-left');
        document.addEventListener('click', handleOutsideClick);
    } else {
        hamburgerIcon.classList.remove('move-left');
        document.removeEventListener('click', handleOutsideClick);
    }
}

// Handle clicks outside dropdown menu function
function handleOutsideClick(event) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (!dropdownMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        dropdownMenu.classList.remove('show');
        hamburgerIcon.classList.remove('move-left');
        document.removeEventListener('click', handleOutsideClick);
    }
}

// Event listener for hamburger icon click
document.querySelector('.hamburger-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from propagating to document
    toggleDropdownMenu();
});

