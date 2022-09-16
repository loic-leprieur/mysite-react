<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . './../vendor/autoload.php';
// Instantiate App

$app = AppFactory::create();
// Add error middleware
$app->addErrorMiddleware(true, true, true);
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/../templates/');
$twig = new Twig\Environment($loader, [
    'debug' => false,
    'cache' => false,
]);

$twig->addExtension(new \Twig\Extension\DebugExtension());

// Add routes
$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write('<a href="/hello/world"> Try /hello/world </a>');
    return $response;
});

$app->get('/hello/{name}', function (Request $request, Response $response, $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, ' . $name");
    return $response;
});

$app->run();
