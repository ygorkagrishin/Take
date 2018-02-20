(function () {

    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || 
    (navigator.userAgent.match(/iPad/i))) {
        
        var currentElement = $('.some-box__table');

        currentElement.click(function () {

            var hoverSelector = currentElement.hasClass('some-box__table_hover'),
                active = currentElement.hasClass('some-box__table_is_active');

            if (!active) {
                currentElement.removeClass('some-box__table_hover');
                currentElement.addClass('some-box__table_is_active');
            }
            else {
                currentElement.removeClass('some-box__table_is_active');
            }
        });
    }
    
})();