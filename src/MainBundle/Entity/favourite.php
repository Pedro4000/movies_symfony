<?php

namespace MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * favourite
 *
 * @ORM\Table(name="favourite")
 * @ORM\Entity(repositoryClass="MainBundle\Repository\favouriteRepository")
 */
class favourite
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
     * @var int
     *
     * @ORM\Column(name="userId", type="integer", unique=true)
     */
    private $userId;

    /**
     * @var int
     *
     * @ORM\Column(name="movieId", type="integer", unique=true)
     */
    private $movieId;


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
     * Set userId
     *
     * @param integer $userId
     *
     * @return favourite
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return int
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * Set movieId
     *
     * @param integer $movieId
     *
     * @return favourite
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
}

