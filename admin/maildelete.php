<?php
include('../dbs/connect.php');
$newid=$_GET['del_id'];

$sql="DELETE from contact WHERE id='$newid'";
if (mysqli_query($connect,$sql)) {
    header('location: mail.php');
}else{
    echo "Not Deleted";
}
?>
