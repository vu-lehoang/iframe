<?php
include("../layout/header.php");
?>
<title>Đăng ký tài khoản</title>

</head>

<body class="bg-surface">

  <!--start wrapper-->
  <div class="wrapper">

       <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom">
            <div class="container">
              <a class="navbar-brand" href="#"><img src="../assets/images/logo-mdsco.png" width="140" alt=""/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent" style="flex: 0 0 auto">
                <div class="d-flex ms-3 gap-3">
                  <a href="../admin/index.php" class="btn btn-white btn-sm px-4 radius-30">Đăng nhập</a>
                  <a href="../admin/signup.php" class="btn btn-primary btn-sm px-4 radius-30">Đăng ký</a>
                </div>
              </div>
            </div>
          </nav>
       </header>
    
       <!--start content-->
       <main class="authentication-content">
        <div class="container">
          <div class="mt-4">
            <div class="card rounded-0 overflow-hidden shadow-none bg-white border">
              <div class="row g-0">
                <div class="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                  <img src="../assets/images/error/auth-img-register3.png" class="img-fluid" alt="">
                </div>
                <div class="col-12 col-xl-4 order-xl-2">
                  <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title">Đăng ký</h5>
                     <form class="form-body">
                      
                        <div class="row g-3">
                          <div class="col-12 ">
                            <label for="inputName" class="form-label">Tên người dùng</label>
                            <div class="ms-auto position-relative">
                              <input type="email" class="form-control radius-30" id="inputName" >
                            </div>
                          </div>
                          <div class="col-12">
                            <label for="inputEmailAddress" class="form-label">Địa chỉ email</label>
                            <div class="ms-auto position-relative">
                              <input type="email" class="form-control radius-30" id="inputEmailAddress" >
                            </div>
                          </div>
                          <div class="col-12">
                            <label for="inputChoosePassword" class="form-label">Mật khẩu: </label>
                            <div class="ms-auto position-relative">
                              <input type="password" class="form-control radius-30" id="inputChoosePassword" >
                            </div>
                          </div>
                          <div class="col-12">
                            <label for="inputChoosePassword" class="form-label">Nhập lại mật khẩu: </label>
                            <div class="ms-auto position-relative">
                              <input type="password" class="form-control radius-30" id="inputChoosePassword" >
                            </div>
                          </div>
                          
                          <div class="col-12">
                            <div class="d-grid">
                              <button type="submit" class="btn btn-primary radius-30">Đăng ký</button>
                            </div>
                          </div>
                          <div class="col-12 text-center">
                            <p class="mb-0">Bạn đã có tài khoản? <a href="authentication-signin-with-header-footer.html">Đăng nhập tại đây</a></p>
                          </div>
                        </div>
                    </form>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </main>
        
       <!--end page main-->

       <footer class="bg-white border-top p-3 text-center">
       <p class="mb-0">© Minh Duy Solutions 2022. All right reserved.</p>
      </footer>

  </div>
  <!--end wrapper-->


  <!-- Bootstrap bundle JS -->
  <script src="../assets/js/bootstrap.bundle.min.js"></script>

  <!--plugins-->
  <script src="../assets/js/jquery.min.js"></script>
  <script src="../assets/js/pace.min.js"></script>


session_start();
require 'config/database.php';

//get back form data if there was a resginter error
$firstname = $_SESSION['signup-data']['firstname'] ?? null;
$lastname = $_SESSION['signup-data']['lastname'] ?? null;
$username = $_SESSION['signup-data']['username'] ?? null;
$email = $_SESSION['signup-data']['email'] ?? null;
$createpassword = $_SESSION['signup-data']['createpassword'] ?? null;
$confirmpassword = $_SESSION['signup-data']['confirmpassword'] ?? null;

//delete signup data session
unset($_SESSION['signup-data']);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog website</title>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="<?= ROOT_URL ?>css/variables.css">
    <link rel="stylesheet" href="<?= ROOT_URL ?>css/style.css">
</head>

<body>
    <section class="form__section">
        <div class="container form__section-container">
            <h2>Sign Up</h2>
            <!-- <div class="alert__message error">
                <p>This is an error message</p>
            </div> -->
            <?php if (isset($_SESSION['signup'])) : ?>
                <div class="alert__message error">
                    <p>
                        <?= $_SESSION['signup'];
                        unset($_SESSION['signup']);
                        ?>
                    </p>

                </div>
            <?php endif ?>
            <form action="<?= ROOT_URL_ADMIN ?>handle/signup-logic.php" method="POST" enctype="multipart/form-data">
                <input type="text" name="firstname" value="<?= $firstname ?>" placeholder="First Name">
                <input type="text" name="lastname" value="<?= $lastname ?>" placeholder="Last Name">
                <input type="text" name="username" value="<?= $username ?>" placeholder="Username">
                <input type="text" name="email" value="<?= $email ?>" placeholder="Email">
                <input type="password" name="createpassword" value="<?= $createpassword ?>" placeholder="Create Password">
                <input type="password" name="confirmpassword" value="<?= $confirmpassword ?>" placeholder="Confirm Password">
                <!-- <div class="form__control">
                    <label for="avatar"></label>
                    <input type="file" name="avatar" id="avatar">
                </div> -->
                <button type="submit" name="submit" class="btn">Sign up</button>
                <small>Already have an account? <a href="<?= ROOT_URL_ADMIN ?>signin.php">Sign in</a></small>
            </form>
        </div>
    </section>
    <!-- ===================== EMPTY PAGE =====================-->

    <script src="main.js"></script>
</body>

</html>