<div class="footer-wrap ">

    <!-- Footer -->
    <footer class="bg-primary ">
        <?php
        $result = $mysql->query("SELECT * FROM settings where status=3");
        echo $mysql->error;
        while ($row = $result->fetch_row()) {
        ?>
            <div class="footer ">
                <br>
                <p style="color: white "><?php echo $row[1] ?></p>
                <h5 style="color: white "> <?php echo $row[2] ?></h5>

                <br>
            </div>

</div>
<?php
        }
?>
</footer>
</div>