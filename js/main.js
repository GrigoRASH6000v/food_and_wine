
$(document).ready(()=>{
    $('.header_burger-menu_list').hide()
})



$('#menu-btn').on('click', (evt)=>{
    $('#menu-list').slideToggle(300)
    $('.header-slider').toggleClass('blackout')
    $('.main').toggleClass('blackout')
    $('body').toggleClass('lock-scroll');
})


    
$(document).mouseup(function (e){
    var modal = $("#burger-menu");
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        $('#menu-list').hide()
        $('.header-slider').removeClass('blackout')
        $('.main').removeClass('blackout')
        $('body').removeClass('lock-scroll');
    }
});

