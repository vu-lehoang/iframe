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

    #form {
        width: 50%;
        margin: 20px auto;
    }

    #form div {
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

    .flex-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        cursor: pointer;
    }
</style>


<?php
// check if the user has clicked the button "UPLOAD" 
$filename = $_SESSION['file_img'];

if (isset($_POST['uploadfile'])) {

    $conMeo = $_POST['fileAbc'];

    if ($_POST['fileAbc'] != null) {
        $time = time();
        echo $time;
        $cat =  explode("-", $_POST['fileAbc']);
        $newName = $time . "-" . $cat[1];
        $old = "../img/frames/" . $_POST['fileAbc'];
        $new = "../img/frames/" . $newName;
        echo $new;

        rename($old, $new);
        // $filename = $conMeo;
    } else {
        $filename = $_FILES["choosefile"]['name'];
    }

    $time = time();
    // $_SESSION['choose_file'] =  $time . '-' . $_FILES["choosefile"]['name'];
    $tempname = $_FILES["choosefile"]["tmp_name"];

    $thumbnail = $_FILES['choosefile'];

    $thumbnail_name = $time . '-' .  $thumbnail['name'];
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
            $catchuoi = explode('-', $thumbnail_name);
            if (checkFolder("../img/frames/*", $catchuoi[1]))
                move_uploaded_file($thumbnail_tmp_name, $thumbanil_description_path);
            // header('location: ../index.php');

        } else {
            echo 'loi up load file';
        }
    } else {
        echo 'loi dinh dang anh';
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
?>

<?php $out1 = array();
foreach (glob('../img/frames/*') as $filename) {
    $p = pathinfo($filename);
    $out1[] = $p['basename'];
}



?>
<div id="wrapper">
    <form id="form" method="POST" action="" enctype="multipart/form-data">
        <input type="hidden" name="fileAbc" class="input-file">
        <input type="file" name="choosefile" value="" />
        <button type="submit" name="uploadfile">
            UPLOAD
        </button>
        <img src="../img/frames/<?php $indexOut1 = count($out1) - 1;
                                echo $out1[$indexOut1] ?  $out1[$indexOut1] : $out1[$indexOut1] ?>" alt="">
    </form>
    <a href="../index.php">Quay về trang chủ</a>


</div>


<?php foreach ($out1 as $key => $item) : ?>
    <div class="flexbox">
        <form action="" method="POST">
            <input type="hidden" name="hiddenInput" value="<?= $item ?>">
            <button type="submit" name="del_submit" class="del-btn">Delete</button>
        </form>
        <img src="../img/frames/<?= $item ?>" name="img_abas" name_src="<?= $item ?>" class="image_abc" alt="">
    </div>
<?php endforeach ?>
<?php
if (isset($_POST['del_submit'])) {
    $abvca = $_POST['hiddenInput'];
    echo $abvca;

    unlink("../img/frames/$abvca");
    header("location: ./");
} else {
}
?>
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
    /*
    const delEls = document.querySelectorAll(".del-btn");
    const imgBoxEl = document.querySelector(".flexbox");
    const srcImgEl = document.querySelector(".image_abc").getAttribute(src);
    delEls.forEach((delEl) => {
        if (srcImgEl != '') {
            delEl.addEventListener("click", (e) => {
                // e.preventDefault();
                console.log(delEl.parentNode.parentNode);
                delEl.parentNode.parentNode.remove();
            })
        }


    })
    */
</script>
<?php

?>

</html>