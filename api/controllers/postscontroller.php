<?php
include_once 'logic/Parser.php';

class PostsController
{
    public static function get_single($post_id)
    {
        try {
            $posts = PostsController::get_parsed_posts();

            if (!isset($posts[$post_id])) {
                echo "post with id " . $post_id . " not found";
                die();
            }

            include_once 'models/Post.php';

            $meta = PostsController::get_post_meta($posts[$post_id], $post_id);

            $post = new Post();
            $post->id = $post_id;
            $post->title = $meta['title'];
            $post->content = htmlspecialchars($posts[$post_id]->getContent());
            $post->url = $meta['url'];
            $post->date = $meta['date'];

            return $post;
        } catch (Exception $e) {
            echo 'Caught exception: ', $e->getMessage();
            die();
        }
    }

    public static function get_summaries($tag = null)
    {
        $posts = PostsController::get_parsed_posts();

        $metadatas = array();
        foreach ($posts as $key => $post) {
            $metadatas[] = PostsController::get_post_meta($post, $key);
        }

        if ($tag != null) {
            // array_filter() preserves keys, so use array_values
            $metadatas = array_values(array_filter($metadatas, function($meta) use ($tag) {
                return in_array($tag, $meta['tags']);
            }));
        }

        return $metadatas;
    }

    // -- Helpers

    private static function get_post_meta($post, $id)
    {
        $self = str_replace("/index.php", "", $_SERVER['PHP_SELF']);
        
        $meta = $post->getYAML();
        $meta['url'] = 'http://'.$_SERVER['HTTP_HOST'].$self.'?id='.$id;
        $meta['id'] = $id;
        return $meta;
    }

    private static function get_parsed_posts()
    {

        $file_paths = PostsController::get_posts_paths();
        $parser = new Parser();

        $parsed_files = array();
        foreach ($file_paths as $file_path) {
            $parsed_files[] = PostsController::parse_file($parser, $file_path);
        }

        usort($parsed_files, "PostsController::sortByYAMLDate");

        return $parsed_files;
    }

    private static function sortByYAMLDate($a, $b)
    {
        $atime = strtotime($a->getYAML()['date']);
        $btime = strtotime($b->getYAML()['date']);

        if ($atime == $btime) {
            return 0;
        }

        return ($atime < $btime) ? -1 : 1;
    }

    private static function parse_file($parser, $file_path)
    {
        $data = file_get_contents($file_path);
        return $parser->parse($data);
    }

    private static function get_posts_paths()
    {
        $file_paths = array();
        foreach (glob("posts/*.md") as $filename) {
            $file_paths[] = $filename;
        }

        return $file_paths;
    }

    private static function filter_by_value ($array, $index, $value){ 
        if(is_array($array) && count($array)>0)  
        { 
            foreach(array_keys($array) as $key){ 
                $temp[$key] = $array[$key][$index]; 
                 
                if ($temp[$key] == $value){ 
                    $newarray[$key] = $array[$key]; 
                } 
            } 
          } 
      return $newarray; 
    } 

    private static function array_contains($array, $value) {
        $result = array();
        foreach(array_values($array) as $val) {
            $result[] = $val;
        }
    }
}

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});