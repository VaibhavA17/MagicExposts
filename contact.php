<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title>Contact Us - Magic Exports</title>
    <meta name="description" content="">
    <meta name="msapplication-tap-highlight" content="yes" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" />

    <!-- Google Web Font -->
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lekton:400,700,400italic' rel='stylesheet' type='text/css'>

    <!--  Bootstrap 3-->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <!-- OWL Carousel -->
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/owl.theme.css">

    <!--  Slider -->
    <link rel="stylesheet" href="css/jquery.kenburnsy.css">

    <!-- Animate -->
    <link rel="stylesheet" href="css/animate.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/font-awesome.min.css" />

    <!-- Web Icons Font -->
    <link rel="stylesheet" href="css/pe-icon-7-stroke.css">
    <link rel="stylesheet" href="css/iconmoon.css">
    <link rel="stylesheet" href="css/et-line.css">
    <link rel="stylesheet" href="css/ionicons.css">

    <!-- Magnific PopUp -->
    <link rel="stylesheet" href="css/magnific-popup.css">

    <!-- Tabs -->
    <link rel="stylesheet" type="text/css" href="css/tabs.css" />
    <link rel="stylesheet" type="text/css" href="css/tabstyles.css" />

    <!-- Loader Style -->
    <link rel="stylesheet" href="css/loader-1.css">

    <!-- Costum Styles -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">

    <!-- Favicon -->
    <link rel="icon" type="image/ico" href="favicon.ico">

    <!-- Modernizer & Respond js -->
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1gC_4_MRzodOvVrFLgiNnoEdh2nJ15ao&callback=initMap" type="text/javascript"></script>
</head>

<body>

    <!-- Preloader -->
    <div class="cover"></div>
    <div class="container">
        <div id="nav-placeholdermain"></div>
    </div>


    <div class="container">
        <div class="header-page ef-parallax-bg" style="background-image:url(img/contact-header.jpg)">
            <div class="col-md-6 col-md-offset-6">
                <div class="row">
                    <div class="inner-content">
                        <div class="header-content">
                            <h1>CONTACT</h1>
                            <hr>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container margin-top">
        <div class="contact-wrapper">
            <div class="row">
                <div class="col-md-3">
                    <div class="contact-info">
                        <span class="icon-info">
                            <i class="pe-7s-phone"></i>
                        </span>
                        <span class="title-info">CALL US:</span>
                        <span class="description-info">+91 81819 07000</span>
                    </div>

                    <div class="contact-info">
                        <span class="icon-info">
                            <i class="pe-7s-map-marker"></i>
                        </span>
                        <span class="title-info">ADDRESS:</span>
                        <span class="description-info">Eldeco Estate One, Panipat, Haryana 132103 India</span>
                    </div>

                    <div class="contact-info">
                        <span class="icon-info">
                            <i class="pe-7s-mail"></i>
                        </span>
                        <span class="title-info">EMAIL:</span>
                        <span class="description-info">info@magicexports.in</span>
                    </div>
                </div>

                <form method="post">
                    <div class="contact-form">

                        <div class="col-md-4">
                            <input type="text" placeholder="NAME *" name="name">
                            <input type="text" placeholder="E-MAIL *" name="email">
                            <input type="text" placeholder="CONTACT NO. *" name="phone">
                        </div>
                        <div class="col-md-5">
                            <textarea placeholder="MESSAGE *" name="message"></textarea>
                            <input type="submit" value="SEND" name="send">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="footer-placeholder"></div>

    <script src="js/vendor/jquery-1.11.2.min.js"></script>
    <script data-pace-options='{ "ajax": false }' src="js/vendor/pace.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/classie.js"></script>
    <script src="js/vendor/isotope.pkgd.min.js"></script>
    <script src="js/vendor/jquery.velocity.min.js"></script>
    <script src="js/vendor/jquery.kenburnsy.min.js"></script>
    <script src="js/vendor/textslide.js"></script>
    <script src="js/vendor/imagesloaded.pkgd.min.js"></script>
    <script src="js/vendor/tabs.js"></script>
    <script src="js/ef-slider.js"></script>
    <script src="js/vendor/owl.carousel.min.js"></script>
    <script src="js/vendor/jquery.magnific-popup.min.js"></script>
    <script src="js/vendor/jquery.social-buttons.min.js"></script>
    <script src="js/vendor/wow.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/map-costum.js"></script>
    <script src="js/pulgins.js"></script>

</body>

</html>

<?php
if(isset($_POST['send'])) {
	
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
if($name=='' || $email=='' || $phone=='' || $message==''){
	echo "</script>alert('All fields are required!')</script>";
} else {

$from       = "Magic Exports Client";
$webmaster  = "info@magicexports.com"; //It's web master mail info@example.com
$to         = "iamvaibhav.agarwal@gmail.com"; // where you want to get mail 
$subject    = "Message from the Client.";

$headers    = "From: " . $from . "<" . $webmaster . ">\r\n";
$headers    .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers    .= "MIME-Version: 1.0" . "\r\n";
$headers    .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = "<html><body>";
$message .= "<p>Name :".$_POST['name']  ."</p>";
$message .= "<p>Email : ". $_POST['email'] ."</p>";
$message .= "<p>Phone : ". $_POST['phone'] ."</p>";
$message .= "<p>Message :".$_POST['message']."</p>";
$message .= "</body></html>";

$sendmail = mail($to, $subject, $message, $headers);

echo "<script>alert('Thank you for contacting us, Our team will respond to you very soon.')</script>";
echo "<script>window.open('index.html?sent=Your Form Has been Submited','_self')</script>";
}
}

?>