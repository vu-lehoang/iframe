
<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- Required meta tags -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <title>Công Cụ Tạo Mockup Đa Thiết Bị</title>
    
    <meta name="Description" content="Công cụ tạo mockup trang web đa thiết bị để kiểm tra sự tương thích của website trên các thiết bị apple bao gồm Apple iMac, MacBook, iPad và iPhone">
    <meta name="Keywords" content="website, responsive, mockup, device, theme, template, apple, perspective">
	<meta property="og:image" content="" href="">
    <!-- <link rel="icon" type="image/x-icon" href="./image/logo_favicon.png"> -->
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="./assets/js/mockup/jquery/jquery.min.js"></script>
    
    
    <script src="./assets/js/mockup/jquery/jqueryUI.js"></script>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <!-- <link rel="stylesheet" href="./assets/js/mockup/boostrap/boostrap.css"> -->
    <link rel="stylesheet" href="./assets/css/mockup/style.css">
    <link rel="stylesheet" href="./assets/css/mockup/animate.css">
    <link rel="stylesheet" href="./assets/css/mockup/font-awesome.css">

    <!--switchery-->
    <link rel="stylesheet" href="./assets/css/mockup/switchchery.css" />
    <script src="./assets/js/mockup/js/switchery.js"></script>

    <!--spectrum-->
    <link rel="stylesheet" href="./assets/css/mockup/spectrum.css" />
    <script src="./assets/js/mockup/js/spectrum.js"></script>

    <!--jquery transit-->
    <script type="text/javascript" src="./assets/js/mockup/js/transit.js"></script>

    <!--jquery transform-->
    <script type="text/javascript" src="./assets/js/mockup/js/transform2d.js"></script>

    <!--Custom JS-->
    <script type="text/javascript" src="./assets/js/mockup/js/custom.js"></script>

