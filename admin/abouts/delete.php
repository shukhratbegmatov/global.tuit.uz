     <?php
        include("../config/store.php");
        $title = $_POST['title'];
        $title = $mysql->real_escape_string($title);
        echo $mysql->error;
        $mysql->query("DELETE from abouts WHERE title = '$title';");
        echo $mysql->error;
        die("Prev: <a href='../abouts.php'>Prev</a>");
        ?>