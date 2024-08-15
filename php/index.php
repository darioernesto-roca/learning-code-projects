// Here I will create a php file that will be used to display the data from the database.

<?php
// Include the database connection file
include 'db.php';

// Get the data from the database
$sql = "SELECT * FROM users";

// Execute the query
$result = $conn->query($sql);

// Check if there are any results
if ($result->num_rows > 0) {
    // Output the data
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}
