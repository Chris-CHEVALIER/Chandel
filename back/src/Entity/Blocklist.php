<?php

namespace App\Entity;

use App\Repository\BlocklistRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BlocklistRepository::class)]
#[ORM\Table(name: 'blocklists')]
class Blocklist
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $blocker_id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $blocked_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlocker(): ?User
    {
        return $this->blocker_id;
    }

    public function setBlocker(?User $blocker_id): static
    {
        $this->blocker_id = $blocker_id;

        return $this;
    }

    public function getBlocked(): ?User
    {
        return $this->blocked_id;
    }

    public function setBlocked(?User $blocked_id): static
    {
        $this->blocked_id = $blocked_id;

        return $this;
    }
}
