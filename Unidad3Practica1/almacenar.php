<?php
include "conectar.php";

$clave=$_POST["Clave"];
$nombre=$_POST["Nombre"];
$raza=$_POST["Raza"];
$contrato=$_POST["Contrato"];

$select = "call AgregarMascota($clave,'$nombre','$raza',$contrato);";

$result = $conn->query($select);

header("Location: conectar.php");
?>