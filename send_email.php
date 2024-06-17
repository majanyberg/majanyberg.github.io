<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Hämta formulärdata
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Skapa ett e-postmeddelande
  $to = 'maja.nyberg13@gmail.com'; // Byt ut mot din e-postadress
  $email_subject = 'Kontaktformulär: ' . $subject;
  $email_body = "Du har fått ett meddelande från $name <$email>:\n\n$message";

  // Skicka e-post
  $headers = "From: $email";

  if (mail($to, $email_subject, $email_body, $headers)) {
    // Skicka användaren till en bekräftelsesida om e-postmeddelandet skickades
    header('Location: contact.html');
    exit;
  } else {
    // Hantera fel om e-postmeddelandet inte kunde skickas
    echo 'Det uppstod ett fel. Vänligen försök igen senare.';
  }
}
?>



