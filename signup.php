<?php
include 'database.php';
if(isset($_POST['submit']))
     {
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$address = $_POST['address'];
$sql = "insert into users (username,email,phone,password,address)
ValueS ('$username','$email','$phone','$password','$address')";
 if(mysqli_query($con,$sql))
        {
            echo"<script>alert('new record inserted')</Script>";
        }
        else{
            echo"error:".mysqli_error($con);
        }
        mysqli_close($con);
    }
