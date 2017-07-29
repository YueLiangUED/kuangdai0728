/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-26 11:03:58
*/

$(document).ready(function(){
    var winH = $(window).height();
    $('body').height(winH);

    $('.form-edit-select select').on('tap', function () {
    	$(this).css('color', '#333');
    });
});