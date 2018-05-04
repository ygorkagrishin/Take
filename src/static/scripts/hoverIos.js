(function () {
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || 
(navigator.userAgent.match(/iPad/i))) {
    
    var box = $('.some-box__table');

    if (box.hasClass('hover')) {
        box.removeClass('some-box__table_hover');
    }

    function handler() {
        box.hasClass('active') ? 
        box.removeClass('active') : box.addClass('active');
    }

    box.on('click', handler);

}
})();