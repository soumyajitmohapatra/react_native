<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$full_name = $_POST['full_name'];
$registration_no = $_POST['registration_no'];
$college_name = $_POST['college_name'];
$id = $_POST['id'];


$sql = "UPDATE students_details 
SET 
college_name='$college_name', 
full_name='$full_name', 
registration_no='$registration_no'
WHERE id='$id' ";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);
