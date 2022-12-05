<?php error_reporting(0); ?>
<!doctype html>
<html lang="en" class="semi-dark">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="../assets/" type="image/png" />
  <!--plugins-->
  <link href="../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet" />
  <link href="../assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
  <link href="../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
  <link href="../assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
  <!-- Bootstrap CSS -->
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../assets/css/bootstrap-extended.css" rel="stylesheet" />
  <link href="../assets/css/style.css" rel="stylesheet" />
  <link href="../assets/css/icons.css" rel="stylesheet">
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
    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 15px;
      filter: brightness(100%);
      background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='darkred'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat
    }
  </style>
  <title>Admin</title>
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
                  <img src="../assets/images/avatars/avatar-1.png" class="user-img" alt="">
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
                  </hr>
                  <!-- <li>
                      <a class="dropdown-item" href="pages-user-profile.html">
                         <div class="d-flex align-items-center">
                           <div class=""><i class="bi bi-person-fill"></i></div>
                           <div class="ms-3"><span>Profile</span></div>
                         </div>
                       </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                         <div class="d-flex align-items-center">
                           <div class=""><i class="bi bi-gear-fill"></i></div>
                           <div class="ms-3"><span>Setting</span></div>
                         </div>
                       </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index2.html">
                         <div class="d-flex align-items-center">
                           <div class=""><i class="bi bi-speedometer"></i></div>
                           <div class="ms-3"><span>Dashboard</span></div>
                         </div>
                       </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                         <div class="d-flex align-items-center">
                           <div class=""><i class="bi bi-piggy-bank-fill"></i></div>
                           <div class="ms-3"><span>Earnings</span></div>
                         </div>
                       </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                         <div class="d-flex align-items-center">
                           <div class=""><i class="bi bi-cloud-arrow-down-fill"></i></div>
                           <div class="ms-3"><span>Downloads</span></div>
                         </div>
                       </a>
                    </li> -->
                  <!-- <li><hr class="dropdown-divider"></li> -->
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
    <?php

    if (isset($_POST['uploadfileImg'])) {
      // resetIndex('hiddenInput', "../assets/images/frames/");
      $selectImg = $_POST['hiddenInput'];
      $time = time();
      $cat =  explode("-", $selectImg);
      $arrName = '';
      if (count($cat) > 2) {
        for ($i = 1; $i < count($cat); $i++) {
          $arrName .= $cat[$i];
        }
      }
      $newName = $time . "-" . $arrName;
      $old = "../assets/images/frames/" . $selectImg;
      $new = "../assets/images/frames/" . $newName;
      rename($old, $new);
    }
    function resetIndex($value = '', $link = '../assets/images/frames/')
    {
      $selectImg = $_POST[$value];
      $time = time();
      $cat =  explode("-", $selectImg);

      $newName = $time . "-" . $cat[1];
      $old = $link . $selectImg;
      $new = $link . $newName;
      rename($old, $new);
    };
    ?>
    <?php
    include '../layout/sidebar.php';
    ?>
    <!--end sidebar -->

    <!--start content-->
    <main class="page-content">
      <?php
      $err = '';
      // delete img
      if (isset($_POST['btn-xoa'])) {
        $abvca = $_POST['hiddenInput'];
        unlink("../assets/images/frames/$abvca");
      } else {
      }
      // check if the user has clicked the button "UPLOAD" 
      if (isset($_POST['uploadfile'])) {
        // handle choose img available 
        if ($_POST['fileAbc'] != null) {
          $time = time();
          $cat =  explode("-", $_POST['fileAbc']);
          $newName = $time . "-" . $cat[1];
          $old = "../assets/images/frames/" . $_POST['fileAbc'];
          $new = "../assets/images/frames/" . $newName;
          rename($old, $new);
        } else {
          $filename = $_FILES["choosefile"]['name'];
        }

        $time = time();

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
            // upload thumbnail
            $catchuoi = explode('-', $thumbnail_name);
            if (checkFolder("../assets/images/frames/*", $catchuoi[1]))
              move_uploaded_file($thumbnail_tmp_name, $thumbanil_description_path);
            // header('location: ../index.php');

          } else {
            $err = '';
          }
        } else {
          $err = '';
        }
      }
      // check exits img in folder
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

      // get file in folder
      $out_folder = array();
      foreach (glob('../assets/images/frames/*') as $filename) {
        $p = pathinfo($filename);
        $out_folder[] = $p['basename'];
      }
      ?>



      <div class="row">
        <div id="wrapper">
          <!-- Thông báo lỗi -->
          <h1><?php echo ($err != '') ? $err : null ?></h1>
          <!-- end thong báo lỗi -->
          <div class="card rounded-4">
            <div class="card-body">
              <form method="POST" action="" enctype="multipart/form-data">
                <div class="row row-cols-1 row-cols-lg-2">
                  <div class="col d-flex">
                    <div class="card rounded-4 w-100">
                      <div class="card-body">
                        <h1 class="large fs-6 my-2 primary" style="font-weight: bold">Chọn khung ảnh mới:</h1>
                        <div class="image-preview">
                          <img src="../assets/images/upload.png" alt="" id="img">
                          <input type="hidden" name="fileAbc" class="input-file">
                          <input type="file" name="choosefile" value="" id="choosefile" style="display:none" />
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
                        <img src="../assets/images/frames/<?php $index = count($out_folder) - 1;;
                                                          echo ($out_folder[$index]) ? $out_folder[$index] : $out[0] ?>" alt="">
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
        <h1 class="large fs-6 my-2 primary" style="font-weight: bold">Khung ảnh có sẵn:</h1>
        <div class="row row-cols-1 row-cols-lg-3 justify-content-center g-lg-5">
          <?php foreach ($out_folder as $key => $item) : ?>
            <div class="col col-img">
              <div class="card">
                <img src="../assets/images/frames/<?= $item ?>" name="img_abas" name_src="<?= $item ?>" class="image_abc card-img-top" alt="" style="width: 292px; height: 292px">

                <!-- <div class="card-body" style="position:relative"> -->
                <form action="" method="POST">
                  <button type="submit" name="btn-xoa" class="btn-close" label="Close"></button>
                  <input type="hidden" name="hiddenInput" value="<?= $item ?>">
                  <button type="submit" name="uploadfileImg" class="btn btn-outline-success px-5 radius-30">Áp dụng</button>
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
  // get name url
  const imgAba = document.querySelectorAll('img.image_abc');
  imgAba.forEach((item) => {
    item.addEventListener("click", () => {
      let attItem = item.getAttribute('name_src');
      const input = document.querySelector(".input-file");
      input.value = attItem;
    })
  })
  imgAba.forEach(item => item.addEventListener("click", handleClick));

  function handleClick(e) {
    imgAba.forEach(item => item.style = "border: none");
    e.target.style = "border: 1px solid blue";
  }
  // preview img
  const btnUpdateImg = document.querySelector("#choosefile");
  btnUpdateImg.addEventListener("change", function() {
    const img = document.querySelector("#img");
    console.log(window.URL.createObjectURL(btnUpdateImg.files[0]));
    img.src = window.URL.createObjectURL(btnUpdateImg.files[0]);
  });
