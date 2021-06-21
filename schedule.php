<html>
<head>
<title>Пример</title>
</head>
<body>

<?php
$servername = "localhost:3306/airport";
$username = "airport";
$password = "new_root";
$dbdb = "airport";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbdb);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$result = $conn->query("SELECT * FROM airport.planes");

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "<h1 class='h5_b_1'>" . $row["name"] . $row["name"]."</h1>";
    }
  } else {
    echo "0 results";
}
?>

     </body>
</html>