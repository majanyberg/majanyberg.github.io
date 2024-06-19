// Function to toggle the dropdown menu
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

// Function to handle clicks outside the dropdown menu
function handleOutsideClick(event) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (!dropdownMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        dropdownMenu.classList.remove('show');
        hamburgerIcon.classList.remove('move-left');
        document.removeEventListener('click', handleOutsideClick);
    }
}

// Add an event listener to the hamburger icon to stop event propagation
document.querySelector('.hamburger-icon').addEventListener('click', function(event) {
    // Prevent the event from propagating to the document
    event.stopPropagation();
    toggleDropdownMenu();
});

