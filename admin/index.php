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
  <?php if ($_SESSION['sigin-succes']) : ?>
    <!--start wrapper-->
    <div class="wrapper">
      <!--start top header-->
      <header class="top-header">
        <nav class="navbar navbar-expand gap-3 align-items-center">
          <div class="mobile-toggle-icon fs-3">
            <i class="bi bi-list"></i>
          </div>
          <div class="top-navbar-right ms-auto">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown dropdown-user-setting">
                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                  <div class="user-setting d-flex align-items-center">
                    <img src="../assets/images/logo.png" class="user-img" alt="">
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <img src="../assets/images/logo.png" alt="" class="rounded-circle" width="54" height="54">
                        <div class="ms-3">
                          <h6 class="mb-0 dropdown-user-name">Minh Duy Solutions</h6>
                          <small class="mb-0 dropdown-user-designation text-secondary">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li>
                    <a class="dropdown-item" href="../admin/logout.php">
                      <div class="d-flex align-items-center">
                        <div class=""><i class="bi bi-lock-fill"></i></div>
                        <div class="ms-3"><span>Logout</span></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!--end top header-->

      <!--start sidebar -->
      <aside class="sidebar-wrapper" data-simplebar="true">
        <div class="sidebar-header">
          <div>
            <img src="../assets/images/logo.png" class="logo-icon" alt="logo icon">
          </div>
          <div>
            <h4 class="logo-text">MDSCO</h4>
          </div>
          <div class="toggle-icon ms-auto"> <i class="bi bi-list"></i>
          </div>
        </div>
        <!--navigation-->
        <ul class="metismenu" id="menu">

          <li>
            <a href="javascript:;" class="has-arrow">
              <div class="parent-icon"><i class="bi bi-grid-fill"></i>
              </div>
              <div class="menu-title">Application</div>
            </a>
            <ul>
              <!-- <li> <a href="app-emailbox.html"><i class="bi bi-circle"></i>Email</a>
                </li> -->
              <li> <a href="frame.php"><i class="bi bi-circle"></i>Frame</a>
              </li>

            </ul>
          </li>




          <!--end navigation-->
      </aside>
      <!--end sidebar -->

      <!--start content-->
      <main class="page-content">




      </main>
      <!--end page main-->

      <!--start overlay-->
      <div class="overlay nav-toggle-icon"></div>
      <!--end overlay-->

      <!--Start Back To Top Button-->
      <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
      <!--End Back To Top Button-->

      <!--start switcher-->
      <div class="switcher-body">
        <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button>
        <div class="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <h6 class="mb-0">Theme Variation</h6>
            <hr>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme" value="option1">
              <label class="form-check-label" for="LightTheme">Light</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme" value="option2">
              <label class="form-check-label" for="DarkTheme">Dark</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDarkTheme" value="option3" checked>
              <label class="form-check-label" for="SemiDarkTheme">Semi Dark</label>
            </div>
            <hr>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="MinimalTheme" value="option3">
              <label class="form-check-label" for="MinimalTheme">Minimal Theme</label>
            </div>
            <hr />
            <h6 class="mb-0">Header Colors</h6>
            <hr />
            <div class="header-colors-indigators">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <div class="indigator headercolor1" id="headercolor1"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor2" id="headercolor2"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor3" id="headercolor3"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor4" id="headercolor4"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor5" id="headercolor5"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor6" id="headercolor6"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor7" id="headercolor7"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor8" id="headercolor8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end switcher-->

    </div>
    <!--end wrapper-->
  <?php else : ?>
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
                    <div class="alert__message success">
                      <p>
                        <?= $_SESSION['signup-success'];
                        unset($_SESSION['signup-success']);
                        ?>
                      </p>
                    </div>
                  <?php elseif (isset($_SESSION['signin'])) :  ?>
                    <div class="alert__message error">
                      <p>
                        <?= $_SESSION['signin'];
                        unset($_SESSION['signin']);
                        ?>
                      </p>
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