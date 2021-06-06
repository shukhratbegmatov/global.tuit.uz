var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

var player;
var isVideo = false; // 비주얼에 비디오가 존재하는지 여부
var playerReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    playerReady = true;
    event.target.setPlaybackQuality('hd1080');
    event.target.stopVideo();
}

function onPlayerStateChange(event) {
    if (player.getPlayerState() == 0) stoppedVideo();
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality('hd1080');
    }
}

jQuery(function() {

    $('.vid-container').length != 0 ? isVideo = true : false;

    var PHONE_WIDTH = 768;
    var TABLET_WIDTH = 992;
    var LAPTOP_WIDTH = 1200;

    var deviceMode = getDeviceMode();

    function getDeviceMode() {
        var dm;
        winWidth = window.innerWidth;
        if (winWidth < PHONE_WIDTH) {
            dm = 'phone';
        } else if (winWidth >= PHONE_WIDTH && winWidth < TABLET_WIDTH) {
            dm = 'tablet';
        } else if (winWidth >= TABLET_WIDTH) {
            dm = 'desktop';
        }

        return dm;
    }

    //----------------------------------------------------------------------------------------------------------------
    // Visual
    //----------------------------------------------------------------------------------------------------------------
    var isAutoSlideVisual;
    
    if (isMobile == false && deviceMode == 'desktop' && $(window).scrollTop() <= 250) isAutoSlideVisual = true;
    else isAutoSlideVisual = false;
    
    if ($.browser.msie && $.browser.versionNumber <= 9) {
        isAutoSlideVisual = false;
        $('.controller').hide();
    }

    var swiperVisual = new Swiper('.main-container1 .swiper-container', {
        slidesPerView: 1,
        pagination: '.sp-buttons',
        paginationClickable: true,
        speed: 750,
        autoplay: isAutoSlideVisual == true ? 10000 : false,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    /*
    swiperVisual.on('onAutoplayStop', function() {
        console.log('Setted Auto Slide Mode: False');
        console.log('isAutoSlideVisual:', isAutoSlideVisual);
    });
    swiperVisual.on('onAutoplayStart', function() {
        console.log('Setted Auto Slide Mode: True');
    });
    */
    // 비주얼 자동 슬라이드 컨트롤 버튼
    $('.controller .btn-pause').click(function() {
        isAutoSlideVisual = !isAutoSlideVisual;
        
        if (isAutoSlideVisual) {
            $(this).removeClass('playing');
            if (player.getPlayerState() != 1) {
                swiperVisual.startAutoplay();
            }
        }
        else {
            $(this).addClass('playing');
            swiperVisual.stopAutoplay();
        }

        return false;
    });
    
    function initVisual()
    {
        if (deviceMode == 'phone' || deviceMode == 'tablet') {
            $('.controller .btn-pause').addClass('playing');
            //
            swiperVisual.stopAutoplay();
        }
    }
    initVisual();
    
    // 비주얼 Explore
    $('.scroll a').mouseenter(function() {
        TweenMax.to( $('img', this), 0.5, {y: 6, yoyo: true, repeat: -1} );
    }).mouseleave(function() {
        TweenMax.to( $('img', this), 0.5, {y: 0} );
    }).click(function() {
        TweenMax.to( $('html, body'), 1, {scrollTop: window.innerHeight, ease:Quint.easeOut} );
//        $(window).scrollTop( window.innerHeight );
        
        return false;
    });

    // 비주얼 비디오 Stop & Play 버튼
    $('.btn-pp').click(function() {
        if (player.getPlayerState() == 1) {
            if (isAutoSlideVisual) {
                swiperVisual.startAutoplay();
            }
            player.pauseVideo();
        } else {
            if (isAutoSlideVisual) {
                swiperVisual.stopAutoplay();
            }
            player.playVideo();
        }

        return false;
    });

    // 비주얼이 슬라이드된 직후
    swiperVisual.on('onSlideChangeEnd', function() {
        if (isVideo) { // 비디오가 존재 할 경우에만 실행
            var currentIdx = swiperVisual.activeIndex;
            
            if (player.getPlayerState() == 1) player.pauseVideo();
            if (isAutoSlideVisual) swiperVisual.startAutoplay();
            /*
            // 현재 슬라이드가 비디오일 경우
            if ($('.swiper-slide-active').hasClass('video')) {
                console.log('This slide is Video! Video State is', player.getPlayerState());
                if (getDeviceMode() == 'desktop' && isAutoSlideVisual) {
                    console.log('Not paused Video!');
                    player.playVideo();
                    swiperVisual.stopAutoplay();
                }
            }
            // 현재 슬라이드가 비디오가 아닐 경우
            else {
                console.log('Not Video Slide!');
                if (player.getPlayerState() == 1) player.pauseVideo();
                if (isAutoSlideVisual) swiperVisual.startAutoplay();
            }
            */
        } else {
            /*console.log('There is no Youtube Video!');
            console.log('onSlideChangeEnd > swiperVisual.autoplaying:', swiperVisual.autoplaying);*/
        }
    });

    // 플레이되던 비디오가 완료되어 스톱되면 할 일
    window.stoppedVideo = function() {
        if (isAutoSlideVisual && getDeviceMode() == 'desktop') { // 자동 슬라이드일 경우 다음 슬라이드 이동 후 자동 슬라이드 다시 시작
            //swiperVisual.slideNext();
            swiperVisual.startAutoplay();
        } else if (isAutoSlideVisual == false && getDeviceMode() == 'desktop') { // 자동 슬라이드가 아닐 경우 비디오 리플레이
            player.playVideo();
        }
    }

    // Footer Position Setting
    $('.main-shadow').height($('#main-wrap').height());
    $(window).on('load', function() {
        $('.main-shadow').height($('#main-wrap').height());
    });


    // 비주얼 비디오 중앙 정렬
    var ASPECT_RATIO = 16 / 9;

    function setVideoCenter() {
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        if (winWidth / winHeight < ASPECT_RATIO) {
            $('.vid-container').height(winHeight);
            $('.vid-container').width($('.vid-container').height() * ASPECT_RATIO);
        } else {
            $('.vid-container').width(winWidth);
            $('.vid-container').height($('.vid-container').width() / ASPECT_RATIO);
        }
    }
    if (isVideo) setVideoCenter();

    // 비주얼 모두 정지
    function visualAllStop() {
        isAutoSlideVisual = false;
        swiperVisual.stopAutoplay();
        if ($('.controller .btn-pause').hasClass('playing') == false) $('.controller .btn-pause').addClass('playing');
        if (isVideo && playerReady) player.pauseVideo();
    }
    
    // 비주얼 텍스트에 "*"존재하면 별도의 클래스 적용
    $('.visual-text').each(function(idx) {
        var vText = $('.inner-text p', this).text();
        if (vText.indexOf('*') >= 0) {
            var vTextArr = vText.split('*');
            //
            var text = '';
            for (var i=0; i < vTextArr.length-1; i++) {
                text += vTextArr[i] + '<span class="ico-star">*</span>' + vTextArr[i+1];
            }
            $('.inner-text p', this).html(text);
        }
    });
    
    

    //----------------------------------------------------------------------------------------------------------------
    // About KMU Number Count Animation
    //----------------------------------------------------------------------------------------------------------------
    var isAboutKmuTween = false;
    var tweenObj = new Object();
    tweenObj.year = new Date().getFullYear();
    tweenObj.coll = 0;
    tweenObj.stud = 0;
    tweenObj.part = 0;
    var yearGoal, callGoal, studGoal, partGoal;

    function initAboutKmu() {
        yearGoal = parseInt($('.kmu-year').text());
        callGoal = parseInt($('.kmu-colleges').text().split(' ', 1));
        studGoal = parseInt($('.kmu-students').text());
        partGoal = parseInt($('.kmu-partners').text());

        TweenMax.set($('.kmu-year, .kmu-colleges, .kmu-students, .kmu-partners'), {
            scale: 1.5,
            opacity: 0
        });
        $('.kmu-colleges').html('0 <span>Colleges</span>');
        $('.kmu-students').text(tweenObj.stud);
        $('.kmu-partners').text(tweenObj.part);
    }
    initAboutKmu();

    function startAboutKmuTween() {
        if (!isAboutKmuTween) {
            kmuYearTween(yearGoal);
            kmuCollTween(callGoal);
            kmuStudTween(studGoal);
            kmuPartTween(partGoal);

            isAboutKmuTween = true;
        }
    }

    function kmuYearTween(targetNum) {
        TweenMax.to(tweenObj, 10, {
            year: targetNum,
            ease: Power4.easeOut
        });
        TweenMax.to($('.kmu-year'), 5, {
            scale: 1,
            alpha: 1,
            ease: Power4.easeOut
        });
        var setText = setInterval(function() {
            if (parseInt(tweenObj.year) == targetNum) {
                clearInterval(setText);
            }
            $('.kmu-year').html(parseInt(tweenObj.year));

        }, 10);
    }

    function kmuCollTween(targetNum) {
        TweenMax.to(tweenObj, 5, {
            coll: targetNum,
            ease: Quint.easeOut
        });
        TweenMax.to($('.kmu-colleges'), 5, {
            scale: 1,
            alpha: 1,
            ease: Power4.easeOut
        });
        var setText = setInterval(function() {
            if (parseInt(tweenObj.coll) == targetNum) {
                clearInterval(setText);
            }
            $('.kmu-colleges').html(addCommas(parseInt(tweenObj.coll), 4) + ' <span>Colleges</span>');

        }, 10);
    }

    function kmuStudTween(targetNum) {
        TweenMax.to(tweenObj, 10, {
            stud: targetNum,
            ease: Power4.easeOut
        });
        TweenMax.to($('.kmu-students'), 5, {
            scale: 1,
            alpha: 1,
            ease: Power4.easeOut
        });
        var setText = setInterval(function() {
            if (parseInt(tweenObj.stud) == targetNum) {
                clearInterval(setText);
            }
            $('.kmu-students').html(addCommas(parseInt(tweenObj.stud), 3));

        }, 10);
    }

    function kmuPartTween(targetNum) {
        TweenMax.to(tweenObj, 10, {
            part: targetNum,
            ease: Power4.easeOut
        });
        TweenMax.to($('.kmu-partners'), 5, {
            scale: 1,
            alpha: 1,
            ease: Power4.easeOut
        });
        var setText = setInterval(function() {
            if (parseInt(tweenObj.part) == targetNum) {
                clearInterval(setText);
            }
            $('.kmu-partners').html(parseInt(tweenObj.part));

        }, 10);
    }

    function addCommas(value, length) {
        var money = String(value);
        var numArr = new Array();
        var decimal;

        if (money.indexOf(".") == -1) {
            numArr = money.split("");
            decimal = "";
        } else {
            var numStr = money.substr(0, money.indexOf("."));
            numArr = numStr.split("");
            decimal = money.substr(money.indexOf("."));
        }

        var commaMax = Math.floor(numArr.length / length);
        var commaStart = numArr.length % length;

        for (var i = 0; i < commaMax; i++) {
            numArr.splice((i * length) + i + commaStart, 0, (i == 0 && commaStart == 0) ? "" : ",");
        }

        return numArr.join("") + decimal;
    }
    
    $('.main-container2 .main-content .about-cont > li a').mouseenter(function() {
        if (deviceMode == 'desktop') {
            TweenMax.to( $('.about-img', this), 0.7, {scale: 1.2, ease:Power4.easeOut} );
            $('strong', this).css({color: '#ffffff'});
            TweenMax.to( $('h3', this.parentNode.parentNode), 0.7, {scale: 1.1, color: '#ffffff', ease:Power4.easeOut} );
            TweenMax.fromTo( $('.circle-box-line', this), 0.7, {scale: 1.07, opacity: 0}, {scale: 1, opacity: 1, ease:Power4.easeOut} );
        }
    }).mouseleave(function() {
        if (deviceMode == 'desktop') {
            TweenMax.to( $('.about-img', this), 0.5, {scale: 1, ease:Power4.easeOut} );
            $('strong', this).css({color: '#dddddd'});
            TweenMax.to( $('h3', this.parentNode.parentNode), 0.7, {scale: 1, color: '#dddddd', ease:Power4.easeOut} );
            TweenMax.to( $('.circle-box-line', this), 0.7, {scale: 1.07, opacity: 1, ease:Power4.easeOut} );
        }
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // Shortcuts
    //-------------------------------------------------------------------------------------------------------------------
    $('.shortcuts-cont .shortcuts-off').css({opacity: 0});
    
    $('.shortcuts-cont a').mouseenter(function() {
        if (!isMobile && deviceMode == 'desktop') {
            TweenMax.to( $('.shortcuts-off', this), 0.5, {opacity: 1} );
        }
    }).mouseleave(function() {
        if (!isMobile && deviceMode == 'desktop') {
            TweenMax.to( $('.shortcuts-off', this), 0.3, {opacity: 0} );
        }
    });
    
    //----------------------------------------------------------------------------------------------------------------
    // Social Media Swiper
    //----------------------------------------------------------------------------------------------------------------
    var swiperSns = new Swiper('.sns-container', {
        slidesPerView: 4,
        speed: 750,
        spaceBetween: 31,
        breakpoints: {
            991: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
    
    swiperSns.on('onSlideChangeEnd', function() {
        var sIdx = swiperSns.activeIndex;
        $('.sns-list > li').removeClass('on');
        if (sIdx < 4) {
            $('.sns-list > li:first').addClass('on');
        }
        else if (sIdx >= 4 && sIdx < 8) {
            $('.sns-list > li').eq(1).addClass('on');
        }
        else {
            $('.sns-list > li:last').addClass('on');
        }
    });
    
    $('.sns-list > li a').click(function() {
        var tIdx = $(this.parentNode).index();
        switch (tIdx) {
            case 0:
                swiperSns.slideTo(0, 500);
                break;
            case 1:
                swiperSns.slideTo(4, 500);
                break;
            case 2:
                swiperSns.slideTo(8, 500);
                break;
        }
        
        return false;
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // Announcements
    //-------------------------------------------------------------------------------------------------------------------
    $('.main-container5 .board-wrap .board-left > ul li > a').mouseenter(function() {
        TweenMax.to( $('p', this), 0.3, {x: 5, ease:Quint.easeOut} );
    }).mouseleave(function() {
        TweenMax.to( $('p', this), 0.3, {x: 0, ease:Quint.easeOut} );
    });
    
    //-------------------------------------------------------------------------------------------------------------------
    // KMU New & Hot
    //-------------------------------------------------------------------------------------------------------------------
    var swiperNewAndHot = new Swiper('.news-slider-pro', {
        slidesPerView: 1,
        pagination: '.sp-news-buttons',
        paginationClickable: true,
        touchEventsTarget: 'wrapper'
    });
    
    $('.news-cont li a').mouseenter(function() {
        $(this.parentNode).addClass('on');
        TweenMax.to( $('.img-line', this), 0.3, {opacity: 1} );
    }).mouseleave(function() {
        $(this.parentNode).removeClass('on');
        TweenMax.to( $('.img-line', this), 0.3, {opacity: 0} );
    });
    
    

    //-------------------------------------------------------------------------------------------------------------------
    // Window Resize
    //-------------------------------------------------------------------------------------------------------------------

    var oldWidth = window.innerWidth;
    $(window).resize(function() {
        var winWidth = window.innerWidth;
        /*
         * Phone
         */
        if (winWidth < PHONE_WIDTH) {
            deviceMode = 'phone';
            if (oldWidth >= PHONE_WIDTH && oldWidth < TABLET_WIDTH) { // 태블릿에서 핸드폰으로 변경
                //
            } else if (oldWidth >= TABLET_WIDTH) { // PC에서 핸드폰으로 변경
                visualAllStop();
                $('.contact-type span').css({width: '100%'});
            }
        }
        /*
         * Tablet
         */
        else if (winWidth >= PHONE_WIDTH && winWidth < TABLET_WIDTH) {
            //
            deviceMode = 'tablet';
            if (oldWidth < PHONE_WIDTH) { // 핸드폰에서 태블릿으로 변경
                //
            } else if (oldWidth >= TABLET_WIDTH) { // PC에서 태블릿으로 변경
                visualAllStop();
                $('.contact-type span').css({width: '100%'});
            }
        }
        /*
         * PC
         */
        else if (winWidth >= TABLET_WIDTH) {
            //
            deviceMode = 'desktop';
            if (oldWidth < PHONE_WIDTH) { // 핸드폰에서 PC로 변경
                //
            } else if (oldWidth < TABLET_WIDTH && oldWidth >= PHONE_WIDTH) { // 태블릿에서 PC로 변경
                //
            }
        }
        /*
         * All Device
         */
        if (isVideo) setVideoCenter();

        oldWidth = window.innerWidth;

    }).trigger('resize');

    //----------------------------------------------------------------------------------------------------------------
    // Window Scroll
    //----------------------------------------------------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $('.main-container1').height()*(2/3)) {
            startAboutKmuTween();
            if ($(window).scrollTop() >= $('.main-container1').height()) {
                $('#main-wrap').css({position: 'relative'});
                $('.main-shadow').hide();
            }
            else {
                $('#main-wrap').css({position: 'fixed'});
                $('.main-shadow').show();
            }
        }
        // 스크롤 다운할 경우 비주얼 자동슬라이드 중지 및 동영상 정지
        if ($(window).scrollTop() > 250) {
            visualAllStop();
        }
    });


});