</script>
<?php

?>

<!-- <div class="row">
                <div class="col-12 col-lg-8 col-xl-8 d-flex">
                   <div class="card w-100 rounded-4">
                     <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <h6 class="mb-0">Revenue History</h6>
                        <div class="fs-5 ms-auto dropdown">
                           <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                             <ul class="dropdown-menu">
                               <li><a class="dropdown-item" href="#">Action</a></li>
                               <li><a class="dropdown-item" href="#">Another action</a></li>
                               <li><hr class="dropdown-divider"></li>
                               <li><a class="dropdown-item" href="#">Something else here</a></li>
                             </ul>
                         </div>
                       </div>
                      <div class="d-flex align-items-center gap-3">
                        <div class="">
                          <h4 class="text-success mb-0">$9,279</h4>
                          <p class="mb-0">Revenue</p>
                        </div>
                        <div class="vr"></div>
                        <div class="">
                          <h4 class="text-pink mb-0">$5,629</h4>
                          <p class="mb-0">Investment</p>
                        </div>
                      </div>
                        <div id="chart1"></div>
                     </div>
                   </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-4 d-flex">
                  <div class="card w-100 rounded-4">
                    <div class="card-body">
                     <div class="d-flex align-items-center mb-3">
                       <h6 class="mb-0">Task Overview</h6>
                       <div class="fs-5 ms-auto dropdown">
                          <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                      </div>
                       <div id="chart2"></div>
                    </div>
                    <ul class="list-group list-group-flush mb-0 shadow-none">
                      <li class="list-group-item bg-transparent border-top"><i class="bi bi-circle-fill me-2 font-weight-bold text-primary"></i> Complete <span class="float-end">120</span></li>
                      <li class="list-group-item bg-transparent"><i class="bi bi-circle-fill me-2 font-weight-bold text-orange"></i> In Progress <span class="float-end">110</span></li>
                      <li class="list-group-item bg-transparent"><i class="bi bi-circle-fill me-2 font-weight-bold text-info"></i> Started <span class="float-end">70</span></li>
                    </ul>
                  </div>
               </div>

             </div>  -->
