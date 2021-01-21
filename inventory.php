<?php

function getInventoryItems() {
    $inv = <<<INV
    [
        {
          "id": 1,
          "description": "Tissue",
          "units": 2,
          "quantityPerUnit": 1,
          "location": "Men's Bathroom",
          "shelf": "NA",
          "bin": "NA",
          "link": "https://smile.amazon.com/Amazon-Brand-Solimo-Facial-Tissues/dp/B07DGT5ZVX/ref=sr_1_1_sspa?dchild=1&keywords=tissues&qid=1610653101&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSTE0MDZKNTY0OTdCJmVuY3J5cHRlZElkPUEwMDMzOTA5MzU2QzNINjhCSERaRSZlbmNyeXB0ZWRBZElkPUEwNTYzNDY5MVY1MzYwNlIzNTVDOSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
          "cost": 2.12,
          "alert": 2
        },
        {
          "id": 2,
          "description": "Hand Soap Refill",
          "units": 3,
          "quantityPerUnit": 1,
          "location": "Men's Bathroom",
          "shelf": "NA",
          "bin": "NA",
          "link": "https://smile.amazon.com/Amazon-Brand-Solimo-Gentle-Triclosan-free/dp/B07TLDW16Y/ref=sr_1_1_sspa?dchild=1&keywords=hand+soap+refill&qid=1610653278&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSEdCUFBORkhSWTA1JmVuY3J5cHRlZElkPUEwMTIwOTU2MkNRVlZFU0k5OUhCMCZlbmNyeXB0ZWRBZElkPUEwODg0NDgzMkpHMFc0TURFRjgzSSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
          "cost": 3.35,
          "alert": 2
        },
        {
          "id": 3,
          "description": "Coffee Creamer",
          "units": 2,
          "quantityPerUnit": 180,
          "location": "Green Room",
          "shelf": "NA",
          "bin": "NA",
          "link": "https://smile.amazon.com/Nestle-Coffee-mate-Coffee-Creamer-Vanilla/dp/B00451U9Q0/ref=sr_1_1_sspa?dchild=1&keywords=coffee+creamer&qid=1610653339&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQVTVSMzk0RUJZQzEmZW5jcnlwdGVkSWQ9QTA3OTE0MzcxQTZQMDZMQlVaU1BPJmVuY3J5cHRlZEFkSWQ9QTA4NjM2MzMxODUxODk2T0hPSFA5JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
          "cost": 17.40,
          "alert": 1
        },
        {
          "id": 4,
          "description": "Coffee Cups",
          "units": 105,
          "quantityPerUnit": 1,
          "location": "Green Room",
          "shelf": "NA",
          "bin": "NA",
          "link": "https://smile.amazon.com/Insulated-Ripple-Paper-Coffee-Stirrers/dp/B07WHZFYN5/ref=sr_1_1_sspa?crid=1MK9EFI5XXUC3&dchild=1&keywords=coffee+cups+with+lids&qid=1610653450&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sprefix=coffee+cups%2Caps%2C261&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVUxRVVpGSURUQlAmZW5jcnlwdGVkSWQ9QTA5NjE4NjcyTFFUM0ZNWUJCWVMwJmVuY3J5cHRlZEFkSWQ9QTA1NjY2MTEzRTlYTzc1NVRIMkhEJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
          "cost": 0.60,
          "alert": 75
        },
        {
          "id": 5,
          "description": "Coffee Packs",
          "units": 32,
          "quantityPerUnit": 1,
          "location": "Green Room",
          "shelf": "NA",
          "bin": "NA",
          "link": "https://smile.amazon.com/Colonial-Coffee-Colombian-Medium-Fraction/dp/B07BFDJVW1/ref=sr_1_1_sspa?dchild=1&keywords=coffee+bags&qid=1610653615&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYUUw3Q0lQTlNESksmZW5jcnlwdGVkSWQ9QTA0NDg4MzQxMk1HMkFUS0g2TUlKJmVuY3J5cHRlZEFkSWQ9QTA0OTMyMDgxVVRRWTRMR1FNSjFDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
          "cost": 0.86,
          "alert": 50
        }
    ]
    INV;
    echo $inv;
}