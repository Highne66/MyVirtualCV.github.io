// Initialize EmailJS with public key
emailjs.init("_GfCszhTEMLhDY3cF"); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_8xupve8', 'template_rj4rbcf', this)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Clear the form
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('Error:', error);
        });
});
