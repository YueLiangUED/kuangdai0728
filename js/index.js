/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-31 10:02:40
*/

$(document).ready(function(){
    var winH = $(window).height();
    $('body').height(winH);

    $('.form-edit-select select').on('tap', function () {
    	$(this).css('color', '#333');
    });
    

    // 链接跳转
    $('.step-btn.enter-step').on('click', function () {
        window.location.href = 'step_04.html';
    });
    $('.step-btn.enter-step-return').on('click', function () {
        history.go(-1);
    });
    $('.step-btn.enter-video').on('click', function () {
        window.location.href = 'videoQ_04.html';
    });
    $('.step-btn.enter-step-return').on('click', function () {
        history.go(-1);
    });
});