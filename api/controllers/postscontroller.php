<?php
include_once 'controllers/genericcontroller.php';

class PostsController
{
    public static function get_single($post_id)
    {
        return GenericController::get_single("posts/*.md", $post_id);
    }

    public static function get_summaries($tag = null)
    {
        return GenericController::get_summaries("posts/*.md", $tag);
    }
}

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});
