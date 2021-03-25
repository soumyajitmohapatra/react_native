<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);




$readQuery = "select * from students_details";


$result = $conn->query($readQuery);

if ($result->num_rows > 0) {
    // $obj = mysqli_fetch_object($result);
    // print_r($obj);


    $emparray = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

    //close the db connection
    mysqli_close($conn);

    // output data of each row
    // while ($row = $result->fetch_assoc()) {
    //     echo  $row["id"] ." " . $row["full_name"] . " " . $row["registration_no"] . " " . $row["college_name"] ;
    // }
} else {
    echo "0 results";
}
