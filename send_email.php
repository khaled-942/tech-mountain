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
        $mail->Host = 'mail.gawad-apiaries.com'; // Replace with your SMTP server hostname
        $mail->SMTPAuth = true;
        $mail->Username = 'khaled@gawad-apiaries.com'; // Replace with your SMTP username
        $mail->Password = 'kh@led942'; // Replace with your SMTP password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Set sender and recipient
        $mail->setFrom($email, $fname . " " . $lname);
        $mail->addAddress('khaled@gawad-apiaries.com');

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