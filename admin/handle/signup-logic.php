<?php
session_start();
require '../config/database.php';

// lấy ra dữ liệu nếu có click vào
if (isset($_POST['submit'])) {
    $firstName = filter_var($_POST['firstname'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $lastName = filter_var($_POST['lastname'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $userName = filter_var($_POST['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $createPassword = filter_var($_POST['createpassword'], FILTER_SANITIZE_SPECIAL_CHARS);
    $confirmPassword = filter_var($_POST['confirmpassword'], FILTER_SANITIZE_SPECIAL_CHARS);


    // Validate input values
    if (!$firstName) {
        $_SESSION['signup'] = 'Vui lòng nhập tên';
    } elseif (!$lastName) {
        $_SESSION['signup'] = 'Vui lòng nhập họ và tên đệm';
    } elseif (!$userName) {
        $_SESSION['signup'] = 'Vui lòng nhập tên tài khoản';
    } elseif (!$email) {
        $_SESSION['signup'] = 'Địa chỉ Email không hợp lệ';
    } elseif (strlen($createPassword) < 8 || strlen($confirmPassword) < 8) {
        $_SESSION['signup'] = 'Mật khẩu quá ngắn. Vui lòng nhập nhiều hơn 8 ký tự';
    } elseif (!$confirmPassword) {
        $_SESSION['signup'] = 'Vui lòng nhập lại mật khẩu';
    } else {
        // Kiểm tra mật khẩu nhập lại có chính xác
        if ($createPassword !== $confirmPassword) {
            $_SESSION['signup'] = "Mật khẩu không trùng nhau";
        } else {
            // Nếu mật khẩu chính xác, xử lý mã hóa mật khẩu
            $hased_password = password_hash($createPassword, PASSWORD_DEFAULT);
            // kiểm tra username hoặc email có tồn tại trong database 
            // check if usernam or email already exist in database
            $user_check_query = "SELECT * FROM users WHERE user_name ='$userName' OR email = '$email' ";
            $user_check_result = mysqli_query($connection, $user_check_query);
            if (mysqli_num_rows($user_check_result) > 0) {
                $_SESSION['signup'] = "Tên tài khoản hoặc Email đã tồn tại";
            }
        }
    }
    // redirect back to signup page if there was any proble
    if (isset($_SESSION['signup'])) {
        // pass form data back to signup page
        $_SESSION['signup-data'] = $_POST;
        header('location: ' . ROOT_URL_ADMIN . 'signup.php');
        die();
    } else {
        // insert new user into users table database
        $inser_user_query = "INSERT INTO users (firstname,user_name, email, password) VALUES ('$userName', '$email', '$hased_password')";
        $insert_user_result = mysqli_query($connection, $inser_user_query);

        if (!mysqli_errno($connection)) {
            // redirect to login page with success message
            $_SESSION['signup-success'] = 'Đăng ký tài khoản thành công. Đăng nhập ngay!';
            header('location: ' . ROOT_URL_ADMIN . 'signin.php');
            die();
            echo 'insert thành công';
        }
    }
} else {
    // nếu không click thì tự động quay lại trang đăng nhập
    header('location: ' . ROOT_URL_ADMIN . 'signup.php');
    die();
}
