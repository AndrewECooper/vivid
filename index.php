<?php
require 'flight/Flight.php'; 
require "inventory.php";
require "users.php";

Flight::render("navbar", array(), "navbar");
Flight::render("footer", array(), "footer");

Flight::route('/', function(){
    Flight::render("admin");
});

Flight::route('/inventory', function(){
    Flight::render("inventory");
});

Flight::route('/users', function(){
    Flight::render("users");
});

Flight::route("/api/inventory/items", "getInventoryItems");
Flight::route("/api/users", "getUsers");

Flight::start();
