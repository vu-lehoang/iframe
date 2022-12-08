<?php
require '../config/constant.php';
$module = _MODULE_DEFAULT;
$action = _ACTION_DEFAULT;

if (!empty($_GET['module'])) {
    if (is_string($_GET['module'])) {
        $module = trim($_GET['module']);
    }
}

if (!empty($_GET['action'])) {
    if (is_string($_GET['action'])) {
        $action = trim($_GET['action']);
    }
}
$path =  $module . '/' . $action . '.php';

if (file_exists($path)) {
    require_once $path;
} else {
    require_once 'errors/404.php';
}
