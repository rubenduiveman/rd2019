<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

include_once 'controllers/linkscontroller.php';

function init()
{
    http_response_code(400);
    $data = LinksController::get_links();
    success($data);
}

function success($data)
{
    http_response_code(200);
    echo json_encode($data);
}

init();
