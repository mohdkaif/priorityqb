<?php
require_once("../configue.php");
$id = $_GET['id']; 

$del = mysqli_query($conn,"delete from tbl_testimonial where id = '$id'"); 

if($del)
{
    mysqli_close($conn); 
    header("location:reviews.php");
    exit;	
}
else
{
    echo "Error deleting record"; 
}
?>