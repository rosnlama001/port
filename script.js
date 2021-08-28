$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 50){
            $(".navBar").addClass("sticky");
            $('.home').addClass("stick");
            $('.about .aboutContent .left img').removeClass('nonsticky');
            $('.about .aboutContent .left img').addClass('sticky');
        }else{
            $(".navBar").removeClass("sticky");
            $('.home').removeClass("stick");
            $('.about .aboutContent .left img').removeClass('sticky');
            $('.about .aboutContent .left img').addClass('nonsticky');
        }
    })
    
    // toggle menu/navBar script
    $(".menuBtn").click(()=>{
        $('.navBar .menu').toggleClass('active');
        $('.menuBtn i').toggleClass('active');
    })
})
