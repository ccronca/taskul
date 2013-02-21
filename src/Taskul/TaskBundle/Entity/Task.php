<?php

namespace Taskul\TaskBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Taskul\UserBundle\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use DoctrineExtensions\Taggable\Taggable;
/**
 * Task
 *
 * @ORM\Table(name="task")
 * @ORM\Entity(repositoryClass="Taskul\TaskBundle\Entity\Repository\TaskRepository")
 */
class Task implements Taggable {

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateEnd", type="datetime", nullable=true)
     */
    private $dateEnd;

    /**
     *
     * @ORM\ManyToMany(targetEntity="Taskul\UserBundle\Entity\User", inversedBy="taskMembers")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $members;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="\Taskul\UserBundle\Entity\User", inversedBy="ownTasks")
     */
    private $owner;

    private $tags;

    public function getTags()
    {
        $this->tags = $this->tags ?: new ArrayCollection();

        return $this->tags;
    }

    public function getTaggableType()
    {
        return 'task_tag';
    }

    public function getTaggableId()
    {
        return $this->getId();
    }
    /**
     * Get id
     *
     * @return integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Task
     */
    public function setName($name) {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Task
     */
    public function setDescription($description) {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * Set dateEnd
     *
     * @param \DateTime $dateEnd
     * @return Task
     */
    public function setDateEnd($dateEnd) {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    /**
     * Get dateEnd
     *
     * @return \DateTime
     */
    public function getDateEnd() {
        return $this->dateEnd;
    }

    /**
     * Set owner
     *
     * @param \Taskul\UserBundle\Entity\User $owner
     * @return Task
     */
    public function setOwner(User $owner = null) {
        $this->owner = $owner;

        return $this;
    }

    /**
     * Get owner
     *
     * @return \Taskul\UserBundle\Entity\User
     */
    public function getOwner() {
        return $this->owner;
    }


    /**
     * Add members
     *
     * @param \Taskul\USerBundle\Entity\User $members
     * @return Task
     */
    public function addMember(\Taskul\UserBundle\Entity\User $members)
    {
        $this->members[] = $members;

        return $this;
    }

    /**
     * Remove members
     *
     * @param \Taskul\UserBundle\Entity\User $members
     */
    public function removeMember(\Taskul\UserBundle\Entity\User $members)
    {
        $this->members->removeElement($members);
    }

    /**
     * Get members
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getMembers()
    {
        return $this->members;
    }

    public function __toString()
    {
    $class = explode('\\', __CLASS__);
    return end($class);
    }

}