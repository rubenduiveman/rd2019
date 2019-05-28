<?php

class Post
{
    /**
     * @var int
     */
    public $id;
    /**
     * @var string
     */
    public $title;
    /**
     * @var string
     */
    public $url;
    /**
     * @var string
     */
    public $date;
    /**
     * @var mixed
     */
    public $tags;

    /**
     * @var string
     */
    public $content;

    public $summary;

    public function __construct()
    { }
}
