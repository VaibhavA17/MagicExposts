
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
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="title">Abhiruchi Mail Box</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class=" text-primary">
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th >Number</th>
                                            <th>Subject</th>
                                            
                                            <th class="text-right">Message</th>
                                        </thead>
                                    <?php
                                    include('../dbs/connect.php');
                                    $sql="SELECT * from contact";
                                    $results=$connect->query($sql);
                                    while ($final=$results->fetch_assoc()) { 
                                    ?>
                                        
                                        <tbody>
                                            <tr>
                                                <td><?php echo $final['name'] ?></td>
                                                <td><?php echo $final['email'] ?></td>
                                                <td><?php echo $final['number'] ?></td>
                                                <td><?php echo $final['subject'] ?></td>
                                                
                                                <td class="text-right">
                                                    <a href="readmail.php?contact_id=<?php echo $final['id']?>"><button class="btn btn-primary">Read Mail</button></a>
                                                </td>
                                                <td class="text-right">
                                                    <?php 
                                                    if($_SESSION['auth']=='auth_a'){?>
                                                    <a href="maildelete.php?del_id=<?php echo $final['id'] ?>"><button class="btn btn-dark">Delete Mail</button></a>
                                                    <?php }   
                                                    ?>
                                                </td>
                                            </tr>
                                        </tbody>
                                    <?php } ?>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
    include('plugins/footer.php');
    ?>
</body>
</html>