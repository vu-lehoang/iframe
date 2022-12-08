<?php
include("../layout/header.php");
?>
<title>Đăng ký tài khoản</title>

</head>

<body class="bg-surface">

  <!--start wrapper-->
  <div class="wrapper">

       <header>
          <nav class="navbar navbar-expand-lg navbar-light rounded-0 border-bottom" style="background-color: #1a2232">
            <div class="container">
              <a class="navbar-brand" href="../index.php"><img src="../assets/images/logo-white.png" width="140" alt=""/></a>
            </div>
          </nav>
       </header>
    
    <!--start content-->
    <main class="authentication-content">
     <div class="container">
       <div class="mt-4">
         <div class="card rounded-0 overflow-hidden shadow-none border mb-5 mb-lg-0">
           <div class="row g-0">
             <div class="col-lg-6 d-flex align-items-center justify-content-center border-end">
               <img src="https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7990.jpg?w=740&t=st=1662791646~exp=1662792246~hmac=a0cee1f7c7f898b2b47bfafc0c477f3f0ef9151e3488056c41b74ae4a3e6acb9" class="img-fluid" alt="">
             </div>
             <div class="col-lg-6">
               <div class="card-body p-4 p-sm-5">
                 <h5 class="card-title">Quên mật khẩu?</h5>
                 <p class="card-text mb-5">Nhập email đã đăng ký của bạn để khởi tạo lại mật khẩu</p>
                 <form class="form-body">
                     <div class="row g-3">
                       <div class="col-12">
                         <label for="inputEmailid" class="form-label">Địa chỉ email</label>
                         <input type="email" class="form-control form-control-lg radius-30" id="inputEmailid">
                       </div>
                       <div class="col-12">
                         <div class="d-grid gap-3">
                           <button type="submit" class="btn btn-lg btn-primary radius-30">Gửi</button>
                           <a href="../admin/index.php" class="btn btn-lg btn-light radius-30">Quay lại trang đăng nhập</a>
                         </div>
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

    <footer class="border-top p-3 text-center  fixed-bottom" style="background-color: #1a2232">
              <p class="mb-0 text-white">© Minh Duy Solutions 2022. All right reserved.</p>
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