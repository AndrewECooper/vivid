<?php
function addInventoryItem($data) {
    $dbhost = 'localhost';
    $dbuser = 'seedtwos_vivid';
    $dbpass = 'Hazel3599!';
    $dbname = 'seedtwos_vivid';
    $link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('Error: unable to connect to mysql server' . mysqli_connect_error());

    $sql = <<<QRY
        insert into inventory (
            description, 
            units, 
            quantity_per_unit,
            location,
            shelf,
            bin,
            link,
            cost,
            alert
        ) values (
            '{$data->description}',
            {$data->units},
            {$data->quantityPerUnit},
            '{$data->location}',
            '{$data->shelf}',
            '{$data->bin}',
            '{$data->link}',
            {$data->cost},
            {$data->alert}
        )
    QRY; 

    $response = "";

    if (mysqli_query($link, $sql)) {
        $response = array("success"=>true);
    } else {
        $response = array("success"=>false, "error"=>mysqli_error($link));
    }

    mysqli_close($link);

    return $response;
}

function editInventoryItem($data) {
    $dbhost = 'localhost';
    $dbuser = 'seedtwos_vivid';
    $dbpass = 'Hazel3599!';
    $dbname = 'seedtwos_vivid';
    $link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('Error: unable to connect to mysql server' . mysqli_connect_error());

    $sql = <<<QRY
        update inventory set
            description = '{$data->description}', 
            units = {$data->units}, 
            quantity_per_unit = {$data->quantityPerUnit},
            location = '{$data->location}',
            shelf = '{$data->shelf}',
            bin = '{$data->bin}',
            link = '{$data->link}',
            cost = {$data->cost},
            alert = {$data->alert}
        where id = {$data->id}
    QRY; 

    $response = "";

    if (mysqli_query($link, $sql)) {
        $response = array("success"=>true);
    } else {
        $response = array("success"=>false, "error"=>mysqli_error($link));
    }

    mysqli_close($link);

    return $response;
}

function incrementInventoryItem($data) {
    $dbhost = 'localhost';
    $dbuser = 'seedtwos_vivid';
    $dbpass = 'Hazel3599!';
    $dbname = 'seedtwos_vivid';
    $link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('Error: unable to connect to mysql server' . mysqli_connect_error());

    $sql = <<<QRY
        update inventory set units = {$data->units}
        where id = {$data->id}
    QRY; 

    $response = "";

    if (mysqli_query($link, $sql)) {
        $response = array("success"=>true);
    } else {
        $response = array("success"=>false, "error"=>mysqli_error($link));
    }

    mysqli_close($link);

    return $response;
}

function deleteInventoryItem($data) {
    $dbhost = 'localhost';
    $dbuser = 'seedtwos_vivid';
    $dbpass = 'Hazel3599!';
    $dbname = 'seedtwos_vivid';
    $link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('Error: unable to connect to mysql server' . mysqli_connect_error());

    $sql = <<<QRY
        delete from inventory where id = {$data->id}
    QRY; 

    $response = "";

    if (mysqli_query($link, $sql)) {
        $response = array("success"=>true);
    } else {
        $response = array("success"=>false, "error"=>mysqli_error($link));
    }

    mysqli_close($link);

    return $response;
}

function getInventoryItems() {
    $dbhost = 'localhost';
    $dbuser = 'seedtwos_vivid';
    $dbpass = 'Hazel3599!';
    $dbname = 'seedtwos_vivid';
    $link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('Error: unable to connect to mysql server' . mysqli_connect_error());

    $sql = <<<QRY
        select 
            id, 
            description, 
            units, 
            quantity_per_unit,
            location,
            shelf,
            bin,
            link,
            cost,
            alert 
        from inventory
    QRY;

    $inv = array();
    $item = array();

    if ($result = mysqli_query($link, $sql)) {
        while ($row = mysqli_fetch_array($result)) {
            $item = array();
            $item["id"] = $row["id"];
            $item["description"] = $row["description"];
            $item["units"] = $row["units"];
            $item["quantityPerUnit"] = $row["quantity_per_unit"];
            $item["location"] = $row["location"];
            $item["shelf"] = $row["shelf"];
            $item["bin"] = $row["bin"];
            $item["link"] = $row["link"];
            $item["cost"] = $row["cost"];
            $item["alert"] = $row["alert"];
            $inv[] = $item;
        }
    }

    mysqli_close($link);
    
    echo json_encode($inv);
}