<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <script src="./assets/js/bundle.js"></script>

  <title>Công cụ tạo khung cho ảnh avatar</title>
  <meta name="description" content="Một công cụ đơn giản để tạo ảnh hồ sơ được đóng khung cho phương tiện truyền thông xã hội nhằm hỗ trợ một mục tiêu. Tự động tạo một trang web tĩnh dựa trên số lượng hình ảnh khung được cung cấp.">
  <link rel="icon" type="image/x-icon" href="./assets/images/logo_favicon.png">

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Công cụ tạo khung avatar - JCI Khánh Hoà" />
  <meta property="og:description" content="Công cụ tạo khung avatar - JCI Khánh Hoà" />
  <meta property="og:url" content="" />
  <meta property="og:image" content="./images/og-image.png" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />
  <meta name="twitter:card" content="Công cụ tạo khung avatar - JCI Khánh Hoà" />
  <meta name="twitter:description" content="Công cụ tạo khung avatar - JCI Khánh Hoà" />
  <meta name="twitter:image" content="./images/" />
  <meta name="twitter:site" content="" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="./assets/css/main.css">
</head>

<body class="bg-gray-500">
<?php
          $out = array();
          foreach (glob('./assets/images/frames/*') as $filename) {
            $p = pathinfo($filename);
            $out[] = $p['basename'];
          }
          ?>
          <?php
              $index = count($out) - 1;
              ?>
          <h1 id="fileanh" style="display: none"><?php if (isset($out[$index])) echo $out[$index];
                                                  else echo $out[$index]; ?></h1>
  <div class="bg-white">
    <?php include("./modules/view/header.php")?>

    <div class="py-5 text-primary">
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <div>
                <div>
                  <h1 class="font-bold text-3xl leading-8 text-dark">
                    CÔNG CỤ TẠO KHUNG AVATAR <br> JCI Khánh Hoà
                  </h1>

                  <ol class="instructions mt-10">
                    <li class="text-lg leading-5 font-medium text-dark">
                      Tải lên hình ảnh của bạn (để đẹp nhất nên dùng ảnh vuông)

                      <div id="upload" class="mt-4 p-6 w-full bg-gray-100 text-center rounded cursor-pointer hover:text-secondary hover:underline transition duration-500 ease-in-out">
                        <span id="upload-text" class="text-dark">Kéo thả hoặc bấm để tải ảnh lên.</span>
                      </div>


                      <!-- <form action="/file-upload" class="dropzone" id="uploadImg"></form> -->
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12 text-dark">
                      Sử dụng các công cụ ảnh để chia tỷ lệ, xoay và di chuyển hình ảnh của bạn qua bản xem trước.
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12 text-dark">
                      Chọn khung.

                      <div class="mt-4 grid grid-cols-3 gap-4">
                        <img id="frame-1" class="object-contain w-full max-w-6 rounded-full border-2 border-gray-100 inline-block shadow-xl transition duration-300 ease-in-out cursor-pointer hover:border-primary" src="./assets/images/frames/<?= ($out[$index]) ? $out[$index]   : $out[0];  ?>" alt="">
                      </div>
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12 text-dark">
                      Tải xuống hình ảnh hồ sơ mới của bạn!

                      <button class="block max-w-56 mt-4 px-8 py-4 rounded bg-primary text-white text-sm font-bold text-center text-dark" id="download" disabled>
                        Download profile picture
                      </button>
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12 text-dark">
                      Đăng trên phương tiện truyền thông xã hội bằng cách sử dụng thẻ bắt đầu bằng #JCIKhanhHoa
                    </li>
                  </ol>
                </div>
              </div>

              <div class="mt-12 md:mt-0">
                <canvas id="c" style="border: 1px solid grey; "></canvas>

                <div class="controls w-full">
                  <div class="pt-6">
                    <label for="angle-control" class="text-lg font-medium leading-5 text-dark">Rotation:</label>
                    <input type="range" id="angle-control" value="0" min="0" max="360" class="w-full" disabled>
                  </div>
                  <div class="pt-6">
                    <label for="scale-control" class="text-lg font-medium leading-5 text-dark">Scale:</label>
                    <input type="range" id="scale-control" value="50" min="1" max="100" class="w-full" disabled>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <?php include("./modules/view/footer.php")?>
  <script>
    const idAnh = document.querySelector("#fileanh").textContent.toString();
    console.log(idAnh);
  </script>
   <script src="../assets/js/bootstrap.bundle.min.js"></script>

</body>

</html>