<!--end row-->

<!-- <div class="row row-cols-1 row-cols-lg-4 radial-charts g-4">
               <div class="col">
                  <div class="card rounded-4">
                    <div class="card-body">
                      <div class="text-center">
                        <p class="mb-1">Orders</p>
                        <h4 class="">9,254</h4>
                      </div>
                       <div class="">
                          <div id="chart3"></div>
                       </div>
                      <div class="text-center">
                        <p class="mb-1">Completed</p>
                        <h4 class="">5632</h4>
                      </div>
                    </div>
                  </div>
               </div>
               <div class="col">
                <div class="card rounded-4">
                  <div class="card-body">
                    <div class="text-center">
                      <p class="mb-1">Unique Visitors</p>
                      <h4 class="">5,2684</h4>
                    </div>
                     <div class="">
                        <div id="chart4"></div>
                     </div>
                    <div class="text-center">
                      <p class="mb-1">Increased since Last Week</p>
                      <h4 class="">25%</h4>
                    </div>
                  </div>
                </div>
             </div>
             <div class="col">
              <div class="card rounded-4">
                <div class="card-body">
                  <div class="text-center">
                    <p class="mb-1">Impressions</p>
                    <h4 class="">7,362</h4>
                  </div>
                   <div class="">
                      <div id="chart5"></div>
                   </div>
                  <div class="text-center">
                    <p class="mb-1">Increased since Last Week</p>
                    <h4 class="">45%</h4>
                  </div>
                </div>
              </div>
           </div>
           <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                <div class="text-center">
                  <p class="mb-1">Followers</p>
                  <h4 class="">4278K</h4>
                </div>
                 <div class="">
                    <div id="chart6"></div>
                 </div>
                <div class="text-center">
                  <p class="mb-1">Increased since Last Week</p>
                  <h4 class="">55%</h4>
                </div>
              </div>
            </div>
          </div>

        </div>end row -->


