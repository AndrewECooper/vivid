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

Flight::route("GET /api/inventory/items", "getInventoryItems");
Flight::route("POST /api/inventory/add", function() {
    echo json_encode(addInventoryItem(json_decode(Flight::request()->getBody())));
});
Flight::route("POST /api/inventory/edit", function() {
    echo json_encode(editInventoryItem(json_decode(Flight::request()->getBody())));
});
Flight::route("POST /api/inventory/delete", function() {
    echo json_encode(deleteInventoryItem(json_decode(Flight::request()->getBody())));
});
Flight::route("GET /api/users", "getUsers");

Flight::start();
