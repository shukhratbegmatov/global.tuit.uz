<header>
    <script>
        function doSearch(frm) {
            if ($("input[name=sq][type=text]", $(frm)).val().length >= 2) {
                return true;
            }
            alert('You must enter at least two characters.');
            return false;
        }
    </script>
    <div class="header-wrap">
        <!--PC-->

        <div class="head-bg" style="width:100%; height:175px; z-index:-1; position:absolute"></div>
        <div class="header">
            <div class="inner-header">
                <ul class="language">
                    <li><a href="#">UZBEK</a></li>
                    <li><a href="#">ENGLISH</a></li>
                    
                </ul>
                <h1>
                    <a href="/">
                        <img src="images/common/tatu.jpg" class="navbar-brand" width="100" height="100" alt="TUIT UNIVERSITY" />
                    </a>
                </h1>
                <ul class="util">
                    <li><a href="https://tuit.uz/">tuit.uz</a></li>
                </ul>
                <div class="search-container">
                    <div class="search-cont">
                        <a href="#" class="btn-search"><img src="images/common/btn/btn_util_search.png" alt="search" /></a>
                    </div>
                    <div class="search-box">
                        <a href="#" class="btn-search-close"><img src="images/common/btn/btn_search_close.gif" alt="search close" /></a>
                        <form name="goSearch" method="get" action="#" onsubmit="return doSearch(this)">
                            <div class="keyword">
                                <label for="search-type" class="blind">Search</label>
                                <input name="sq" id="search-type" placeholder="Application Process" type="text"><input src="images/common/btn/util_btn_search.png" alt="검색" type="image">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <nav class="nav-desktop">
                <ul class="depth1">
                    <li>
                        <a href="#">About</a>
                        <ul class="depth2">
                            <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==0){
                            ?>
                           <li><a class="dropdown-item" href="abouts?=<?php print_r($menus->name)?>&id=<?php print_r($menus->id)?>">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Programs</a>
                        <ul class="depth2">
                             <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==1){
                            ?>
                           <li><a class="dropdown-item" href="#">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>

                        </ul>

                    </li>
                    <li class="depth-type">
                        <a href="#">Admission</a>
                        <ul class="depth2">
                             <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==2){
                            ?>
                           <li><a class="dropdown-item" href="#">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Campus life</a>
                        <ul class="depth2">
                             <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==3){
                            ?>
                           <li><a class="dropdown-item" href="#">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>
                        </ul>
                    </li>
                    <li class="depth-type2">
                        <a href="#">Services</a>
                        <ul class="depth2">
                             <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==4){
                            ?>
                           <li><a class="dropdown-item" href="#">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Research</a>
                        <ul class="depth2">
                             <?php 
                        foreach ($menu as $menus)
                         {

                            if($menus->slug==5){
                            ?>
                           <li><a class="dropdown-item" href="#">
                            <?php 
                             print_r($menus->name);?></a></li>
                            <?php 
                            }
                          }
                         ?>
                        </ul>
                    </li>
                    <li class="last">
                        <a href="../pages/news.php">NEWS</a>
                </ul>
                </li>
                </ul>
            </nav>
        </div>
        <!--//PC-->
    </div>
    <div class="m-header-wrap">
        <!--MOBILE-->
        <div class="m-header">
            <a href="#" class="sidenav-open">
                <img src="images/common/btn/m_btn_nav.png" alt="menu open" /></a>

            <div class="search-container">
                <div class="search-cont">
                    <a href="#" class="btn-search"><img src="images/common/btn/m_btn_util_search.png" alt="search"></a>
                </div>
                <div class="search-box">
                    <a href="#" class="btn-search-close">
                        <img src="images/common/btn/btn_search_close.gif" alt="search close" />
                    </a>
                    <form name="goSearch" method="get" action="#">
                        <input name="sq" type="hidden">
                        <div class="keyword">
                            <label for="search-type2" class="blind">search</label>
                            <input id="search-type2" name="sq" placeholder="Application Process" type="text"><input src="images/common/btn/util_btn_search.png" type="image">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <section class="sidebar">
            <div class="nav-tit">
                <a href="#" class="close-button"><img src="images/common/btn/m_btn_nav_close.png"></a>
                <strong>MENU</strong>
            </div>
            <nav class="nav-mobile">
                <ul class="depth1">
                    <li class="list1">
                        <a href="introduction.html">About</a>
                        <ul class="depth2">
                            <li><a class="dropdown-item" href="#">About TUIT</a></li>
                            <li><a class="dropdown-item" href="#">Overview</a></li>
                            <li><a class="dropdown-item" href="#">Partners</a></li>
                            <li><a class="dropdown-item" href="#">International faculty</a></li>
                            <li><a class="dropdown-item" href="#">International projects</a></li>
                        </ul>
                    </li>
                    <li class="list2">
                        <a href="visit.html">Programs</a>
                        <ul class="depth2">
                            <li><a class="dropdown-item" href="#">Scholarships</a></li>
                            <li><a class="dropdown-item" href="#">Exchange programs</a></li>
                            <li><a class="dropdown-item" href="#">El-yurt umidi</a></li>
                            <li><a class="dropdown-item" href="#">Conferences and workshops</a>
                            </li>
                        </ul>
                    </li>
                    <li class="list3">
                        <a href="#">Admission
                        </a>
                        <ul class="depth2">
                            <li><a class="dropdown-item" href="#">Academic calendar</a></li>
                            <li><a class="dropdown-item" href="#">Curriculum</a></li>
                            <li><a class="dropdown-item" href="#">Admission guide</a></li>
                            <li><a class="dropdown-item" href="#">Grading system</a></li>
                            <li><a class="dropdown-item" href="#">Required documents</a></li>
                        </ul>
                    </li>
                    <li class="list4">
                        <a href="#">Campus life
                        </a>
                        <ul class="depth2">
                            <li><a class="dropdown-item" href="#">Freshman handbook</a></li>
                            <li><a class="dropdown-item" href="#">Campus</a></li>
                            <li><a class="dropdown-item" href="#">Cultural events</a></li>
                        </ul>
                    </li>
                    <li class="list5">
                        <a href="#">Services</a>
                        <ul class="depth2">
                            <li><a class="dropdown-item" href="#">Visa registration</a></li>
                            <li><a class="dropdown-item" href="#">Immigration</a></li>
                            <li><a class="dropdown-item" href="#">Forms</a></li>
                            <li><a class="dropdown-item" href="#">Insurance</a></li>
                        </ul>
                    </li>
                    <li class="list6">
                        <a href="#">Research</a>
                        <ul class="depth2">
                            <li><a href="#">Academia-Industry Cooperation</a></li>
                            <li><a href="#">Research Accomplishment</a></li>
                            <li><a href="#">Affiliated Research Center</a></li>
                        </ul>
                    </li>
                    <li class="list7">
                        <a href="#">TUIT NEWS</a>
                        <ul class="depth2">
                            <li><a href="#">News Plus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </section>
        <!--//MOBILE-->
    </div>
    <!--main-container1-->
    <div class="main-container1">
        <div class="slider-pro visual-slider-pro swiper-container">
            <div class="sp-slides visual-sp-slides swiper-wrapper">
<?php 
                        foreach ($menu as $menus)
                         {


                            if($menus->slug==7){
                          
                            ?>
                        
                    <div class='sp-slide visual-sp-slide swiper-slide'>
                        <div class='dimmed-layer'></div>

                         <div class='visual-img visual-img1' style='background-image: url("../images/common/bg.jpg")'>
                            <div class='visual-text'>
                                <div class='inner-text'>
                                    <strong>
                            <?php 
                             print_r($menus->title);?>
                           </strong>
                                    <p>
                                    <?php 
                                     print_r($menus->description);?>
                                   </p>

                                    <span class='ico-star'>
                                    </span>

                                </div>
                            </div>
                        </div>
                      
                    </div>
   <?php 
                            }
                          }
                         ?>
              
            </div>
            <div class="sp-buttons">
            </div>
            <div class="controller">
                <a href="#" class="btn-pause"></a>
            </div>
        </div>
        <div class="scroll">
            <a href="#">
                <span>Explore</span>
                <img src="images/home/btn_scroll.png" alt="Explore" />
            </a>
        </div>
    </div>
    <!--//main-container1-->
</header>
  <div class="main-shadow" style="visibility:hidden; display:block; width: 100%;"></div>
  <div id="main-wrap">
      <div class="main-wrap">
          <!--main-container2-->
          <div class="main-container2">
              <div class="main-content">
                  <h2 class="main-tit">Abouts</h2>
                  <ul class="about-cont1 about-cont">
                     
                          <li>

                              <div class="circle-box">
                                  <a href="#">
                                      <div class="circle-box-line"></div>
                                      <img src="../images/common/bg.jpg" alt="" class="about-img" />
                                      <img src="../images/common/bg.jpg" alt="" class="m-about-img" />

                                  </a>
                              </div>
                          </li>
                     
                  </ul>
              </div>
          </div>
          <!--//main-container2-->
          <!--main-container3-->
          <div class="main-container3">
             
                  <div class="main-content">
                      <div class="video">
                          <img src='../images/common/bg.jpg' width="100%" height="100%">
                      </div>
                      <div class="left-cont">
                          <strong>Hello</strong>
                          <p>Hello</p>
                      </div>
                  </div>

             
          </div>
          <div class="main-container5">
              <div class="main-content">
                  <div class="sns-wrap">
                      <div class="sns-container swiper-container">
                          <div class="sns-swiper-wrapper swiper-wrapper">
                              <!--insta-->
                          
                                  <div class="swiper-slide insta-slide">
                                     <div class="card" style="width: 18rem;">
                                      <img src="../images/common/bg.jpg" class="card-img-top" alt="...">
                                      <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                      </div>
                                    </div>
                                  </div>

                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!--main-container5-->
      </div>
  </div>

  <div class="section-1 my-5 ">
    <div class="container text-center ">
        <h1 class="heading-1 ">
            More about Programs
        </h1>
        <h1 class="heading-2 ">
            & Services
        </h1>
        <div class="row justify-content-center text-center ">
          
                <div class="col-md-3 item1 ">
                    <div class="card ">
                        <img src="../images/common/bg.jpg" alt="Img1 " class="card-img-top ">
                        <div class="card-body ">
                            <h4 class="card-title ">Hello</h4>
                            <p class="card-text ">Hello</p>
                        </div>
                    </div>

                </div>
                   <div class="col-md-3 item1 ">
                    <div class="card ">
                        <img src="../images/common/bg.jpg" alt="Img1 " class="card-img-top ">
                        <div class="card-body ">
                            <h4 class="card-title ">Hello</h4>
                            <p class="card-text ">Hello</p>
                        </div>
                    </div>

                </div>
                   <div class="col-md-3 item1 ">
                    <div class="card ">
                        <img src="../images/common/bg.jpg" alt="Img1 " class="card-img-top ">
                        <div class="card-body ">
                            <h4 class="card-title ">Hello</h4>
                            <p class="card-text ">Hello</p>
                        </div>
                    </div>

                </div>
                   <div class="col-md-3 item1 ">
                    <div class="card ">
                        <img src="../images/common/bg.jpg" alt="Img1 " class="card-img-top ">
                        <div class="card-body ">
                            <h4 class="card-title ">Hello</h4>
                            <p class="card-text ">Hello</p>
                        </div>
                    </div>

                </div>
           
        </div>
    </div>
</div>
<div class="footer-wrap ">

    <!-- Footer -->
    <footer class="bg-primary ">
     
            <div class="footer ">
                <br>
                <p style="color: white ">Hello</p>
                <h5 style="color: white ">Hello</h5>

                <br>
            </div>

</div>

</footer>
</div>