</head>
<body>


    <!--<div class="check-our-blog animated ">
        <a title="Close" class="close-popup"></a>
        <p>Checkout our Blog for <br>
            <a href="https://namlee.net">More Free Stuff!</a></p>
        </div>-->

        <?php include("./modules/view/header.php")?>
  <script src="./assets/js/menu.js"></script>

        <div class="container-fluid">
            <div class="row">

                <div class="col-md-4 website-title">

                    <!-- <img class="app-logo" src="./assets/images/logo_favicon.png" width="70" height="70"alt=""> -->
                    <h2>Công cụ tạo mockup đa thiết bị<br> Minh Duy Solutions</h2>

                </div>
                <div class="col-md-8 website-input">

                        <form class="form-inline justify-content-center flex" method="get">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="url" class="form-control" name="url" id="url" placeholder="https://www.example.com"

                                    value=""

                                    required>
                                </div>
                            </div>
                            <button type="submit" class="btn custom-btn">Tạo Mockup</button>
                        </form>


                </div>
            </div>
        </div>


        <div class="mockup-settings">


                &emsp;
                <label>Màu nền </label>
                <input type='text' id="customcolorpicker" />
                &emsp;
                <label for="imac">iMac </label>
                <input type="checkbox" name="imac" class="js-switch" checked />
                &emsp;
                <label for="mac">MacBook</label>
                <input type="checkbox" name="mac" class="js-switch" checked />
                &emsp;
                <label for="ipad">iPad </label>
                <input type="checkbox" name="ipad" class="js-switch" checked />
                &emsp;
                <label for="iphone">iPhone </label>
                <input type="checkbox" name="iphone" class="js-switch" checked />
                &emsp;
                <label>iPhone Fullscreen </label>
                <input type="checkbox" name="iphonefullscreen" class="js-switch" />
                &emsp;
                <label>Ảnh lớn</label>
                <input type="checkbox" name="largermockups" class="js-switch" />
                &emsp;
                <!--<div class="tourstep" style="display: inline;">
                    &nbsp;
                </div>-->

                <!-- View angle -->
                <div class="btn-group">
                  <button type="button" class="btn dropdown-toggle view-angle-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Góc nhìn
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item mockup-left-perspective">Từ góc nhìn bên trái</a>
                    <a class="dropdown-item mockup-right-perspective">Từ góc nhìn bên phải</a>
                    <a class="dropdown-item mockup-front-perspective">Từ góc nhìn phía trước</a>
                  </div>
                </div>


                &emsp;
                <button type="button" class="btn btn-success take-screenshot-btn" data-toggle="modal" data-target="#howToTakeScreenShotModal">Chụp màn hình</button>

                <a href="https://minhduy.vn/lien-he"><button type="button" class="btn btn-warning pull-right"> Liên hệ</button></a>
        </div>


        <!-- Ad start -->

        <!-- Ad end -->

    <div class="mockup-tips">
        <a title="Close" class="close-tips"></a>
        <h3>Lời khuyên</h3>
        <ul>
            <!--<li>You can change the background color</li>-->
            <li>Bạn có thể kéo thiết bị mockup và đặt <br>nó ở nơi bạn muốn.</li>
            <li>Bạn có thể ẩn thiết bị mockup.</li>
        </ul>
    </div>

    <div class="mockup-wrapper">
        <div class="inner-wrapper">
        <div class="desktop-wrapper">

            <div class="desktop-inner">

                <iframe id="frame"  src="https://nhathuoc.minhduy.net/" width="600" height="342"></iframe>\n
            </div>
        </div>

        <div class="mac-wrapper">

            <div class="mac-inner">

                <iframe id="frame_mac" src="https://nhathuoc.minhduy.net/" width="600" height="342"></iframe>\n
            </div>
        </div>


        <div class="ipad-wrapper">
            <div class="ipad-inner">

                <iframe id="frame_ipad" src="https://nhathuoc.minhduy.net/" width="200" height="260"></iframe>\n
            </div>
        </div>

        <div class="iphone-wrapper">

            <div class="iphone-notch">
            </div>
            <div class="iphone-inner">

                <iframe id="frame_iphone5" src="https://nhathuoc.minhduy.net/" width="105" height="181"></iframe>\n
            </div>
        </div>


        </div>


    </div>





        <!-- Ad start -->

        <!-- Ad end -->

        <div class="description-wrapper">
            <div class="container">
                <div class="description">

                    <h2 class="text-center h2">Công cụ tạo mockup đa thiết bị là gì?</h2>
                    <p><strong>Công cụ tạo mockup đa thiết bị</strong> là một công cụ trực tuyến miễn phí để kiểm tra sự tương thích của <strong>website</strong> trên các thiết bị apple bao gồm <strong>Apple iMac, MacBook, iPad và iPhone</strong>. Công cụ này rất hữu ích cho các nhà phát triển giao diện để mô phỏng mẫu web trên các thiết bị Apple khác nhau chỉ bằng một cú nhấp chuột.</p>

                    <br>

                    <div class="text-left">
                        <h3 class="h3" style="text-align: left;">Làm thế nào để sử dụng công cụ tạo mockup đa thiết bị?</h3>

                        <p style="text-align: left;" class="py-3">Có hai cách để tạo mockup trang web của bạn bằng công cụ tạo mockup đa thiết bị</p>

                        <ul style="text-align:left">
                            <li>Chỉ cần nhập URL trang web của bạn vào khung nhập và nhấp vào nút "Tạo Mockup"</li>
                            <li>Bạn có thể dùng phím “PrtScr” để chụp ảnh màn hình khi mockup của bạn được tạo.</li>
                        </ul>

                        <br>

                        <h3 class="h3" style="text-align: left;">Các tính năng của công cụ tạo mockup đa thiết bị</h3>

                        <ul style="text-align:left">
                            <li>Mockup trang web của bạn trên Apple iMac, MacBook, iPad và iPhone</li>
                            <li>Bạn có thể di chuyển các mockup và đặt chúng ở nơi bạn muốn</li>
                            <li>Góc nhìn của mockup có thể được thay đổi</li>
                            <li>Bạn có thể ẩn các thiết bị mockup</li>
                            <li>Bạn có thể phóng to các thiết bị mockup</li>
                            <li>Thay đổi màu nền</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>



        <!-- Modal -->
        <div class="modal fade" id="howToTakeScreenShotModal" tabindex="-1" role="dialog" aria-labelledby="howToTakeScreenShotModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="howToTakeScreenShotModalTitle">Làm thế nào để chụp ảnh màn hình?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul>
                    <li>Đối với MacBook: sử dụng tổ hợp phím Shift-Command-3 hoặc Shift-Command-5</li>
                    <li>Đối với Windows: sử dụng phím PrtScr sau đó dán vào Paint</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>


        <?php include("./modules/view/footer.php")?>

        <script type="text/javascript">
        $(document).ready(function() {

            $(".check-our-blog").delay(8000).fadeIn("slow", function(){
                $(this).addClass("swing");
            });

            $(".close-popup").bind("click", function() {
                $(".check-our-blog").addClass("hinge");
                setTimeout(function() {
                    $(".check-our-blog").fadeOut("slow", function() {
                        $(this).css({
                            "display": "none"
                        });
                    })
                }, 2000);
            });

            $(".close-tips").bind("click", function() {
                $(".mockup-tips").addClass("animated fadeOutRight");
                console.log("Working");
                setTimeout(function() {
                    $(".mockup-tips").fadeOut("slow", function() {
                        $(this).css({
                            "display": "none"
                        });
                    })
                }, 1000);
            });



            
        });
        </script>

        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="./assets/js/mockup/boostrap/bundle.js"></script>
        <script src="./assets/js/mockup/js/handleMockup.js"></script>

    </body>
    </html>
