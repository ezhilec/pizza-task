#  Pizza Task

## About

Demo e-commerce shop with cart and user cabinet 

## Technology stack

Laravel REST API + React/Redux SPA 

## Install

Clone this repository and install Composer dependencies:
``composer install``

Then copy content of .env.example to .env file And fill in database access parameters, such as:

    DB_HOST=
    DB_PORT=
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=

Generate app key:

``php artisan key:generate``

Next:

``php artisan migrate``

``php artisan db:seed``

``php artisan passport:install``

Then start a development server at http://localhost:8000:

``php artisan serve``

Follow the instructions on this page http://localhost:8000 in your browser.
