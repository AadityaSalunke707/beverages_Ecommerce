document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

// contact section 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add your logic here to handle the form submission, like sending it to a server

    // For now, we'll just log it to the console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Show a success message or alert
    alert('Thank you for your message! We will get back to you soon.');

    // Reset the form
    document.getElementById('contactForm').reset();
});

// about us section

document.querySelector('.back-button').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});

document.querySelector('.back-button-circle').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});


function toggleContent(postNumber) {
    const content = document.getElementById(`extra-content-${postNumber}`);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

