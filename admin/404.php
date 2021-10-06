<!DOCTYPE html>
<html lang="en">

<?php
include('plugins/session.php');
include('plugins/head.php');

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
                <ul class="nav"></ul>
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
                        <a class="navbar-brand" ></a>
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
                                    <h5 class="title">You are Not Authorized</h5>
                                    <p>The requested URL is blocked. </p>
                                </div>
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