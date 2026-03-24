<?php
include 'database.php';
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$password = $_POST['password'];
$pickup = $_POST['pickup'];
$drop_location = $_POST['drop_location'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$booking_date = $_POST['date'];
$message = $_POST['message'];

$sql = "insert into booking 
(name, password, pickup, drop_location, phone, email, booking_date, message)
VALUES 
('$name','$password','$pickup','$drop_location','$phone','$email','$booking_date','$message')";
if(mysqli_query($con,$sql))
        {
            echo"<script>alert('new record inserted')</Script>";
     //redirect after submit//
     header("Location:index.html");
     exit();
     }
        else{
            echo"error:".mysqli_error($con);
        }
        mysqli_close($con);
    }

