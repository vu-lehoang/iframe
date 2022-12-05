<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <script src="./assets/js/bundle.js"></script>

  <title>Công cụ tạo khung cho ảnh avatar</title>
  <meta name="description" content="Một công cụ đơn giản để tạo ảnh hồ sơ được đóng khung cho phương tiện truyền thông xã hội nhằm hỗ trợ một mục tiêu. Tự động tạo một trang web tĩnh dựa trên số lượng hình ảnh khung được cung cấp.">
  <link rel="icon" type="image/x-icon" href="./assets/images/logo.png">

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
</head>

<body class="bg-gray-500">

  <div class="min-h-screen bg-white">
    <nav class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img src="./assets/images/logo.png" class="h-12">
            </div>
          </div>
          <?php
          $out = array();
          foreach (glob('./assets/images/frames/*') as $filename) {
            $p = pathinfo($filename);
            $out[] = $p['basename'];
          }
          ?>

          <h1><?php
              $index = count($out) - 1;
              ?></h1>
          <h1 id="fileanh" style="display: none"><?php if (isset($out[$index])) echo $out[$index];
                                                  else echo $out[$index]; ?></h1>
          <div class="ml-auto flex-shrink-0 flex items-center">
            <a href="https://minhduy.vn">
              <span class="inline-flex items-center px-6 py-3 rounded-full text-base font-bold leading-5 bg-secondary text-white hover:bg-primary transition duration-300 ease-in-out">
                Minh Duy Solutions
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>

    <div class="py-32 text-primary">
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 py-8 sm:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <div>
                <div>
                  <h1 class="font-bold text-3xl leading-8">
                    CÔNG CỤ TẠO KHUNG AVATAR <br> JCI Khánh Hoà
                  </h1>

                  <ol class="instructions mt-10">
                    <li class="text-lg leading-5 font-medium">
                      Tải lên hình ảnh của bạn (để đẹp nhất nên dùng ảnh vuông)

                      <div id="upload" class="mt-4 p-6 w-full bg-gray-100 text-center rounded cursor-pointer hover:text-secondary hover:underline transition duration-500 ease-in-out">
                        <span id="upload-text">Kéo thả hoặc bấm để tải ảnh lên.</span>
                      </div>


                      <!-- <form action="/file-upload" class="dropzone" id="uploadImg"></form> -->
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12">
                      Sử dụng các công cụ ảnh để chia tỷ lệ, xoay và di chuyển hình ảnh của bạn qua bản xem trước.
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12">
                      Chọn khung.

                      <div class="mt-4 grid grid-cols-3 gap-4">


                        <img id="frame-1" class="object-contain w-full max-w-6 rounded-full border-2 border-gray-100 inline-block shadow-xl transition duration-300 ease-in-out cursor-pointer hover:border-primary" src="./img/frames/<?= ($out[$index]) ? $out[$index]   : $out[0];  ?>" alt="">
                        <!-- 
                        <img id="frame-2" class="object-contain w-full max-w-6 rounded-full border-2 border-gray-100 inline-block shadow-xl transition duration-300 ease-in-out cursor-pointer hover:border-primary" src="img/previews/preview-2.png" alt="">
                        <img id="frame-1" class="object-contain w-full max-w-6 rounded-full border-2 border-gray-100 inline-block shadow-xl transition duration-300 ease-in-out cursor-pointer hover:border-primary" src="img/previews/frame-1.png" alt="" style="display: none !important;">
                        <img id="frame-2" class="object-contain w-full max-w-6 rounded-full border-2 border-gray-100 inline-block shadow-xl transition duration-300 ease-in-out cursor-pointer hover:border-primary" src="img/previews/frame-2.png" alt="" style="display: none !important;"> -->
                      </div>
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12">
                      Tải xuống hình ảnh hồ sơ mới của bạn!

                      <button class="block max-w-56 mt-4 px-8 py-5 rounded bg-primary text-white text-sm font-bold text-center" id="download" disabled>
                        Download profile picture
                      </button>
                    </li>

                    <li class="text-lg leading-5 font-medium pt-12">
                      Đăng trên phương tiện truyền thông xã hội bằng cách sử dụng thẻ bắt đầu bằng #JCIKhanhHoa
                    </li>
                  </ol>
                </div>
              </div>

              <div class="mt-12 md:mt-0">
                <canvas id="c" style="border: 1px solid grey; "></canvas>

                <div class="controls w-full">
                  <div class="pt-6">
                    <label for="angle-control" class="text-lg font-medium leading-5">Rotation:</label>
                    <input type="range" id="angle-control" value="0" min="0" max="360" class="w-full" disabled>
                  </div>
                  <div class="pt-6">
                    <label for="scale-control" class="text-lg font-medium leading-5">Scale:</label>
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

  <footer class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="md:grid md:grid-cols-2 md:gap-8">

        <div class="space-y-8 md:col-span-1">
          <div class="px-4 sm:px-16 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
                Menu
              </h4>
              <ul class="mt-4 space-y-4">


                <li>
                  <a href="https://www.jcikhanhhoa.org/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    JCI Khánh Hoà
                  </a>
                </li>

                <li>
                  <a href="https://jci.vn/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    JCI Việt Nam
                  </a>
                </li>

                <li>
                  <a href="https://minhduy.vn/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Minh Duy Solutions
                  </a>
                </li>


              </ul>
            </div>
          </div>

        </div>
        <div class="mt-12 px-4 sm:px-16 md:text-right">
          <img src="./assets/images/logo.png" class="h-16 md:float-right">
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base leading-6 text-gray-400 xl:text-center">
          &copy; 2022 Minh Duy Solutions. All rights reserved.
        </p>
      </div>
      <h1 class="hihi"></h1>
    </div>
  </footer>
  <script>
    const idAnh = document.querySelector("#fileanh").textContent.toString();
    console.log(idAnh);
  </script>


</body>

</html>