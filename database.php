<?php
$Servername="localhost";
$username="root";
$password="";
$database="swiftlogix";
$con= mysqli_connect($Servername,$username,$password,$database);
if(!$con)
    {
        die("Error deleting record:".mysqli_error($con));
    }
    ?>