<!-- <div class="row">
           <div class="col-12 col-lg-6 col-xl-6 d-flex">
             <div class="card rounded-4 w-100">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <h6 class="mb-0">Sales By Countries</h6>
                    <div class="fs-5 ms-auto dropdown">
                       <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                         <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Action</a></li>
                           <li><a class="dropdown-item" href="#">Another action</a></li>
                           <li><hr class="dropdown-divider"></li>
                           <li><a class="dropdown-item" href="#">Something else here</a></li>
                         </ul>
                     </div>
                   </div>
                   <div id="world-map" style="height: 242px;"></div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center">
                  <tbody>
                    <tr>
                   <td><i class="flag-icon flag-icon-gb"></i></td>
                   <td><i class="bi bi-circle-fill me-2 text-primary"></i> Russia</td>
                   <td><p class="mb-0">Sales: <span class="fw-bold">28,000</span></p></td>
                   <td>40%</td>
                   </tr>
                    <tr>
                   <td><i class="flag-icon flag-icon-au"></i></td>
                   <td><i class="bi bi-circle-fill me-2 text-warning"></i> Australia</td>
                   <td><p class="mb-0">Sales: <span class="fw-bold">58,000</span></p></td>
                   <td>60%</td>
                   </tr>
                    <tr>
                   <td><i class="flag-icon flag-icon-us"></i></td>
                   <td><i class="bi bi-circle-fill me-2 text-success"></i> United States</td>
                   <td><p class="mb-0">Sales: <span class="fw-bold">72,000</span></p></td>
                   <td>30%</td>
                   </tr>
                    <tr>
                   <td><i class="flag-icon flag-icon-in"></i></td>
                   <td><i class="bi bi-circle-fill me-2 text-secondary"></i> India</td>
                   <td><p class="mb-0">Sales: <span class="fw-bold">68,000</span></p></td>
                   <td>55%</td>
                   </tr>
                  </tbody>
                  </table>
                </div>
             </div>
           </div>
           <div class="col-12 col-lg-6 col-xl-6 d-flex">
            <div class="card rounded-4 w-100">
               <div class="card-body">
                 <div class="d-flex align-items-center mb-3">
                   <h6 class="mb-0">Top Selling Products</h6>
                   <div class="fs-5 ms-auto dropdown">
                      <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                  </div>
                  <div class="">
                    <div class="d-flex align-items-start gap-3">
                      <div class="product-box border">
                        <img src="assets/images/products/05.png" alt="product img">
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress-wrapper">
                          <p class="my-2">iPhone 11 - A24512 <span class="float-end">(4,216 Orders) <span class="ms-3 fw-bold">42%</span></span></p>
                          <div class="progress" style="height: 4px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 42%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                   <hr>
                   <div class="d-flex align-items-start gap-3">
                      <div class="product-box border">
                        <img src="assets/images/products/07.png" alt="product img">
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress-wrapper">
                          <p class="my-2">iPhone 11 - A24512 <span class="float-end">(4,216 Orders) <span class="ms-3 fw-bold">42%</span></span></p>
                          <div class="progress" style="height: 4px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 42%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                   <hr>
                    <div class="d-flex align-items-start gap-3">
                      <div class="product-box border">
                        <img src="assets/images/products/09.png" alt="product img">
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress-wrapper">
                          <p class="my-2">iPhone 11 - A24512 <span class="float-end">(4,216 Orders) <span class="ms-3 fw-bold">42%</span></span></p>
                          <div class="progress" style="height: 4px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 42%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                   <hr>
                  <div class="d-flex align-items-start gap-3">
                      <div class="product-box border">
                        <img src="assets/images/products/02.png" alt="product img">
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress-wrapper">
                          <p class="my-2">iPhone 11 - A24512 <span class="float-end">(4,216 Orders) <span class="ms-3 fw-bold">42%</span></span></p>
                          <div class="progress" style="height: 4px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 42%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                   <hr>
                   <div class="d-flex align-items-start gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/04.png" alt="product img">
                    </div>
                    <div class="flex-grow-1">
                      <div class="progress-wrapper">
                        <p class="my-2">iPhone 11 - A24512 <span class="float-end">(4,216 Orders) <span class="ms-3 fw-bold">42%</span></span></p>
                        <div class="progress" style="height: 4px;">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 42%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                   </div>
               </div>
            </div>
          </div>

        </div>end row -->

