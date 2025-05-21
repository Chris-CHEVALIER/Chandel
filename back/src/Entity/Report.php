<?php

namespace App\Entity;

use App\Repository\ReportRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReportRepository::class)]
#[ORM\Table(name: 'reports')]
class Report
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $reported_id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $reporter_id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Post $post_id = null;

    #[ORM\Column(length: 255)]
    private ?string $cause = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReported(): ?User
    {
        return $this->reported_id;
    }

    public function setReported(?User $reported_id): static
    {
        $this->reported_id = $reported_id;

        return $this;
    }

    public function getReporter(): ?User
    {
        return $this->reporter_id;
    }

    public function setReporter(?User $reporter_id): static
    {
        $this->reporter_id = $reporter_id;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post_id;
    }

    public function setPost(?Post $post_id): static
    {
        $this->post_id = $post_id;

        return $this;
    }

    public function getCause(): ?string
    {
        return $this->cause;
    }

    public function setCause(string $cause): static
    {
        $this->cause = $cause;

        return $this;
    }
}
