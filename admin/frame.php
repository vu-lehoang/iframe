<?php

session_start();
error_reporting(0);
?>
<!doctype html>
<html lang="en" class="semi-dark">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="../assets/" type="image/png" />
  <!--plugins-->
  <link href="../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
  <link href="../assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
  <link href="../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
  <link href="../assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
  <!-- Bootstrap CSS -->
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../assets/css/bootstrap-extended.css" rel="stylesheet" />
  <link href="../assets/css/style.css" rel="stylesheet" />
  <link href="../assets/css/icons.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  

  <!-- loader-->
	<link href="../assets/css/pace.min.css" rel="stylesheet" />

  <!--Theme Styles-->
  <link href="../assets/css/dark-theme.css" rel="stylesheet" />
  <link href="../assets/css/light-theme.css" rel="stylesheet" />
  <link href="../assets/css/semi-dark.css" rel="stylesheet" />
  <link href="../assets/css/header-colors.css" rel="stylesheet" />
  <style>
    .btn-close{
      position: absolute;
      top: 0;
      right: 0;
      padding: 15px;
      filter: brightness(100%);
      background: transparent 
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='darkred'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat
    }
  </style>
  <title>Snacked - Bootstrap 5 Admin Template</title>
</head>

<body>


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
                          <img src="../assets/images/frames/logo_favicon.png" alt="" class="rounded-circle" width="54" height="54">
                          <div class="ms-3">
                            <h6 class="mb-0 dropdown-user-name">Minh Duy Solutions</h6>
                            <small class="mb-0 dropdown-user-designation text-secondary">Admin</small>
                          </div>
                       </div>
                     </a>
                   </li>
                   <li><hr class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item" href="authentication-signup-with-header-footer.html">
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
                
                <li> <a href="frame.php"><i class="bi bi-circle"></i>Frame</a>
                </li>
          
              </ul>
            </li>

            
              
                
          <!--end navigation-->
       </aside>
       <!--end sidebar -->

       <!--start content-->
       <main class="page-content">
            <?php
            if (isset($_POST['btn-xoa'])) {
              $abvca = $_POST['hiddenInput'];
              unlink("../assets/images/frames/$abvca");
            }
$filename = $_SESSION['file_img'];
$err = '';
if (isset($_POST['uploadfile'])) {

    $conMeo = $_POST['fileAbc'];

    if ($_POST['fileAbc'] != null) {
        $time = time();
        $cat =  explode("-", $_POST['fileAbc']);
        $newName = $time . "-" . $cat[1];
        $old = "../assets/images/frames/" . $_POST['fileAbc'];
        $new = "../assets/images/frames/" . $newName;
        rename($old, $new);
    }
    else{
      $time = time();
      // $_SESSION['choose_file'] =  $time . '-' . $_FILES["choosefile"]['name'];
      $tempname = $_FILES["choosefile"]["tmp_name"];
  
      $thumbnail = $_FILES['choosefile'];
  
      $thumbnail_name = $time . '-' .  $thumbnail['name'];
      $thumbnail_tmp_name = $thumbnail['tmp_name'];
      $thumbanil_description_path = '../assets/images/frames/' . $thumbnail_name;
      // make sure file is an image
      $allowed_files = ['png', 'jpg', 'jpeg'];
      // Tách chuỗi sang mảng
      $extension = explode('.', $thumbnail_name);
      // lấy ra giá trị của cùng trong mảng
      $extension = end($extension);
      if (in_array($extension, $allowed_files)) {
          if ($thumbnail['size'] < 20000000) {
              $catchuoi = explode('-', $thumbnail_name);
              if (checkFolder("../assets/images/frames/*", $catchuoi[1]))
              {
                move_uploaded_file($thumbnail_tmp_name, $thumbanil_description_path);
              }


          } else {
              $err = '';
          }
      } else {
        $err = '';
      }
    } 
    
}
function checkFolder($link, $str)
{
    $out = array();
    foreach (glob($link) as $filename) {
        $p = pathinfo($filename);
        $cat = explode('-', $p['basename']);
        if ($cat[1] == $str)
            return 0;
    }
    return 1;
}

