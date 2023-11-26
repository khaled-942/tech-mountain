<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    // $subject = $_POST["subject"];
    // $message = $_POST["message"];
    // Create a new PHPMailer instance
    $mail = new PHPMailer();
    try {
        // Set SMTP configuration
        $mail->isSMTP();
        $mail->Host = ''; // Replace with your SMTP server hostname => 1
        $mail->SMTPAuth = true;
        $mail->Username = ''; // Replace with your SMTP username => 2
        $mail->Password = ''; // Replace with your SMTP password => 3
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Set sender and recipient
        $mail->setFrom($email, $fname . " " . $lname);
        $mail->addAddress(''); // Replace with your SMTP username => 4 like 2

        // Set email content
        $mail->Subject = "Tech Mountains";
        $mail->Body = $message;

        // Send the email
        $mail->send();
        echo "Mail has been sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>