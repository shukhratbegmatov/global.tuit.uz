<?php

    header('Location:../admission.php');   
    $title = $_POST['title'];
$target_path = "images/";

//adding the name of the file, finishing the path
$target_path = $target_path . basename($_FILES['photo']['name']);

//moving the file to the folder
if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_path)) {
    echo "The file " .  basename($_FILES['photo']['name']) .
        " has been uploaded";
} else {
    echo "There was an error uploading the file, please try again!";
}
$pic = ($_FILES['photo']['name']);
   
    include("../config/store.php");    
    $mysql->query("INSERT INTO admission VALUES (null,'$title', '$description','$pic');");
    echo $mysql->error;
?>