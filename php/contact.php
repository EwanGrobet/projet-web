<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/Exception.php';
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';

$inf = $_POST;

$message = "Envoyer de: " . $inf['email'] . "<br><br>" . $inf['message'];
$msg = "";

if (isset($inf['email']) && isset($inf['sujet']) && isset($inf['message'])) {
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug    = SMTP::DEBUG_OFF;
        $mail->isSMTP();
        $mail->SMTPAuth     = true;
        $mail->Host         = 'mail.infomaniak.ch';

        //authentication to the SMTP server
        //do not change these values. They are used to authenticate to the SMTP server
        $mail->Username = 'confirm@wewfamily.ch';
        $mail->Password = 'por3$9!NH+eG&G=u';

        $mail->Port         = 587;
        $mail->SMTPOptions  = array(
            'ssl' => array(
                'verify_peer'         => false,
                'verify_peer_name'    => false,
                'allow_self_signed'   => true
            )
        );

        //Recipients
        //Adresse email of the sender. Done this way so you can hit "reply"
        $mail->setFrom('noreply@wewfamily.ch', 'No Reply');
        //To whom the email is gonna go
        $mail->addAddress('ewan.grobet@wewfamily.ch', 'Ewan Grobet');

        //content
        $mail->isHTML(true);
        //Subject of the email. Here fixed. If you have a "subject" thing on your contact form, put the subject here
        $mail->Subject    = $inf["sujet"];
        //Message set above
        $mail->Body         = $message;

        $mail->send();
        $msg = "message sent";
    } catch (Exception $e) {
        $msg = "message could not be sent. Mailer error : {$mail->ErrorInfo}";
    }
    $_GET['sent'] = true;
} else {
    $msg = "fail isset";
    echo "<script>console.log('{$msg}')</script>";
    $_GET['sent'] = false;
}
header("Location: ../result.html");
