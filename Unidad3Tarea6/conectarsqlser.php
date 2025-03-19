<?php
$servername = "MSSQLSERVER";
$username = "sa";
$password = "";
$database = "master";

try {
    $conn = new PDO("sqlsrv:server=$servername;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";

} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