$out_folder = array();
foreach (glob('../assets/images/frames/*') as $filename) {
    $p = pathinfo($filename);
    $out_folder[] = $p['basename'];
}


?>
<?php $out1 = array();
foreach (glob('../assets/images/frames/*') as $filename) {
    $p = pathinfo($filename);
    $out1[] = $p['basename'];
}



?>
<div class="row">
  <div id="wrapper">
    <!-- Thông báo lỗi -->
      <h1><?php echo ($err != '')?$err:null?></h1>
    <!-- end thong báo lỗi -->
      <div class="card rounded-4">
          <div class="card-body">
            <form method="POST" action="" enctype="multipart/form-data">
              <div class="row row-cols-1 row-cols-lg-2">
                <div class="col d-flex">
                  <div class="card rounded-4 w-100">
                    <div class="card-body">
                      <h1 class="large fs-6 my-2 primary " style="font-weight: bold">Chọn khung ảnh mới:</h1>
                        <div class="image-preview" align="center">
                          <img src="../assets/images/upload.png" class="preview-img" alt="" id="img">
                          <input type="hidden" name="fileAbc" class="input-file">
                          <input type="file" name="choosefile" value="" id ="choosefile" style="display:none"/>
                          <div style="margin-top: 10px"></div>
                          <label for="choosefile" class="btn btn-outline-primary px-5 radius-30" style="margin-right: 15px">Chọn ảnh</label>
                          <button type="submit" name="uploadfile" class="btn btn-outline-success px-5 radius-30">
                              Lưu ảnh 
                          </button>
                        </div>
                    </div> 
                  </div>
                </div>
                <div class="col d-flex">
                  <div class="card rounder-4 w-100">
                    <div class="card-body">
                      <h1 class="large fs-6 my-2 primary" style="font-weight: bold">Khung ảnh đang dùng:</h1>
                      <img class="img-choice" src="../assets/images/frames/<?php $index = count($out_folder) - 1; ;echo ($out_folder[$index])?$out_folder[$index]:$out[0]?>" alt="">
                    </div>
                  </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="row">
  <div class="card rounded-4">
    <div class="card-body">
      <h1 class="large fs-6 my-2 primary mb-3 " style="font-weight: bold">Khung ảnh có sẵn:</h1>
      <div class="row row-cols-1 row-cols-lg-5 g-lg-5">
        <?php foreach ($out1 as $key => $item) : ?>
            <div class="col col-img">
              <div class="card">
                  <img src="../assets/images/frames/<?= $item ?>" name="img_abas" name_src="<?= $item ?>" class="image_abc card-img-top" 
                  alt="" style="width: 292px; height: 292px">
                  <!-- <div class="card-body" style="position:relative"> -->
                    <form action="" method="POST">
                      <button type="submit" name="btn-xoa" class="btn-close" label="Close"></button>
                      <input type="hidden" name="hiddenInput" value="<?= $item ?>">
                      
            </form>
              <!-- </div> -->
        </div>
    </div>
            <?php endforeach ?>
          </div> 
    </div>
  </div>
</div>


</body>
<script>
    const imgAba = document.querySelectorAll('img.image_abc');
    imgAba.forEach((item) => {
        item.addEventListener("click", () => {
            let attItem = item.getAttribute('name_src');
            const input = document.querySelector(".input-file");
            input.value = attItem;
            console.log(input.value);
            console.log(attItem);
        })
    })
    imgAba.forEach(item=> item.addEventListener("click", handleClick));
    function handleClick (e){
      imgAba.forEach(item=> item.style="border: none");
      e.target.style="border: 1px solid blue";
    }
    const btnUpdateImg = document.querySelector("#choosefile");
    btnUpdateImg.addEventListener("change", function(){
        const img= document.querySelector("#img");
        console.log(window.URL.createObjectURL(btnUpdateImg.files[0]));
        img.src=window.URL.createObjectURL(btnUpdateImg.files[0]);
    });
</script>



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
            <hr/>
            <h6 class="mb-0">Header Colors</h6>
            <hr/>
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
  <!-- <script src="../assets/js/bundle.js"></script> -->
  <script>
    // new PerfectScrollbar(".review-list")
    // new PerfectScrollbar(".chat-talk")
</script>


</body>

</html>