<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

include_once 'controllers/casestudiescontroller.php';

function init()
{
    http_response_code(400);

    if (isset($_GET['id'])) {
        get_single($_GET['id']);
    } else if (isset($_GET['tag'])) {
        get_tag_summaries($_GET['tag']);
    } else {
        get_summaries();
    }
}

function get_single($id)
{
    $data = CaseStudiesController::get_single($id);
    success($data);
}

function get_tag_summaries($tag)
{
    $data = CaseStudiesController::get_summaries($tag);
    success($data);
}

function get_summaries()
{
    $data = CaseStudiesController::get_summaries();
    success($data);
}

function success($data)
{
    if ($data !== null) {
        http_response_code(200);
        echo json_encode($data);
    }
}

init();
