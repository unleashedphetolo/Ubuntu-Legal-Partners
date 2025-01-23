<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "client_portal";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];

    // Handle file uploads
    $uploadDir = 'uploads/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $identityFile = $uploadDir . basename($_FILES["identityFile"]["name"]);
    $addressFile = $uploadDir . basename($_FILES["addressFile"]["name"]);
    $appointmentFile = $uploadDir . basename($_FILES["appointmentFile"]["name"]);

    move_uploaded_file($_FILES["identityFile"]["tmp_name"], $identityFile);
    move_uploaded_file($_FILES["addressFile"]["tmp_name"], $addressFile);
    move_uploaded_file($_FILES["appointmentFile"]["tmp_name"], $appointmentFile);

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO clients (fullName, email, contact, identityFile, addressFile, appointmentFile) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $fullName, $email, $contact, $identityFile, $addressFile, $appointmentFile);

    if ($stmt->execute()) {
        echo "Record uploaded successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
