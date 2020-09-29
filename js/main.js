let widthWindow = $(document).width()
let generalBlockWidth =$('#general-block').width()
$(document).ready(()=>{
    $('.header_burger-menu_list').hide()
    $(window).resize(()=>{
        widthWindow = $(document).width();
        generalBlockWidth = $('#general-block').width()
        $('#menu-list').css('width', generalBlockWidth+30)
    
    })
})

$('#menu-btn').on('click', (evt)=>{
    $('#menu-list').slideToggle(300)
    $('.header-slider').toggleClass('blackout')
    $('.main').toggleClass('blackout')
    $('body').toggleClass('lock-scroll');
})

$(document).mouseup(function (e){
    let modal = $('#burger-menu');
    let search = $('#search')
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        $('#menu-list').hide()
        $('.header-slider').removeClass('blackout')
        $('.main').removeClass('blackout')
        $('body').removeClass('lock-scroll');
    }
    if (!search.is(e.target) && search.has(e.target).length === 0){
        $('#input-search').removeClass('input-show')
    }
});

$('#magnifying').on('click',()=>{
    widthWindow<=800 ? $('#input-search').toggleClass('input-show') : null
})

$('#menu-list').css('width', generalBlockWidth+30)
