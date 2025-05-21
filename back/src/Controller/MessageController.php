<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Conversation;
use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class MessageController extends AbstractController
{
    #[Route('/messages', name: 'app_messages')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $conversations = $entityManager->getRepository(Conversation::class)
            ->createQueryBuilder('c')
            ->where('c.user1 = :user OR c.user2 = :user')
            ->setParameter('user', $user)
            ->getQuery()->getResult();
        return $this->render('messages/index.html.twig', [
            'conversations' => $conversations,
        ]);
    }

    #[Route('/messages/{id}', name: 'app_messages_conversation')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function conversation(EntityManagerInterface $entityManager, Request $request, Conversation $conversation): Response
    {
        $user = $this->getUser();
        // Vérifier que l'utilisateur fait partie de la conversation
        if ($conversation->getUser1() !== $user && $conversation->getUser2() !== $user) {
            throw $this->createAccessDeniedException();
        }
        $messages = $entityManager->getRepository(Post::class)->findBy([
            'conversation' => $conversation
        ], ['created_at' => 'ASC']);
        // Gestion de l'envoi d'un message
        if ($request->isMethod('POST')) {
            $content = $request->request->get('content');
            if ($content) {
                $message = new Post();
                $message->setContent($content);
                $message->setCreatedAt(new \DateTimeImmutable());
                $message->setUser($user);
                $message->setConversation($conversation);
                $entityManager->persist($message);
                $entityManager->flush();
                return $this->redirectToRoute('app_messages_conversation', ['id' => $conversation->getId()]);
            }
        }
        return $this->render('messages/conversation.html.twig', [
            'conversation' => $conversation,
            'messages' => $messages,
            'user' => $user,
        ]);
    }

    #[Route('/messages/new/{userId}', name: 'app_messages_new')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function newConversation(EntityManagerInterface $entityManager, int $userId): Response
    {
        $user = $this->getUser();
        if ($user->getId() === $userId) {
            $this->addFlash('error', 'Vous ne pouvez pas discuter avec vous-même.');
            return $this->redirectToRoute('app_messages');
        }
        $other = $entityManager->getRepository(User::class)->find($userId);
        if (!$other) {
            throw $this->createNotFoundException('Utilisateur non trouvé.');
        }
        // Chercher une conversation existante
        $conversation = $entityManager->getRepository(Conversation::class)
            ->createQueryBuilder('c')
            ->where('(c.user1 = :u1 AND c.user2 = :u2) OR (c.user1 = :u2 AND c.user2 = :u1)')
            ->setParameter('u1', $user)
            ->setParameter('u2', $other)
            ->getQuery()->getOneOrNullResult();
        if (!$conversation) {
            $conversation = new Conversation();
            $conversation->setUser1($user);
            $conversation->setUser2($other);
            $entityManager->persist($conversation);
            $entityManager->flush();
        }
        return $this->redirectToRoute('app_messages_conversation', ['id' => $conversation->getId()]);
    }
} 