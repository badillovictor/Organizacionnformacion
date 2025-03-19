<?php
include "header.php";
include "conectar.php";
?>

<form action="almacenar.php" method="post" style="width: 300px;">
    <div style="margin-bottom: 10px;">
        <label for="Clave" style="display: block;">Clave</label>
        <input type="text" id="Clave" name="Clave" style="width: 100%;">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="Nombre" style="display: block;">Nombre</label>
        <input type="text" id="Nombre" name="Nombre" style="width: 100%;">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="Raza" style="display: block;">Raza</label>
        <input type="text" id="Raza" name="Raza" style="width: 100%;">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="Contrato" style="display: block;">Contrato</label>
        <input type="text" id="Contrato" name="Contrato" style="width: 100%;">
    </div>
    <button type="submit">Enviar</button>
</form>