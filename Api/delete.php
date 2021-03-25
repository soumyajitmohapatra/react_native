<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


$id = $_POST['id'];


$deleteQuery = "delete from students_details where id = '$id' ";

$deleted = mysqli_query($conn, $deleteQuery);

if ($deleted) {
    $msg = "student data deleted";
} else {
    $msg = "Failed to delete";
}

echo ($msg);
