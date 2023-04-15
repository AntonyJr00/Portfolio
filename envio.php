<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = 'Form: ' . $email ."\r\n";
$header = "X-Mailer: PHP/" . phpversion() . "\r\n";
$header = "Mine-Version: . 1.0 \r\n";
$header = "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
$mensaje = "Su email es: " . $email . "\r\n";
$mensaje = "Mensaje de: " . $_POST['mensaje'] . "\r\n";
$mensaje = "enviado el: " . date("d/m/Y", time());

$para = "antonyrodl20@gmail.com";
$asunto = "mensaje del portafolio";

mail($para, $asunto, mb_convert_encoding($mensaje, 'UTF-8', 'ISO-8859-1'), $header);

header("Location:index.html")
?>