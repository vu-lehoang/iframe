<?php

session_start();
error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #wrapper {
        width: 50%;
        margin: 20px auto;
    }

    form {
        width: 50%;
        margin: 20px auto;
    }

    form div {
        display: flex;
        margin-top: 5px;
    }

    img {
        float: left;
        margin: 5px;
        width: 280px;
        height: 120px;
    }

    #img_div {
        width: 70%;
        padding: 5px;
        margin: 15px auto;
        border: 1px solid #dad7d7;
    }

    #img_div:after {
        content: "";
        display: block;
        clear: both;
    }

    img.image_abc {
        cursor: pointer;
    }
</style>


<?php



// check if the user has clicked the button "UPLOAD" 
$filename = $_SESSION['file_img'];


if (isset($_POST['uploadfile'])) {
    // $filename = $_FILES["choosefile"]["name"];


    $conMeo = $_POST['fileAbc'];
    if ($_POST['fileAbc'] != null) {
        $filename = $conMeo;
    } else {
        $filename = $_FILES["choosefile"]['name'];
    }


    $tempname = $_FILES["choosefile"]["tmp_name"];

    $thumbnail = $_FILES['choosefile'];

    $thumbnail_name = $thumbnail['name'];
    $thumbnail_tmp_name = $thumbnail['tmp_name'];
    $thumbanil_description_path = '../img/frames/' . $thumbnail_name;
    // make sure file is an image
    $allowed_files = ['png', 'jpg', 'jpeg'];
    // Tách chuỗi sang mảng
    $extension = explode('.', $thumbnail_name);
    // lấy ra giá trị của cùng trong mảng
    $extension = end($extension);
    if (in_array($extension, $allowed_files)) {
        if ($thumbnail['size'] < 20000000) {
            // upload thumbnail
            move_uploaded_file($thumbnail_tmp_name, $thumbanil_description_path);
        } else {
            echo 'loi up load file';
        }
    } else {
        echo 'loi dinh dang anh';
    }
}


if ($filename != null) {
    $_SESSION['file_img'] = $filename;
} else {
    $_SESSION['file_img'] = 'frame-1.png';
}
// unlink()

?>
<div id="wrapper">

    <form method="POST" action="" enctype="multipart/form-data">
        <input type="hidden" name="fileAbc" class="input-file">
        <input type="file" name="choosefile" value="" />
        <button type="submit" name="uploadfile">
            UPLOAD
        </button>
        <img src="../img/frames/<?= $filename ?  $filename : 'frame-1.png' ?>" alt="">
    </form>
    <a href="/iframe/index.php">Quay về trang chủ</a>
    <?php
    $out = array();
    foreach (glob('../img/frames/*') as $filename) {
        $p = pathinfo($filename);

        $out[] = $p['basename'];
    }


    ?>

    <?php foreach ($out as $item) : ?>
        <img src="../img/frames/<?= $item ?>" name="<?= $item ?>" class="image_abc" alt="">
    <?php endforeach ?>
</div>
</body>
<script>
    const imgAba = document.querySelectorAll('img.image_abc');
    imgAba.forEach((item) => {
        item.addEventListener("click", () => {
            let attItem = item.getAttribute('name');
            const input = document.querySelector(".input-file");
            input.value = attItem;
            console.log(input.value);
            console.log(attItem);
        })
    })
</script>
<?php

?>

</html>