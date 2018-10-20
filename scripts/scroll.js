var hd = $( "#header" );
    hds = $( ".header-scrolled");
    

$(window).scroll(funtion() {
    if( $(this).scrollTop() > 0){
        hd.addClass(hds);
    } else {
        hd.removeClass(hds);
    }
});