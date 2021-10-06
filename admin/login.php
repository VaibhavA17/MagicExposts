
<!DOCTYPE html>
<html lang="en">

<?php
session_start();
include('plugins/head.php');
$error='';

if(isset($_POST['login'])){

include('../dbs/connect.php');

$username=$_POST['username'];
$password=$_POST['password']; 
$sql="SELECT username, password, role, auth
    FROM admin 
    WHERE username='$username' AND password='$password' 
    UNION 
    SELECT username, password, role, auth
    FROM teammember 
    WHERE username='$username' AND password='$password'";
$results=$connect->query($sql);
$final=$results->fetch_assoc();

if($final>0) {
$_SESSION['username']=$final['username'];
$_SESSION['password']=$final['password'];
$_SESSION['auth']=$final['auth'];
}else{
  $error='Please enter correct login details.';
}
}
?>

<body class="">
    <div class="wrapper ">
        <div class="sidebar" data-color="orange">
      
      <div class="logo">
        <a href="login.php" class="simple-text logo-normal">
          ADMIN PANEL
        </a>
      </div>
      <div class="sidebar-wrapper" id="sidebar-wrapper">
        <ul class="nav">
          
          
        </ul>
      </div>
    </div>
    <div class="main-panel" id="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" >Login</a>
          </div>
          
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            
          </div>
        </div>
      </nav>
      <!-- End Navbar -->

        <div class="panel-header panel-header-sm">
        </div>

        <div class="content">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-7">
                    <div class="card card-user">
                        <div class="image">
                            <img src="../images/Abhiruchi.jpg" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="author">
                                
                                <img class="avatar border-gray" src="../images/logo.jpg" alt="...">
                                <h5 class="title">Welcome To Abhiruchi CMS</h5>
                                <h6 style="color:red;"><?php echo $error ?></h6>
                                
                                <form action="login.php" method="POST">
                                    <div class="row">
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-10 pr-1">
                                            <div class="form-group">
                                                <label>User ID</label>
                                                <input type="ID" class="form-control" placeholder="User ID" name="username">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-10 pr-1">
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="password" name="password">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary" name="login">Login</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
    <?php
    include('plugins/footer.php');
    ?>
</body>

</html>