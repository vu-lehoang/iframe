<?php
session_start();
require 'config/database.php';
$username_email = $_SESSION['signin-data']['username_email'] ?? null;
$password = $_SESSION['signin-data']['password'] ?? null;
unset($_SESSION['signin-data']);
?>
<!-- Đăng nhập -->
<?php
include("../layout/header.php");
?>
<title>Đăng nhập vào Admin</title>
</head>

<body class="bg-surface">

    <!--start wrapper-->
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

        <!--end page main-->

        <footer class="bg-white border-top p-3 text-center fixed-bottom">
            <p class="mb-0">© Minh Duy Solutions 2022. All right reserved.</p>
        </footer>

    </div>
    <!--end wrapper-->


    <!-- Bootstrap bundle JS -->
    <script src="../assets/js/bootstrap.bundle.min.js"></script>

    <!--plugins-->
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/js/pace.min.js"></script>


</body>

</html>