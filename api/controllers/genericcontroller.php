<?php
include_once 'logic/Parser.php';

class GenericController
{
    public static function get_single($globpath, $post_id)
    {
        $posts = GenericController::get_posts_meta($globpath, true, null, $post_id);

        if (!isset($posts[$post_id])) {
            echo "post with id '" . $post_id . "' not found";
            die();
        }

        return $posts[$post_id];
    }

    public static function get_summaries($globpath, $tag = null)
    {
        return array_values(GenericController::get_posts_meta($globpath, false, $tag));
    }

    // -- Helpers

    private static function get_posts_meta($globpath, $include_content = false, $tag = null, $post_id = null)
    {
        $posts = GenericController::get_parsed_posts($globpath);

        $metadatas = array();
        foreach ($posts as $key => $post) {
            $metadata = GenericController::get_post_meta($post);
            $date = $metadata['date'];

            if ($post_id != null && $metadata['id'] != $post_id) {
                continue;
            }

            if ($include_content) {
                $metadata['content'] = htmlspecialchars($post->getContent());
            }

            // only allow posts that have a date
            if ($date) {
                $metadatas[$date] = $metadata;
            }
        }

        if ($tag != null) {
            // array_filter() preserves keys, so use array_values
            $metadatas = array_values(array_filter($metadatas, function ($meta) use ($tag) {
                return in_array($tag, $meta['tags']);
            }));
        }

        return $metadatas;
    }

    private static function get_post_meta($post)
    {
        $self = str_replace("/index.php", "", $_SERVER['PHP_SELF']);

        $meta = $post->getYAML();
        $meta['url'] = 'http://' . $_SERVER['HTTP_HOST'] . $self . '?id=' . $meta['date'];
        $meta['id'] = $meta['date'];
        return $meta;
    }

    private static function get_parsed_posts($globpath)
    {

        $file_paths = GenericController::get_posts_paths($globpath);
        $parser = new Parser();

        $parsed_files = array();
        foreach ($file_paths as $file_path) {
            $parsed_files[] = GenericController::parse_file($parser, $file_path);
        }

        usort($parsed_files, "GenericController::sortByYAMLDate");

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

    private static function get_posts_paths($globpath)
    {
        $file_paths = array();
        foreach (glob($globpath) as $filename) {
            $file_paths[] = $filename;
        }

        return $file_paths;
    }

    private static function filter_by_value($array, $index, $value)
    {
        if (is_array($array) && count($array) > 0) {
            foreach (array_keys($array) as $key) {
                $temp[$key] = $array[$key][$index];

                if ($temp[$key] == $value) {
                    $newarray[$key] = $array[$key];
                }
            }
        }
        return $newarray;
    }

    private static function array_contains($array, $value)
    {
        $result = array();
        foreach (array_values($array) as $val) {
            $result[] = $val;
        }
    }
}

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});
