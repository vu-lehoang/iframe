<?php
session_start();
require '../config/database.php';

if (isset($_POST['submit'])) {
    //get form data
    $username_email = filter_var($_POST['username_email'], FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_SPECIAL_CHARS);
    if (!$username_email) {
        $_SESSION['signin'] = "Username or Email required";
    } elseif (!$password) {
        $_SESSION['signin'] = "Password required";
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
            if (password_verify($password, $db_password)) {
                $_SESSION['sigin-succes'] = 'login thành công';
                header('location: ' . ROOT_URL_ADMIN . 'manage-tool/frame.php');
            } else {
                $_SESSION['signin'] = "Please check your input";
            }
        } else {
            $_SESSION['signin'] = "User not found";
        }
    }

    // if any problem, redirect back to signin page with login data
    if (isset($_SESSION['signin'])) {
        $_SESSION['signin-data'] = $_POST;
        header('location: ' . ROOT_URL_ADMIN . 'signin.php');
        die();
    }
} else {
    header('location: ' . ROOT_URL_ADMIN . 'signin.php');
    die();
}
