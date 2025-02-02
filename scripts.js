// Toggle navigation on mobile
document.getElementById("menu-icon").addEventListener("click", function() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});


// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button');
  const resultMessage = document.getElementById('form-result'); // ID for result message

  form.addEventListener('submit', function (e) {s
    e.preventDefault(); // Prevent the default form submission

    // Disable the button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Gather form data
    const formData = new FormData(form);

    // Create AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact-form.php', true);

    // Handle response
    xhr.onload = function () {
      if (xhr.status === 200) {
        resultMessage.textContent = "Message sent successfully!"; // Success
        resultMessage.style.color = "green";
      } else {
        resultMessage.textContent = "There was an error sending the message."; // Error
        resultMessage.style.color = "red";
      }

      // Enable the submit button again
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    };

    // Send the form data to the PHP script
    xhr.send(formData);
  });

});