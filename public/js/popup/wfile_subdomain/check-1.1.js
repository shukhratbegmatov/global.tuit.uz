/**
 * 해당 사이트의 해당 경로에 띄워줘야할 팝업이 있는지 확인하고 layer로 팝업을 띄운다.
<script type='text/javascript' src='http://wfile.kookmin.ac.kr/js/jquery-1.6.4.min.js'></script>
<script type='text/javascript' src='http://wfile.kookmin.ac.kr/js/jquery-ui-1.8.13/jquery-ui-1.8.13.custom.min.js'></script>
<script type='text/javascript' src='http://wfile.kookmin.ac.kr/js/jquery.cookie.js'></script>
<script type='text/javascript' src='http://wfile.kookmin.ac.kr/js/jquery.dimScreen.js'></script>
<script type='text/javascript' src='http://wfile.kookmin.ac.kr/js/popup/check-euckr-1.1.js'></script>
<script type="text/javascript">
jQuery(function() {
	popupCheck(false, true, '[theme name]');
});
</script>
 */
$('head')
		.append(
				'<style type="text/css">\
		#popup-base p {margin:0px; padding:0px;}\
		#popup-base div.popup-item {background-color: white; display: inline; float: left; margin-left: 1px; border:1px solid #ccc;}\
		#popup-base div.popup-item div.popup-body {border-width: 1px; border-style: solid;}\
		#popup-base div.popup-item div.popup-footer {height: 20px; padding: 3px; text-align: right; font-size:12px; }\
		#popup-base div.popup-item div.popup-footer span.check {float: left;}\
		#popup-base div.popup-item div.popup-footer span input {vertical-align:middle;}\
		#popup-base div.popup-item div.popup-footer span.close {cursor:pointer;}\
		\
		#popup-base div.theme-black div.popup-body {border-color: black;}\
		#popup-base div.theme-black div.popup-footer {background-color: black; color: white;}\
		\
		#popup-base div.theme-white div.popup-body {border-color: white;}\
		#popup-base div.theme-white div.popup-footer {background-color: white; color: #666;}\
		</style>');
function popupCheck(useDimmed, useDraggable, className) {
	if(!className) className = 'theme-black';
	// 팝업할거 있는지 확인하고 띄우기.
	jQuery.getJSON('https://wfile.kookmin.ac.kr/aj/popup.php?callback=?', {
		'host' : location.hostname,
		'path' : location.pathname
	}, function(data, textStatus, jqXHR) {
		if (data && data.length) {
			window.popupCount = 0;
			var divObj = $(
					'<div id="popup-base" style="position: absolute; z-index: 1000"></div>')
					.appendTo(document.body);
			for ( var i = 0; i < data.length; i++) {
				showPopupLayer(divObj, data[i], useDimmed, useDraggable, className);
			}

			/*  위치지정 요청으로 인해 showPopupLayer 함수 안으로 이동
			if (window.popupCount > 0) {
				if( data.position == 'leftTop' ){
					divObj.css({
						'left' : 0,
						'top' : 0,
						'width' : divObj.width()
					});
				}else if( data.position == 'center' ){
					divObj.css({
						'left' : parseInt($(window).width() / 2 - divObj.width() / 2),
						'top' : parseInt($(window).height() / 2 - divObj.height() / 2),
						'width' : divObj.width()
					});

				}else if( data.position == 'bottom' ){
					divObj.css({
						'left' : parseInt($(window).width() / 2 - divObj.width() / 2),
						'top' : parseInt($(window).height() - divObj.height()),
						'width' : divObj.width()
					});
				}
				if (useDimmed) {
					jQuery.dimScreen(1000, 0.7, function() {
						divObj.fadeIn();
					});
				}
			}
			*/
		}
	});
}

/**
 * layer로 팝업시킴.
 *
 * item.id: id<br />
 * item.subject: 제목<br />
 * item.content: 내용<br />
 * item.width: 가로길이<br />
 * item.height: 세로길이<br />
 * item.block: X일 동안 보지 않기
 */
function showPopupLayer(divObj, item, useDimmed, useDraggable, className) {
	if (jQuery.cookie('kmu-pop_' + item.id)) {
		return;
	}
	item.width = parseInt(item.width);
	window.popupCount += 1;
	var html = '<div id="pop_'
			+ item.id
			+ '" class="popup-item ' + className + '">'
			+ '<div class="popup-body" style="width:'
			+ item.width
			+ 'px; height:'
			+ item.height
			+ 'px;">'
			+ item.content
			+ '</div>'
			+ '<div class="popup-footer">'
			+ (item.block > 0 ? ('<span class="check"><input type="checkbox" id="block-pop_'
					+ item.id
					+ '" value="'
					+ item.block
					+ '" /><label for="block-pop_'
					+ item.id
					+ '"> '
					+ item.block
					+ '일 동안 그만 보기</label></span>') : '')
			+ '<span class="close"><img src="images/common/btn/wfile_subdomain/btn_popup_close.gif" alt="닫기"/></span>'
			+ '</div></div>';
	divObj.append(html);
	var divPop = $('#pop_' + item.id).width((item.width + 2) + 'px').show();

	// 팝업 위치 지정
	if (window.popupCount > 0) {
		if( item.position == 'leftTop' ){
			divObj.css({
				'left' : 0,
				'top' : 0
				//'width' : divObj.width()	popup이 2개 이상일때 좌우 정렬이 안되어서 width값을 삭제함. 20130104 kjk
			});
		}else if( item.position == 'center' ){
			divObj.css({
				'left' : parseInt($(window).width() / 2 - divObj.width() / 2),
				'top' : parseInt($(window).height() / 2 - divObj.height() / 2)
				//'width' : divObj.width()
			});

		}else if( item.position == 'bottom' ){
			divObj.css({
				'left' : parseInt($(window).width() / 2 - divObj.width() / 2),
				'top' : parseInt($(window).height() - divObj.height())
				//'width' : divObj.width()
			});
		}else if( item.position.indexOf('X') >= 0) {
			var pos = jQuery.parseJSON(item.position);
			divObj.css({
				'left' : pos.X,
				'top' : pos.Y
			});
		}
		if (useDimmed) {
			jQuery.dimScreen(1000, 0.7, function() {
				divObj.fadeIn();
			});
		}
	}
	// 위치지정 끝

	if (useDraggable) {
		divPop.draggable();
	}

	$('div.popup-footer span.close', divPop).click(function() {
		var checkbox = $('#block-' + this.parentNode.parentNode.id);
		if (checkbox.is(':checked')) {
			var expDate = new Date();
			expDate.setTime(expDate.getTime() + (checkbox.val() * 24 * 60 * 60 * 1000));
			jQuery.cookie('kmu-' + this.parentNode.parentNode.id, true, {
				expires : expDate
			});
		}
		$(this.parentNode.parentNode).slideUp();
		window.popupCount--;
		if (window.popupCount <= 0) {
			if (useDimmed) {
				jQuery.dimScreenStop();
			}
		}
	});
}