<?php
$servidor = 'localhost';
$usuario = 'root';
$password = 'password';
$bd = 'Clase';

$conn = new mysqli($servidor, $usuario, $password, $bd);
if ($conn->connect_errno)
{
    die("Conexion fallida - ERROR de conexion" . $conn->connect_error);
}
?>