<?php
$servername = "localhost";
$username = "uniqonic";
$password = "Uniqonic@123";

// Create connection
$conn = new mysqli($servername, $username, $password,"uniqonic");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>