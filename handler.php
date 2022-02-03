<?php
include "configdb.php";

if (isset($_POST['search'])) {
    $search = $_POST['search'];
    $search_url = "https://www.dnd5eapi.co/api/spells/?name=" . $search;
    $result = file_get_contents($search_url);

    echo $result;
}

if (isset($_POST['filtercr'])) {
    $cr = $_POST['filtercr'];

    $stmt = $connection->prepare('SELECT * FROM wildshape WHERE cr = :cr ORDER BY cr ASC');
//    $stmt = $connection->prepare('SELECT * FROM wildshape');
    $stmt->execute(['cr' => $cr]);
    $result = $stmt->fetchAll();
    $result = json_encode($result);

    echo $result;
}