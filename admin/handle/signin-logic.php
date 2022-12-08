<?php
session_start();
require '../config/database.php';

if (isset($_POST['submit'])) {
    //get form data
    $username_email = filter_var($_POST['username_email'], FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$username_email) {
        $_SESSION['signin'] = "Vui lòng nhập thông tin";
    } elseif (!$password) {
        $_SESSION['signin'] = "Vui lòng nhập mật khẩu";
    } else {
        // fecth user from database
        $fetch_user_query = "SELECT * FROM users WHERE user_name = '$username_email' OR email ='$username_email' ";
        $fecth_user_result = mysqli_query($connection, $fetch_user_query);

        if (mysqli_num_rows($fecth_user_result) == 1) {
            // convert the record into assoc array
            // $user_record = mysqli_fetch_assoc($fecth_user_result);
            $user_record = mysqli_fetch_assoc($fecth_user_result);
            $db_password = $user_record['password'];
            // compare form password with database
            // if (password_verify($password, $db_password)) {
            if (($password == $db_password)) {
                //set session for access control
                // $_SESSION['user-id'] = $user_record['id'];
                // set session if user is an admin
                // if ($user_record['is_admin'] == 1) {
                //     $_SESSION['user_is_admin'] = true;
                // }
                //log user in
                // header('location ' . ROOT_URL . 'admin/');

                $_SESSION['sigin-succes'] = 'login thành công';
                echo $_SESSION['sigin-succes'];
                header('location: ' . ROOT_URL_ADMIN . 'frame.php');
            } else {
                $_SESSION['signin'] = "Sai mật khẩu, vui lòng nhập lại!";
            }
        } else {
            $_SESSION['signin'] = "Người dùng không tồn tại";
        }
    }

    // if any problem, redirect back to signin page with login data
    if (isset($_SESSION['signin'])) {
        $_SESSION['signin-data'] = $_POST;
        echo 'loi o day 1';
        header('location: ' . ROOT_URL_ADMIN . 'index.php');
        die();
    }
} else {

    echo $_SESSION['sigin-succes'];
    // header('location: ' . ROOT_URL_ADMIN . 'signin.php');
    // die();
}
