
<!DOCTYPE html>
<html lang="en">

<?php
include('plugins/session.php');
include('plugins/head.php');
?>

<body class="">
    <div class="wrapper ">
        <?php
        include('plugins/header.php')
        ?>

        <div class="panel-header panel-header-sm">
        </div>
        <div class="content">
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                              <?php
                                include('../dbs/connect.php');

                                $id=$_GET['contact_id'];
                                $sql="SELECT * from contact WHERE id='$id'";
                                $results=$connect->query($sql);
                                $final=$results->fetch_assoc();
                                ?>
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-10">
                                <h5 class="title"><?php echo $final['subject']?> </h5></div>
                                <div class="col">
                                <?php 
                                if($_SESSION['auth']=='auth_a'){?>
                                <a href="maildelete.php?del_id=<?php echo $final['id'] ?>">
                                    <button class="btn btn-dark">Delete Mail</button>
                                </a>
                                <?php }   
                                ?>
                            </div>

                                </div>

                            </div>
                            <div class="card-body">
                              
                                <div class="container">

                                    
                                <h5> <span style="color: red;">Name: </span>&nbsp;&nbsp;&nbsp;<br><?php echo $final['name']?> </h5>
                                <h5> <span style="color: red;">From: </span> &nbsp;&nbsp;&nbsp;<br><?php echo $final['email']?> </h5>
                                <h5> <span style="color: red;">Contact Number:</span>&nbsp;&nbsp;&nbsp;<br><?php echo $final['number']?></h5>
                                <h5> <span style="color: red;">Message:</span> &nbsp;&nbsp;&nbsp;<br><?php echo $final['message']?> </h6>
                                    <a href="mailto:<?php echo $final['email']?>"><button class="btn btn-primary">Reply</button></a>
                                    <a href="tel:<?php echo $final['number']?>"><button class="btn btn-primary">Call Now</button></a>
                              
                              
                                </div>

    <?php
    include('plugins/footer.php');
    ?>
</body>
</html>