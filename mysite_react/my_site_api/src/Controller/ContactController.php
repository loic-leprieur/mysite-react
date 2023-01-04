<?php

namespace App\Controller;

use App\Entity\Task;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

require_once(__DIR__ . '/contact.php');

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="app_contact")
     */
    public function index(): Response
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }

    /**
     * @Route("/tasks", methods={"POST"})
     */
    public function create(Request $request, SerializerInterface $serializer, Registry $doctrine)
    {
        $data = $request->getContent();
        $task = $serializer->deserialize($data, Task::class, 'json');

        $em = $doctrine->getManager();
        $em->persist($task);
        $em->flush();

        return new JsonResponse(['status' => 'Task created!'], Response::HTTP_CREATED);
    }

    /**
     */
    public function __construct()
    {
    }
}
