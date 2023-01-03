<?php

namespace App\Controller;

use App\Entity\Message;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * Constructor by default
     */
    public function __construct()
    {
    }

    // /**
    //  * @Route("/", name="app_contact")
    //  */
    // public function index(): Response
    // {
    //     return $this->render('contact/index.html.twig', [
    //         'controller_name' => 'ContactController',
    //     ]);
    // }

    /**
     * @Route("/contact", methods={"POST"})
     */
    function contactAction(Request $request, ManagerRegistry $doctrine)
    {
        // Retrieve form data from the request
        $expediteur = $request->request->get('expediteur') ?? 'Expéditeur non renseigné';
        $messageBody = $request->request->get('message') ?? 'Message non défini';
        $email = $request->request->get('email') ?? 'email@nondefini.com';

        // Check the reCAPTCHA response
        //$recaptchaResponse = $request->request->get('g-recaptcha-response');
        //if (!empty($recaptchaResponse)) {
        //$secretAPIkey = '6LeCU9keAAAAACkwRmSieGjdjNlRlgcSIFes4Q7c'; // TDDO: To hide in a config file
        //$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secretAPIkey . '&response=' . $recaptchaResponse);
        //$response = json_decode($verifyResponse);
        //if ($response->success) {
        // Insert the data into the database
        $em = $doctrine->getManager();

        $date = new \DateTime();
        $AsMessage = new Message();
        $AsMessage->setMessage($messageBody);
        $AsMessage->setEmail($email);
        $AsMessage->setExpediteur($expediteur);
        $AsMessage->setDate($date);

        $em->persist($AsMessage);
        $em->flush();

        // Send the email
        mail('contact@loic-leprieur.fr', 'Message de loic-leprieur.fr', "<span>De " . $expediteur . "</span><h2>E-mail: </h2>" . $email . "<h2>Message:<h2/>" . $messageBody);

        // Return a success response
        return new JsonResponse([
            'status' => 'success',
            'message' => 'Your message was sent successfully!'
        ], Response::HTTP_OK);
        //} else {
        // Return an error response if the reCAPTCHA check fails
        //  return new JsonResponse([
        //    'status' => 'error',
        //    'message' => 'Robot verification failed, please try again.'
        //  ], Response::HTTP_BAD_REQUEST);
        //}
        // } else {
        //     // Return an error response if the reCAPTCHA field is not present in the request
        //     return new JsonResponse([
        //         'status' => 'error',
        //         'message' => 'Missing reCAPTCHA field.'
        //     ], Response::HTTP_BAD_REQUEST);
        // }
    }
}
