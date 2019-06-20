<?php
include_once 'controllers/genericcontroller.php';

class CaseStudiesController
{
    public static function get_single($post_id)
    {
        return GenericController::get_single("casestudies/*.md", $post_id);
    }

    public static function get_summaries($tag = null)
    {
        return GenericController::get_summaries("casestudies/*.md", $tag);
    }
}

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});