<!-- <div class="row row-cols-1 row-cols-lg-3">
          <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                 <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="">
                    <h4 class="mb-0">24.5K</h4>
                    <p class="mb-0">Facebook Followers</p>
                 </div>
                 <div class="fs-2 text-facebook">
                  <i class="bi bi-facebook"></i>
                </div>
                 </div>
                 <div id="chart7"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                 <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="">
                    <h4 class="mb-0">37.8K</h4>
                    <p class="mb-0">Twitter Followers</p>
                 </div>
                 <div class="fs-2 text-twitter">
                  <i class="bi bi-twitter"></i>
                </div>
                 </div>
                 <div id="chart8"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card rounded-4">
              <div class="card-body">
                 <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="">
                    <h4 class="mb-0">56.9K</h4>
                    <p class="mb-0">Youtube Subscribers</p>
                 </div>
                 <div class="fs-2 text-youtube">
                  <i class="bi bi-youtube"></i>
                </div>
                 </div>
                 <div id="chart9"></div>
              </div>
            </div>
          </div>

        </div>end row -->


<!-- <div class="row">
          <div class="col-12 col-lg-6 col-xl-6 d-flex">
            <div class="card rounded-4 w-100">
              <div class="card-header bg-transparent">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Customer Reviews</h6>
                  <div class="fs-5 ms-auto dropdown">
                     <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                       <ul class="dropdown-menu">
                         <li><a class="dropdown-item" href="#">Action</a></li>
                         <li><a class="dropdown-item" href="#">Another action</a></li>
                         <li><hr class="dropdown-divider"></li>
                         <li><a class="dropdown-item" href="#">Something else here</a></li>
                       </ul>
                   </div>
                 </div>
              </div>
               <div class="card-body">
                 <div class="review-list">
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-1.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">James Caviness</h6>
                        <p class="mb-0 ms-auto">February 16, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-2.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">David Buckley</h6>
                        <p class="mb-0 ms-auto">February 22, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-3.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">Peter Costanzo</h6>
                        <p class="mb-0 ms-auto">February 26, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-4.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">Peter Costanzo</h6>
                        <p class="mb-0 ms-auto">February 26, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-5.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">Peter Costanzo</h6>
                        <p class="mb-0 ms-auto">February 26, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-6.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">Peter Costanzo</h6>
                        <p class="mb-0 ms-auto">February 26, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex align-items-start">
                    <div class="review-user">
                      <img src="assets/images/avatars/avatar-7.png" width="65" height="65" class="rounded-circle" alt="">
                    </div>
                    <div class="review-content ms-3">
                      <div class="rates cursor-pointer fs-6">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <h6 class="mb-0">Peter Costanzo</h6>
                        <p class="mb-0 ms-auto">February 26, 2021</p>
                      </div>
                      <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                  </div>

                </div>

               </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-6 d-flex">
            <div class="card rounded-4 w-100">
              <div class="card-header bg-transparent">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Chat Box</h6>
                  <div class="fs-5 ms-auto dropdown">
                     <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></div>
                       <ul class="dropdown-menu">
                         <li><a class="dropdown-item" href="#">Action</a></li>
                         <li><a class="dropdown-item" href="#">Another action</a></li>
                         <li><hr class="dropdown-divider"></li>
                         <li><a class="dropdown-item" href="#">Something else here</a></li>
                       </ul>
                   </div>
                 </div>
              </div>
               <div class="card-body p-0">
                  <div class="chat-talk d-flex flex-column gap-4 p-3">
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3">
                         Hello , Codervent
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                         Hello , Codervent
                      </div>
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3">
                         Hello , Codervent
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                         Hello , Codervent
                      </div>
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3">
                         Hello , Codervent
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                         Hello , Codervent
                      </div>
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3">
                         Hello , Codervent
                      </div>
                     </div>
                     <div class="d-flex align-items-end gap-3">
                      <div class="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                         Hello , Codervent
                      </div>
                      <div class="chat-user">
                        <img src="assets/images/avatars/avatar-7.png" width="55" height="55" class="rounded-circle" alt="">
                      </div>
                     </div>
                  </div>
                  <div class="card-footer bg-transparent">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Type your message">
                      <button class="btn btn-primary" type="button"><i class="bi bi-send"></i></button>
                    </div>
                  </div>

               </div>
            </div>
          </div>

        </div>end row -->


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