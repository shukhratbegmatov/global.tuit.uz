<header class="abouts-head">

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
                        foreach ($abouts as $menus)
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
                        foreach ($abouts as $menus)
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
                        foreach ($abouts as $menus)
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
                        foreach ($abouts as $menus)
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
                        foreach ($abouts as $menus)
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
                        foreach ($abouts as $menus)
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
                            <?php 
                        foreach ($abouts as $menus)
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
                    <li class="list2">
                        <a href="visit.html">Programs</a>
                         <ul class="depth2">
                            <?php 
                        foreach ($abouts as $menus)
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
                            <?php 
                        foreach ($abouts as $menus)
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
                            <?php 
                        foreach ($abouts as $menus)
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
                    <li class="list7">
                        <a href="#">TUIT NEWS</a>
                        <ul class="depth2">
                            <li><a href="#">News Plus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
    <div class="container container-about">
        <?php 
        foreach ($abouts as $key) {

            if($key->id==$_GET['id']){
          ?>
       <div class="row mt-3">
          <div class="col-4">
            <img src="../images/common/<?php echo "$key->images";?>" width="100%">
          </div>
     
          <div class="col-8">
            <h1><?php print_r( $key->title)?></h1>
              <?php print_r( $key->description)?>
          </div>
       </div>
       <?php
     }
      }
       ?>
    </div>
</header>
  