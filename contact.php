<?php
include 'database.php';
if(isset($_POST['submit']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$message = $_POST['message'];

$sql = "insert into contact (name,email,phone,city,message)
VALUES ('$name','$email','$phone','$city','$message')";
 if(mysqli_query($con,$sql))
        {
            echo"<script>alert('new record inserted')</Script>";
        }
        else{
            echo"error:".mysqli_error($con);
        }
        mysqli_close($con);
    }
