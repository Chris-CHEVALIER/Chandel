<?php

namespace App\Entity;

use App\Repository\FollowRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FollowRepository::class)]
#[ORM\Table(name: 'follows')]
class Follow
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $followed_id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $Follower_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFollowedId(): ?User
    {
        return $this->followed_id;
    }

    public function setFollowedId(?User $followed_id): static
    {
        $this->followed_id = $followed_id;

        return $this;
    }

    public function getFollowerId(): ?User
    {
        return $this->Follower_id;
    }

    public function setFollowerId(?User $Follower_id): static
    {
        $this->Follower_id = $Follower_id;

        return $this;
    }
}
