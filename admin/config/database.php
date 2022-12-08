<?php
require('constant.php');

// connect to the database
$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if (mysqli_errno($connection)) {
    die(mysqli_error($connection));
} else {
    if (_DEBUG) {
        require_once './admin/errors/database.php';
        die();
    }
}
