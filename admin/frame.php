<?php
include '../layout/header.php';
error_reporting(0);
?>
<style>
  @media screen and (max-width:1000px) {
    .scroll-mb {
      display: flex;
      overflow: scroll;
      flex-wrap: nowrap;
    }
  }

  @media screen and (max-width:1000px) {
    .preview-img {
      width: 200px;
      margin: 15px 0;
    }
  }
</style>

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
      $time_length = strlen($time) + 1;
      $cat = substr($selectImg, $time_length);
      $newName = $time . "-" . $cat;
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
                        <div class="image-preview" align="center">
                          <img src="../assets/images/upload.png" class="preview-img" alt="" id="img">
                          <input type="hidden" name="fileAbc" class="input-file">
                          <input type="file" name="choosefile" value="" id="choosefile" style="display:none" />
                          <div style="margin-top: 10px"></div>
                          <label for="choosefile" class="btn btn-outline-primary px-5 radius-30 mb-2" style="margin-right: 5px">Chọn ảnh</label>
                          <button type="submit" name="uploadfile" class="btn btn-outline-success px-5 radius-30 mb-2" style="margin-right: 5px">
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
                        <img class="img-choice" src="../assets/images/frames/<?php $index = count($out_folder) - 1;;
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
        <h1 class="large fs-6 my-2 primary mb-3 " style="font-weight: bold">Khung ảnh có sẵn:</h1>
        <div class="row row-cols-2 row-cols-lg-5 g-lg-5 scroll-mb">
          <?php foreach ($out_folder as $key => $item) : ?>
            <div class="col col-img">
              <div class="card">
                <img src="../assets/images/frames/<?= $item ?>" name="img_abas" name_src="<?= $item ?>" class="image_abc card-img-top" alt="">
                <form action="" method="POST">
                  <input type="hidden" name="hiddenInput" value="<?= $item ?>">
                  <button type="submit" name="uploadfileImg" class="btn btn-outline-success px-3 radius-30 btn-hover">Áp dụng</button>
                </form>
                <button type="button" class="btn-close btn-close--update" data-bs-toggle="modal" data-bs-target="#exampleModal-<?= $key ?>"></button>
                <!-- Modal -->
                <form action="" method="post">
                  <div class="modal fade" id="exampleModal-<?= $key ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          Bạn muốn xóa khung ảnh này không?
                        </div>
                        <div class="modal-footer">
                          <input type="hidden" name="hiddenInput" value="<?= $item ?>">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                          <button type="submit" class="btn btn-primary" name="btn-xoa">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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


</div>
<?php include('../layout/footer.php') ?>