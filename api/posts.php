<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

include_once 'controllers/postscontroller.php';

function init() {
    http_response_code(400);

    if(isset($_GET['id'])) {
        get_single($_GET['id']);
    } else if(isset($_GET['tag'])) {
        get_tag_summaries($_GET['tag']);
    } else {
        get_summaries();
    }
}

function get_single($id) {
    $data = PostsController::get_single($id);
    if($data !== null) {
        success($data);
    }
}

function get_tag_summaries($tag) {
    $data = PostsController::get_summaries($tag);
    if($data !== null) {
        success($data);
    }
}

function get_summaries() {
    $data = PostsController::get_summaries();
    success($data);
}

function success($data) {
    http_response_code(200);
    echo json_encode($data);
}

init();