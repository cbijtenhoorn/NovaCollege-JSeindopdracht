<?php
include "configdb.php";

if (isset($_POST['search'])) {
    $search = $_POST['search'];
    $search_url = "https://www.dnd5eapi.co/api/spells/?name=" . $search;
    $result = file_get_contents($search_url);

    echo $result;
}

if (isset($_POST['filtersearch']) && isset($_POST['filtertype'])) {
    $type = $_POST['filtertype'];

    switch ($type){
        case "cr":
            $cr = $_POST['filtersearch'];
            $stmt = $connection->prepare('SELECT * FROM wildshape WHERE cr = :cr ORDER BY cr ASC');
            $stmt->execute(['cr' => $cr]);
            break;
        case "name":
            $name = $_POST['filtersearch'];
            $stmt = $connection->prepare('SELECT * FROM wildshape WHERE name LIKE :name ORDER BY cr ASC');
            $stmt->execute(['name' => "%".$name."%"]);
            break;
        case "size":
            $size = $_POST['filtersearch'];
            $stmt = $connection->prepare('SELECT * FROM wildshape WHERE size LIKE :size ORDER BY cr ASC');
            $stmt->execute(['size' => "%".$size."%"]);
            break;
        case "ac":
            $ac = $_POST['filtersearch'];
            $stmt = $connection->prepare('SELECT * FROM wildshape WHERE ac = :ac ORDER BY cr ASC');
            $stmt->execute(['ac' => $ac]);
            break;
    }
    $result = $stmt->fetchAll();
    $result = json_encode($result);

    echo $result;
}