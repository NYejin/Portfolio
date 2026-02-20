$(function(){
    // mobile trigger 클릭
    $(".trigger").click(function(){
        $("nav").toggleClass('open')
        $(this).toggleClass('open')
    })

    // screen btns
    $(".screen-btns li").click(function(){
        let screenClass = $(this).text()
        $(this).parents(".screen-wrap").children("div").removeClass()
        $(this).parents(".screen-wrap").children("div").addClass("screen").addClass(screenClass)

        $(this).siblings("li").removeClass()
        $(this).addClass("btnOn")
        return false;
    })


    // tab
    $(".tab > li").click(function(){
        let index = $(this).index()
        $(".tab > li").removeClass()
        $(".tabcon > li").removeClass()

        $(this).addClass("tabOn")
        $(".tabcon > li").eq(index).addClass("on")
        return false;
    })


    // fullpage
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,

        navigation: true,
        navigationTooltips: ['Home', 'About ME', 'Skills', 'Portfolio', 'Photo Gallery', 'Contact'],
        navigationPosition: 'right',

        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        
        scrollBar: false,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollingSpeed: 1000,

        menu: '.menu',
        anchors: ['home', 'aboutme', 'skills', 'portfolio', 'gallery', 'contact'],

        responsiveWidth: 800,
    });
})