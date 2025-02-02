<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Email setup
    $to = "youremail@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your contact form:\n\n".
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message.";
    }
} else {
    echo "Invalid request method.";
}
?>
