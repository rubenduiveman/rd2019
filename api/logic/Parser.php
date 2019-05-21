<?php

require_once 'Parsedown.php';
require_once 'Spyc.php';

class Parser {
    private $startSep;
    private $endSep;
    private $parsedown;

    public function __construct(
        $startSep = '---',
        $endSep = '---'
    ) {
        $this->startSep = array_filter((array) $startSep, 'is_string') ?: array('---');
        $this->endSep = array_filter((array) $endSep, 'is_string') ?: array('---');
        $this->parsedown = new Parsedown();
    }

    /**
     * Parse a string containing the YAML front matter and the markdown.
     *
     * @param string $str
     * @param bool   $parseMarkdown Should the Markdown be turned into HTML?
     *
     * @return Document
     */
    public function parse($str, $parseMarkdown = true)
    {
        $yaml = null;

        $quote = function ($str) {
            return preg_quote($str, "~");
        };

        $regex = '~^('
            .implode('|', array_map($quote, $this->startSep)) # $matches[1] start separator
            ."){1}[\r\n|\n]*(.*?)[\r\n|\n]+("                       # $matches[2] between separators
            .implode('|', array_map($quote, $this->endSep))   # $matches[3] end separator
            ."){1}[\r\n|\n]*(.*)$~s";                               # $matches[4] document content

        if (preg_match($regex, $str, $matches) === 1) { // There is a Front matter
            $yaml = trim($matches[2]) !== '' ? spyc_load(trim($matches[2])) : null;
            $str = ltrim($matches[4]);
        }

        return new Document($yaml, $parseMarkdown ? $this->parsedown->text($str) : $str);
    }
}

/**
 * Document.
 *
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 */
class Document
{
    /**
     * @var mixed
     */
    private $yaml;

    /**
     * @var string
     */
    private $content;

    /**
     * @param mixed  $yaml    YAML content.
     * @param string $content Content of the document.
     */
    public function __construct($yaml, $content)
    {
        $this->yaml = $yaml;
        $this->content = $content;
    }

    /**
     * @return mixed YAML content.
     */
    public function getYAML()
    {
        return $this->yaml;
    }

    /**
     * @return string Content of the document.
     */
    public function getContent()
    {
        return $this->content;
    }
}
