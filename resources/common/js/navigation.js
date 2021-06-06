jQuery(function() {
    
    var mPageId = -1;	// 1뎁스 메뉴 아이디
	var sPageId = -1;	// 2뎁스 메뉴 아이디
	var tPageId = -1;	// 3뎁스 메뉴 아이디
	var menuNum = $('nav-desktop > ul.depth1 > li').length;	// 1뎁스 메뉴의 갯수
    window.deviceMode;
    
    //
    $('.nav-desktop > ul.depth1 > li > ul.depth2 > li').each(function() {
        
        if ($('.depth3', this).length != 0) {   // 3뎁스가 존재 할 경우
            $('.depth3 li', this).each(function() {
                var url = $('a', this).attr('href');
                if (location.href.indexOf(url) >= 0) {
                    tPageId = $(this).index();
                    sPageId = $(this.parentNode.parentNode).index();
                    mPageId = $(this.parentNode.parentNode.parentNode.parentNode).index();
                }
            });
        } else {    // 3뎁스가 존재하지 않을 경우
            var url = $('> a', this).attr('href');
            if (location.href.indexOf(url) >= 0) {
                sPageId = $(this).index();
                mPageId = $(this.parentNode.parentNode).index();
            }
        }
    });
    /*console.log('mPageId:', mPageId);
    console.log('sPageId:', sPageId);
    console.log('tPageId:', tPageId);*/
    
    //-------------------------------------------------------------------------------------------------------------------
    // Desktop Global nav-desktopigation Bar
    //-------------------------------------------------------------------------------------------------------------------
    function initDesktopNavi()
    {
        $('.nav-desktop > ul.depth1 > li > .depth2').each(function() {
            if ($(this.parentNode).index() != 4 && $(this.parentNode).index() != 2) {  // 3뎁스 메뉴가 존재하는 경우
                $(this).width( 208 );
                $('> li > a', this).css({minWidth: 0});
            }
            $('> li', this).each(function() {
                if ($('.depth3', this).length == 0) $(this).addClass('hidden');
            });
        });
    }
    initDesktopNavi();
    
    
    // 1Dpeth Menu
    var setHideMenuD1;
    $('.nav-desktop > ul.depth1 > li > a').mouseenter(function() {
        clearTimeout(setHideMenuD1);
        showMenuD1($(this.parentNode).index());
    }).mouseleave(function() {
        setHideMenuD1 = setTimeout(function() {
            showMenuD1(-1);
        }, 500);
    });
    
    $('.nav-desktop > ul.depth1 > li .depth2').mouseenter(function() {
        clearTimeout(setHideMenuD1);
    }).mouseleave(function() {
        setHideMenuD1 = setTimeout(function() {
            showMenuD1(-1);
        }, 500);
    });
    
    // 2Depth Menu
    $('.nav-desktop > ul.depth1 > li .depth2 > li').mouseenter(function() {
        $('.nav-desktop > ul.depth1 > li .depth2 > li').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function() {
        $(this).removeClass('on');
    });
    
    $('.nav-desktop > ul.depth1 > li .depth2 > li > a').mouseenter(function() {
        TweenMax.to( $(this), 0.3, {x: 5, ease:Quint.easeOut} );
    }).mouseleave(function() {
        TweenMax.to( $(this), 0.3, {x: 0, ease:Quint.easeOut} );
    });
    
    // 3Depth Menu
    $('.nav-desktop > ul.depth1 > li > ul.depth2 > li > ul.depth3 li a').mouseenter(function() {
        $('.nav-desktop > ul.depth1 > li.on > ul.depth2 > li > ul.depth3 li').removeClass('on');
        $(this.parentNode).addClass('on');
        TweenMax.to( $(this), 0.3, {x: 5, ease:Quint.easeOut} );
    }).mouseleave(function() {
        $(this.parentNode).removeClass('on');
        TweenMax.to( $(this), 0.3, {x: 0, ease:Quint.easeOut} );
    });

	function showMenuD1(mId)
    {
        $('.nav-desktop > ul.depth1 > li').removeClass('on');
        $('.nav-desktop > ul.depth1 > li > ul.depth2').hide();
        if (mId != -1) {
            $('.nav-desktop > ul.depth1 > li').eq(mId).addClass('on');
            $('.nav-desktop > ul.depth1 > li:eq('+ mId +') > ul.depth2').show();
        }
    }
    
    // Desktop Search
    $('.header .search-cont a').click(function() {
        $('.header .search-container .search-box').show();
        
        return false;
    });
    
    $('.header .search-container .search-box a').click(function() {
        $(this.parentNode).hide();
        
        return false;
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // Mobile Global nav-desktopigation Bar
    //-------------------------------------------------------------------------------------------------------------------
    function initMobileNavi()
    {
        if (mPageId == -1) {    // Home
            $('.nav-mobile ul.depth1 > li:first').addClass('on');
        }
        else {  // Sub
            $('.nav-mobile ul.depth1 > li').eq(mPageId).addClass('on');
        }
    }
    initMobileNavi();
    
    // Menu Open
    $('.sidenav-open').click(function() {
        $('.sidebar').show();
        TweenMax.fromTo( $('.sidebar'), 0.7, {left: -window.innerWidth}, {left: 0, ease:Quint.easeOut} );
        
        return false;
    });
    
    // Menu Close
    $('.m-header-wrap .nav-tit .close-button').click(function() {
        TweenMax.to( $('.sidebar'), 0.4, {left: -window.innerWidth, ease:Quint.easeOut, onComplete:function() {$('.sidebar').hide();}} );
        
        return false;
    });
    
    // 1Depth Menu
    $('.nav-mobile ul.depth1 > li > a').click(function() {
        $('.nav-mobile ul.depth1 > li > .depth2').hide();
        $('.depth2', this.parentNode).show();
        $('.nav-mobile ul.depth1 > li').removeClass('on');
        $(this.parentNode).addClass('on');
        
        return false;
    });
    
    // Mobile Search
    $('.m-header .search-cont a').click(function() {
        $('.m-header .search-container .search-box').show();
        
        return false;
    });
    
    $('.m-header .search-container .search-box a').click(function() {
        $(this.parentNode).hide();
        
        return false;
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // Footer Social Media Buttons & Contact Us
    //-------------------------------------------------------------------------------------------------------------------
    var snsColorArr = ['#4267b2', '#a200ff', '#ff0000'];
    $('.footer-right .contact ul li .sns-btn a').mouseenter(function() {
        if (deviceMode == 'desktop') {
//            TweenMax.to( $('img', this), 0.5, {top: -51, ease:Quint.easeOut} );
            TweenMax.to( $(this.parentNode), 0.5, {backgroundColor: snsColorArr[$(this.parentNode.parentNode).index()]} );
        }
    }).mouseleave(function() {
        if (deviceMode == 'desktop') {
//            TweenMax.to( $('img', this), 0.5, {top: 0, ease:Quint.easeOut} );
            TweenMax.to( $(this.parentNode), 0.5, {backgroundColor:'#616161'} );
        }
    });
    
    $('.contact-type').mouseenter(function() {
        if (deviceMode == 'desktop') {
            TweenMax.to( $('span', this), 0.5, {width: '100%', backgroundColor: 'rgba(243, 149, 62, 1)', ease:Power4.easeOut} );
        }
    }).mouseleave(function() {
        if (deviceMode == 'desktop') {
            TweenMax.to( $('span', this), 0.5, {width: 100, backgroundColor: 'rgba(243, 149, 62, 0)', ease:Power4.easeOut} );
        }
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // Top Button
    //-------------------------------------------------------------------------------------------------------------------
    $('.top-btn a').click(function() {
        $('html, body').animate({scrollTop: 0}, 200);
        
        return false;
    }).mouseenter(function() {
        if (deviceMode == 'desktop') {
            clearTimeout(setBtnTopHide);
        }
    }).mouseleave(function() {
        if (deviceMode == 'desktop' && $('#container').height() + $('.footer-wrap').height() - $(window).height() + 80 != $(window).scrollTop()) {
            hideBtnTop();
        }
    });
    
    var setBtnTopHide;
    function hideBtnTop()
    {
        clearTimeout(setBtnTopHide);
        setBtnTopHide = setTimeout(function() {
            $('.top-btn').stop().fadeOut();
        }, 1000);
    }
    hideBtnTop();
    
    //-------------------------------------------------------------------------------------------------------------------
    // Window Resize
    //-------------------------------------------------------------------------------------------------------------------
    var PHONE_WIDTH = 768;
    var TABLET_WIDTH = 992;
    var LAPTOP_WIDTH = 1200;
    var oldWidth = window.innerWidth;
    $(window).resize(function() {
        var winWidth = window.innerWidth;
        
        /*
        * Phone
        */
        if (winWidth < PHONE_WIDTH) {
            deviceMode = 'phone';
            if (oldWidth >= PHONE_WIDTH && oldWidth < TABLET_WIDTH) {   // 태블릿에서 핸드폰으로 변경
                $('.top-btn a').css({right: 15});
            }
            else if (oldWidth >= TABLET_WIDTH) {   // PC에서 핸드폰으로 변경
                $('.top-btn a').css({right: 15});
            }
        }
        /*
        * Tablet
        */
        else if (winWidth >= PHONE_WIDTH && winWidth < TABLET_WIDTH) {
            //
            deviceMode = 'tablet';
            if (oldWidth < PHONE_WIDTH) {   // 핸드폰에서 태블릿으로 변경
                $('.top-btn a').css({right: 30});
            }
            else if (oldWidth >= TABLET_WIDTH) {   // PC에서 태블릿으로 변경
                $('.top-btn a').css({right: 30});
            }
        }
        /*
        * PC
        */
        else if (winWidth >= TABLET_WIDTH) {
            //
            deviceMode = 'desktop';
            if (oldWidth < PHONE_WIDTH) {   // 핸드폰에서 PC로 변경
                $('.m-header-wrap .nav-tit .close-button').trigger('click');
            }
            else if (oldWidth < TABLET_WIDTH && oldWidth >= PHONE_WIDTH) {   // 태블릿에서 PC로 변경
                $('.m-header-wrap .nav-tit .close-button').trigger('click');
            }
            
            $('.top-btn a').css({right: Math.round((window.innerWidth - $('.footer').width()) / 2) - 10});
        }

        oldWidth = window.innerWidth;
        
    }).trigger('resize');
    
    //-------------------------------------------------------------------------------------------------------------------
    // Window Scroll
    //-------------------------------------------------------------------------------------------------------------------
    
    $(window).scroll(function() {
        var scTop = $(window).scrollTop();
        var value = location.pathname == '/' ? 1410 : 300;
        if (window.innerWidth >= TABLET_WIDTH) {
            if (location.pathname != '/error_404') {
            	$('.head-bg').css({backgroundColor: 'rgba(30, 46, 67, '+ (scTop / value) +')'});
            }
            $('.nav-desktop').css({backgroundColor: 'rgba(0, 0, 0, '+ (0.3 - scTop / value) +')'});
        }
        
        $('.top-btn').show();
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            if (deviceMode == 'desktop') clearTimeout(setBtnTopHide);
        } else {
            hideBtnTop();
        }
    }).on('load', function() {
        $(this).trigger('scroll');
    });
    
});







