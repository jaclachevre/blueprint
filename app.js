
// MOBILE NAVIGATION 


// Select the menu element
const menuElement = document.querySelector('.menu');

// Select the menu hamburger button
const menuOpenButton = document.getElementById('menu-hamburger');
menuOpenButton.addEventListener('click', openMenu);


// Function to open the menu
function openMenu() {
  menuElement.classList.add('menu-open'); // Add the correct class name
}

// Add event listeners to all anchor links inside the menu
menuElement.querySelectorAll('a[href^="#"]')
const menuLinks = menuElement.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu(); // Close the menu when a link is clicked
  });
});


// Select the menu close button
const menuCloseButton = document.getElementById('menu-close');
menuCloseButton.addEventListener('click', closeMenu);

// Function to close the menu
function closeMenu() {
  menuElement.classList.remove('menu-open'); 
  // Remove the correct class name
}



// ABOUT THE ARTIST MODAL

// Get the modal elements
const modal = document.getElementById('myModal');
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".closeBtn");

// Open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


// CONTACT FORM

// Select the "Reach Out" button
const reachOutButton = document.querySelector('.reach-out');

// Select the modal and close button
const reachOutModal = document.getElementById('reachOutModal');
const modalCloseBtn = reachOutModal.querySelector('.contact-close-Btn');

// Show the modal when "Reach Out" button is clicked
reachOutButton.addEventListener('click', () => {
    reachOutModal.style.display = 'block';
});

// Hide the modal when the close button is clicked
modalCloseBtn.addEventListener('click', () => {
    reachOutModal.style.display = 'none';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === reachOutModal) {
        reachOutModal.style.display = 'none';
    }
});

// Handle form submission
const reachOutForm = document.getElementById('reachOutForm');
reachOutForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert('Jacqueline will be in touch shortly!');
    reachOutModal.style.display = 'none'; // Close the modal after submission
});
