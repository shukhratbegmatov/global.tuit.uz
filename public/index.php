<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;
define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists(__DIR__.'/../storage/framework/maintenance.php')) {
    require __DIR__.'/../storage/framework/maintenance.php';
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = tap($kernel->handle(
    $request = Request::capture()
))->send();

$kernel->terminate($request, $response);
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
 <head>
        <title>TUIT UNIVERSITY</title>
        <meta charset="utf-8" />
        <link rel="icon" href="logo.png">
        <meta property="og:description" content="University that sets new standards for higher education" />
        <meta name="description" content="University that sets new standards for higher education" />
        <meta name="keywords" content="Kookmin university, Partnership, Pragmatism, Foreign student" />
        <meta property="og:site_name" content="Kookmin University" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kookmin University" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="common/stylesheet/swiper.min.css" />
        <link rel="stylesheet" type="text/css" href="common/stylesheet/base.css" />
        <link rel="stylesheet" type="text/css" href="common/stylesheet/layout.css" />
        <link rel="stylesheet" type="text/css" href="common/stylesheet/main.css" />
        <link rel="stylesheet" type="text/css" href="common/stylesheet/font.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap5/css/bootstrap.css" />
        <script src="common/js/jquery-1.12.0.min.js"></script>
        <script src="ajax/libs/jqueryui/1-11-4/jquery-ui.min.js"></script>
        <script type='text/javascript' src='js/jquery-ui-1-8-13/wfile_subdomain/jquery-ui-1.8.13.custom.min.js'></script>
        <script type='text/javascript' src='js/wfile_subdomain/jquery.cookie.js'></script>
        <script type='text/javascript' src='js/wfile_subdomain/jquery.dimscreen.js'></script>
        <script type='text/javascript' src='js/popup/wfile_subdomain/check-1.1.js'></script>
        <script src="js/greensock-businessgreen-js/wfile_subdomain/tweenmax.min.js"></script>
        <script src="modules/scheduler/wfile_subdomain/scheduler.js"></script>
        <script src="common/js/jquery.browser.min.js"></script>
        <script src="common/js/navigation.js"></script>
        <script src="common/js/swiper.jquery.min.js"></script>
        <script src="common/js/home.js"></script>
        <script src="iframe_api.js"></script>
        <style>
            .navbar-brand {
                width: 56px;
                height: 55px;
                border-radius: 50%;
            }
            
            .about-img,
            .m-about-img {
                width: 100%;
                height: 100%;
            }
            .container-about{
                margin-top: 300px;
            }
        </style>
    </head>
    <body>
        
    </body>
</html>
