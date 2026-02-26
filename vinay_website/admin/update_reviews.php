<?php
   session_start();
   require_once("../configue.php");
   $username = $_SESSION["username"];
   $id = $_SESSION["id"];
   $login = mysqli_query($conn,"select * from tbl_user where id = '$id'");
   $result1 = mysqli_fetch_array($login);
   $no = $_GET['id'];
   $query = mysqli_query($conn,"select * from tbl_testimonial where id = '$no'");
   $result = mysqli_fetch_array($query);
?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Uniqonic Revolutions</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- site icon -->
      <link rel="icon" href="images/fevicon.png" type="image/png" />
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- site css -->
      <link rel="stylesheet" href="style.css" />
      <!-- responsive css -->
      <link rel="stylesheet" href="css/responsive.css" />
      <!-- color css -->
      <link rel="stylesheet" href="css/color_2.css" />
      <!-- select bootstrap -->
      <link rel="stylesheet" href="css/bootstrap-select.css" />
      <!-- scrollbar css -->
      <link rel="stylesheet" href="css/perfect-scrollbar.css" />
      <!-- custom css -->
      <link rel="stylesheet" href="css/custom.css" />
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
   </head>
   <body class="dashboard dashboard_2">
      <div class="full_container">
         <div class="inner_container">
            <!-- Sidebar  -->
            <nav id="sidebar">
               <div class="sidebar_blog_1">
                  <div class="sidebar-header">
                     <div class="logo_section">
                        <a href="index.php"><img class="logo_icon img-responsive" src="../img/logo.png" alt="#" /></a>
                     </div>
                  </div>
                  <div class="sidebar_user_info">
                     <div class="icon_setting"></div>
                     <div class="user_profle_side">
                        <div class="user_img"><img class="img-responsive" src="images/layout_img/user_img.jpg" alt="#" /></div>
                        <div class="user_info">
                           <h6><?php echo $result1['name'];?></h6>
                           <p><span class="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sidebar_blog_2">
                  <h4>General</h4>
                  <ul class="list-unstyled components">
                     <li class="active"><a href="index.php"><i class="fa fa-dashboard red_color"></i> <span>Dashboard</span></a></li>
                     <li><a href="reviews.php"><i class="fa fa-comments orange_color"></i> <span>Reviews</span></a></li>
                     <li><a href="pricing.php"><i class="fa fa-usd purple_color2"></i> <span>Pricing</span></a></li>
                  </ul>
               </div>
            </nav>
            <!-- end sidebar -->
            <!-- right content -->
            <div id="content">
               <!-- topbar -->
               <div class="topbar">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <div class="full">
                        <button type="button" id="sidebarCollapse" class="sidebar_toggle"><i class="fa fa-bars"></i></button>
                        <div class="logo_section">
                           <a href="index.php"><img class="img-responsive" src="../img/logo.png" alt="#" /></a>
                        </div>
                        <div class="right_topbar">
                           <div class="icon_info">
                              <ul class="user_profile_dd">
                                 <li>
                                    <a class="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src="images/layout_img/user_img.jpg" alt="#" /><span class="name_user"><?php echo $result1['name'];?></span></a>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="profile.php">My Profile</a>
                                       <a class="dropdown-item" href="logout.php"><span>Log Out</span> <i class="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
               <!-- end topbar -->
               <!-- dashboard inner -->
                <div class="midde_cont">
                    <div class="container-fluid">
                        <div class="row column_title">
                            <div class="col-md-12">
                            <div class="page_title">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row column1">
                        <div class="col-md-12 col-lg-12">
                            <div class="full_container">
                                <div class="container">
                                    <div class="center verticle_center full_height">
                                    <div class="login_section">
                                        <div class="login_form">
                                            <form action="" method="POST">
                                                <fieldset>
                                                <div class="field">
                                                    <label class="label_field">Name</label>
                                                    <input type="text" name="name" placeholder="Name" value="<?php echo $result['name']; ?>" required/>
                                                </div>
                                                <div class="field">
                                                    <label class="label_field">Review</label>
                                                    <input type="text" name="review" placeholder="Review" value="<?php echo $result['message']; ?>"/>
                                                </div>
                                                <div class="field margin_0">
                                                    <label class="label_field hidden">hidden label</label>
                                                    <button class="main_bt" name="submit">Update</button>
                                                </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php
                    if(isset($_POST['submit']))
                    {   
                        $name=$_POST['name'];
                        $message=$_POST['review'];
                        $iquery = "update tbl_testimonial set name = '$name',message='$message' where id = '$id'";
                        $query = mysqli_query($conn,$iquery);
        
                        if($query)
                        {
                            echo 
                            '<script type="text/javascript">
                                location.replace("reviews.php");
                            </script>';
                        }
                        else
                        {
                            echo "error $iquery";
                        }
                    }
                ?>

                  <!-- footer -->
                <div class="container-fluid">
                     <div class="footer">
                        <p>Copyright © 2022 Uniqonic Revolutions. All rights reserved.<br><br>
                           Developed By: <a>Rushi Maru</a>
                        </p>
                     </div>
                </div>
               <!-- end dashboard inner -->
            </div>
         </div>
      </div>
      <!-- jQuery -->
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <!-- wow animation -->
      <script src="js/animate.js"></script>
      <!-- select country -->
      <script src="js/bootstrap-select.js"></script>
      <!-- owl carousel -->
      <script src="js/owl.carousel.js"></script> 
      <script src="js/perfect-scrollbar.min.js"></script>
      <script>
         var ps = new PerfectScrollbar('#sidebar');
      </script>
      <!-- custom js -->
      <script src="js/custom.js"></script>
      <script src="js/chart_custom_style2.js"></script>
   </body>
</html>