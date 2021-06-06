<fieldset>
    <div class="jumbotron m-3">
        <div class="text-center">
            <h1 class="display-4">Cumpus</h1>
        </div>
        <div class="container">
            <?php

            include("config/store.php");   
            $result = $mysql->query("SELECT * FROM campos;");
            echo $mysql->error;
            echo "<div class='table-about'>
                    <table class='table table-striped'>";
            echo "
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>Images</th>
                    <th>DELETE</th>
                    </tr>";
            while ($row = $result->fetch_row()) {
                $delete = "<form action='cumpus/delete.php' method='post'>" .
                    "<input type='hidden' name='title' value=\"$row[1]\">" .
                    "<input type='submit' value='Delete'>" .
                    "</form>";
                echo "
                        <tr>
                        <td>$row[0]</td><td>$row[1]</td><td>$row[2]</td>
                        <td><img src='cumpus/images/$row[3]' class='about-images'></td>
                        <td>$delete</td>
                        
                        </tr>";
            }
            echo "</table> </div>";
            ?>
        </div>

    </div>
</fieldset>