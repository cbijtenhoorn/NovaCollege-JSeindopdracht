<?php
if (isset($_POST['search'])){
    $search = $_POST['search'];
    $search_url = "https://www.dnd5eapi.co/api/spells/?name=" . $search;
    $result = file_get_contents($search_url);

    echo $result;
}