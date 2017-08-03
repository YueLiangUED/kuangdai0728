/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-03 10:43:11
*/

$(document).ready(function(){
    var winH = $(window).height();
    $('body').height(winH);

    $('.form-edit-select select').on('tap', function () {
    	$(this).css('color', '#333');
    });
    


    // tab切换
    $('.step-btn-group.wifi').on('click', '.step-btn', function () {
        $('.step-btn-group.wifi .step-btn').css({
            'background-color': '#fff',
            'color': '#348cf7'
        });
        $(this).css({
            'background-color': '#71f46b',
            'color': '#fff'
        });
        var index = $(this).index();
        if (index == 0) {
            $('.light-content').css('background-position','left bottom' );
        } else {
            $('.light-content').css('background-position','right bottom' );
        }
        var indexWifiBox = $('.setWifi-box')[index];
        $('.setWifi-box').hide();
        $(indexWifiBox).show();
    });
});