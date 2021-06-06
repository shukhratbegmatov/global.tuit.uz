  <div class="main-shadow" style="visibility:hidden; display:block; width: 100%;"></div>
  <div id="main-wrap">
      <div class="main-wrap">
          <!--main-container2-->
          <div class="main-container2">
              <div class="main-content">
                  <h2 class="main-tit">Abouts</h2>
                  <ul class="about-cont1 about-cont">
                      <?php
                        $result = $mysql->query("SELECT * FROM abouts where status=1");
                        echo $mysql->error;
                        while ($row = $result->fetch_row()) {
                        ?>
                          <li>

                              <div class="circle-box">
                                  <a href="#">
                                      <div class="circle-box-line"></div>
                                      <img src="<?php echo "admin/abouts/images/$row[3]" ?>" alt="" class="about-img" />
                                      <img src="<?php echo "admin/abouts/images/$row[3]" ?>" alt="" class="m-about-img" />

                                  </a>
                              </div>
                          </li>
                      <?php
                        }
                        ?>
                  </ul>
              </div>
          </div>
          <!--//main-container2-->
          <!--main-container3-->
          <div class="main-container3">
              <?php
                $result = $mysql->query("SELECT * FROM settings where status=1");
                echo $mysql->error;
                while ($row = $result->fetch_row()) {
                ?>
                  <div class="main-content">
                      <div class="video">
                          <img src='<?php echo "admin/settings/images/$row[3]" ?>' width="100%" height="100%">
                      </div>
                      <div class="left-cont">
                          <strong><?php echo "$row[1]" ?></strong>
                          <p><?php echo "$row[2]" ?></p>
                      </div>
                  </div>

              <?php
                }
                ?>
          </div>
          <div class="main-container5">
              <div class="main-content">
                  <div class="sns-wrap">
                      <div class="sns-container swiper-container">
                          <div class="sns-swiper-wrapper swiper-wrapper">
                              <!--insta-->
                              <?php
                                $result = $mysql->query("SELECT * FROM news where status=1");
                                echo $mysql->error;
                                while ($row = $result->fetch_row()) {
                                ?>
                                  <div class="swiper-slide insta-slide">
                                      <a href="#">
                                          <img class="sp-image" src="<?php echo "admin/news/images/$row[3]" ?>" alt="insta0">
                                      </a>
                                  </div>

                              <?php
                                }
                                ?>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!--main-container5-->
      </div>
  </div>