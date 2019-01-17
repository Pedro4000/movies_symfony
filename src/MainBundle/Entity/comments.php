<?php

namespace MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * comments
 *
 * @ORM\Table(name="comments")
 * @ORM\Entity(repositoryClass="MainBundle\Repository\commentsRepository")
 */
class comments
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="userFirstName", type="string", length=255)
     */
    private $userFirstName;

    /**
     * @var int
     *
     * @ORM\Column(name="movieId", type="integer")
     */
    private $movieId;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="string", length=255)
     */
    private $content;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set userFirstName
     *
     * @param string $userFirstName
     *
     * @return comments
     */
    public function setUserFirstName($userFirstName)
    {
        $this->userFirstName = $userFirstName;

        return $this;
    }

    /**
     * Get userFirstName
     *
     * @return string
     */
    public function getUserFirstName()
    {
        return $this->userFirstName;
    }


    /**
     * Set movieId
     *
     * @param integer $movieId
     *
     * @return comments
     */
    public function setMovieId($movieId)
    {
        $this->movieId = $movieId;

        return $this;
    }

    /**
     * Get movieId
     *
     * @return int
     */
    public function getMovieId()
    {
        return $this->movieId;
    }

    /**
     * Set content
     *
     * @param string $content
     *
     * @return comments
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }
}

