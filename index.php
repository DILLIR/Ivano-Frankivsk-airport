<?php
$servername = "localhost:3306/airport";
$username = "airport";
$password = "new_root";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$result = $conn->query("SELECT * FROM airport.planes");

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["id"]. " Name: " . $row["name"] . " " . "<br>";
    }
  } else {
    echo "0 results";
}
?>