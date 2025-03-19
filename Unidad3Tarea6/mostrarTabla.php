<?php

include "header.php";
include "conectar.php";

$select = "call ObtenerMascota();";

?>

<table>
    <tr>Clave</tr>
    <tr>Nombre</tr>
    <tr>Raza</tr>
    <tr>Contrato</tr>

    <?php
        $result = mysqli_query($conn, $select);
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
                echo "<td>" . $row["Clave"] . "</td>";
                echo "<td>" . $row["Nombre"] . "</td>";
                echo "<td>" . $row["Raza"] . "</td>";
                echo "<td>" . $row["Contrato"] . "</td>";
            echo "</tr>";
        }
        $result = $conn->close();
    ?>
</table>

<input type="button" value="Regresar" onclick="location">

<?php

include 'foot.php';
