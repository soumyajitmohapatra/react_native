<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


$fName = $_POST['fName'];
$mName = $_POST['mName'];
$age = $_POST['age'];
$registration_no = $_POST['registration_no'];




$insertQuery = "insert into bio ( fName, mName, age, registration_no) 

values ('$fName', '$mName', '$age', '$registration_no') ";

$register = mysqli_query($conn, $insertQuery);

if ($register) {
    $msg = "student registered";
} else {
    $msg = "Failed to register";
}

echo ($msg);
