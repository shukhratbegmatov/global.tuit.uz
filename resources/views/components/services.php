<div class="section-1 my-5 ">
    <div class="container text-center ">
        <h1 class="heading-1 ">
            More about Programs
        </h1>
        <h1 class="heading-2 ">
            & Services
        </h1>
        <div class="row justify-content-center text-center ">
            <?php
            $result = $mysql->query("SELECT * FROM services where status=1");
            echo $mysql->error;
            while ($row = $result->fetch_row()) {
            ?>
                <div class="col-md-3 item1 ">
                    <div class="card ">
                        <img src="<?php echo "admin/news/images/$row[3]" ?>" alt="Img1 " class="card-img-top ">
                        <div class="card-body ">
                            <h4 class="card-title "><?php echo "$row[1]" ?></h4>
                            <p class="card-text "><?php echo "$row[2]" ?></p>
                        </div>
                    </div>

                </div>
            <?php
            }
            ?>
        </div>
    </div>
</div>