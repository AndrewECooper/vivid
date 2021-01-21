<?php 

function getUsers() {
    $inv = <<<INV
    [
        {
          "id": 1,
          "firstName": "Hazel",
          "lastName": "Cooper",
          "birthday": "01/30/1974",
          "permissions": ["inventory", "users"]
        },
        {
            "id": 2,
            "firstName": "Andrew",
            "lastName": "Cooper",
            "birthday": "07/03/1971",
            "permissions": ["inventory", "users"]
        },
        {
            "id": 3,
            "firstName": "Gabriel",
            "lastName": "Cooper",
            "birthday": "01/17/2004",
            "permissions": ["inventory"]
        },
        {
            "id": 4,
            "firstName": "Noah",
            "lastName": "Cooper",
            "birthday": "11/11/2011",
            "permissions": ["users"]
        },
        {
            "id": 5,
            "firstName": "Amaris",
            "lastName": "Cooper",
            "birthday": "07/15/2018",
            "permissions": []
        }
    ]
    INV;
    echo $inv;
}