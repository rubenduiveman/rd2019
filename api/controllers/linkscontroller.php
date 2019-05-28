<?php

class LinksController
{
    public static function get_links()
    {
        try {
            include_once 'logic/Parsedown.php';
            include_once 'models/Link.php';
        } catch (Exception $e) {
            echo 'Could not include. Message: ' . $e->getMessage();
            die();
        }
        try {
            $raw = file_get_contents("links.json");
        } catch (Exception $e) {
            echo 'Could not get file. Message: ' . $e->getMessage();
            die();
        }

        try {
            $decoded = json_decode($raw, true);
        } catch (Exception $e) {
            echo 'Could not decode file. Message: ' . $e->getMessage();
            die();
        }

        try {
            $parser = new Parsedown();

            $parsed = array();
            foreach ($decoded as $key => $data) {
                $link = new Link();

                $link->title = $data['title'];
                $link->url = $data['url'];
                $link->date = $data['date'];
                $link->description = $parser->text($data['description']);

                $parsed[] = $link;
            }
        } catch (Exception $e) {
            echo 'Could not parse decoded file';
            die();
        }

        return $parsed;
    }
}
