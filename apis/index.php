<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
$restJson = file_get_contents("php://input");
$_POST = json_decode($restJson, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	http_response_code(200);
	$mailSubject = $_POST['name'];
	$mailTo = "michaelbeebe1031@gmail.com";
	$mailFrom = $_POST['email'];

	$mailMsg = $_POST['number'] . $_POST['message'];

	$mailHeader = "MIME-Version: 1.0\r\n";
	$mailHeader.= "Content-type: text/html; charset=UTF-8\r\n";
	$mailHeader.= "From: <" . $from . ">";
	mail($mailTo, $mailSubject, $mailMsg, $mailHeader);

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}
?>