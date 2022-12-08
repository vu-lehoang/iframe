<?php
include '../layout/header.php';
error_reporting(0);
session_start();
require 'config/database.php';
$username_email = $_SESSION['signin-data']['username_email'] ?? null;
$password = $_SESSION['signin-data']['password'] ?? null;
unset($_SESSION['signin-data']);
?>

<body>
  <?php if ($_SESSION['sigin-succes']) : header("Location:../admin/frame.php") ?>
    <!--start wrapper-->
  <?php else : ?>
    <div class="wrapper">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom">
                <div class="container">
                    <a class="navbar-brand" href="../index.php"><img src="../assets/images/logo-mdsco.png" width="140" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="flex: 0 0 auto ">
                        <div class="d-flex ms-3 gap-3">
                            <a href="../admin/index.php" class="btn btn-primary btn-sm px-4 radius-30">Đăng nhập</a>
                            <a href="../admin/signup.php" class="btn btn-white btn-sm px-4 radius-30">Đăng ký</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!--start content-->
        <main class="authentication-content">
      <div class="container">
        <div class="mt-4">
          <div class="card rounded-0 overflow-hidden shadow-none border mb-5 mb-lg-0">
            <div class="row g-0">
              <div class="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                <img src="../assets/images/error/auth-img-7.png" class="img-fluid" alt="">
              </div>
              <div class="col-12 col-xl-4 order-xl-2">
                <div class="card-body p-4 p-sm-5">
                  <?php if (isset($_SESSION['signup-success'])) : ?>
                    <div class="alert border-0 bg-light-success alert-dismissible fade show py-2">
                      <div class="d-flex align-items-center">
                          <div class="fs-3 text-success"><i class="bi bi-check-circle-fill"></i>
                          </div>
                          <div class="ms-3">
                          <div class="text-success">
                              <?= $_SESSION['signup-success'];
                                  unset($_SESSION['signup-success']);
                              ?></div>
                          </div>
                      </div>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  <?php elseif (isset($_SESSION['signin'])) :  ?>
                    <div class="alert border-0 bg-light-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                        <div class="fs-3 text-danger"><i class="bi bi-x-circle-fill"></i>
                        </div>
                        <div class="ms-3">
                            <div class="text-danger">
                            <?= $_SESSION['signin'];
                            unset($_SESSION['signin']);?>
                            </div>
                        </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  <?php endif ?>
                  <h5 class="card-title">Đăng nhập</h5>
                  <form action="<?= ROOT_URL_ADMIN ?>handle/signin-logic.php" method="POST" class="form-body">
                    <div class="row g-3">
                      <div class="col-12">
                        <label for="inputEmailAddress" class="form-label">Địa chỉ email hoặc tên người dùng</label>
                        <div class="ms-auto position-relative">
                          <input type="text" name="username_email" value="<?= $username_email ?>" placeholder="Username or Email" class="form-control radius-30" id="inputEmailAddress">
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="inputChoosePassword" class="form-label">Mật khẩu</label>
                        <div class="ms-auto position-relative">
                          <input type="password" name="password" value="<?= $password ?>" placeholder="Password" class="form-control radius-30" id="inputChoosePassword">
                        </div>
                      </div>

                      <div class="col-6 text-end"> <a href="authentication-forgot-password.html">Quên mật khẩu?</a>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button type="submit" name="submit" class="btn btn-primary radius-30">Đăng nhập</button>
                        </div>
                      </div>

                      <div class="col-12 text-center">
                        <p class="mb-0">Bạn chưa có tài khoản? <a href="<?= ROOT_URL ?>signup.php">Đăng ký tại đây</a></p>
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

        <footer class="bg-white border-top p-3 text-center fixed-bottom">
            <p class="mb-0">© Minh Duy Solutions 2022. All right reserved.</p>
        </footer>

    </div>
  <?php endif; ?>

  <!-- Bootstrap bundle JS -->
  <script src="../assets/js/bootstrap.bundle.min.js"></script>
  <!--plugins-->
  <script src="../assets/js/jquery.min.js"></script>
  <script src="../assets/plugins/simplebar/js/simplebar.min.js"></script>
  <script src="../assets/plugins/metismenu/js/metisMenu.min.js"></script>
  <script src="../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
  <script src="../assets/js/pace.min.js"></script>
  <script src="../assets/plugins/chartjs/js/Chart.min.js"></script>
  <script src="../assets/plugins/chartjs/js/Chart.extension.js"></script>
  <script src="../assets/plugins/apexcharts-bundle/js/apexcharts.min.js"></script>
  <!-- Vector map JavaScript -->
  <script src="../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
  <script src="../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
  <!--app-->
  <script src="../assets/js/app.js"></script>
  <script src="../assets/js/index.js"></script>
  <script src="../assets/js/bundle.js"></script>
  <script>
    // new PerfectScrollbar(".review-list")
    // new PerfectScrollbar(".chat-talk")
  </script>


</body>

</html>