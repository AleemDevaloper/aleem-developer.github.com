$('.icon').click(function () {
    $('.click').css({"display":"block",});

    $(this).click(function () {
            $('.click').css({"display":"none",});
            $(this).click(function () {
                $('.click').css({"display":"block",});
                $(this).click(function () {
                    $('.click').css({"display":"none",});
                    $(this).click(function () {
                        $('.click').css({"display":"block",});
                        $(this).click(function () {
                            $('.click').css({"display":"none",});
                            $(this).click(function () {
                                $('.click').css({"display":"block",});
                                $(this).click(function () {
                                    $('.click').css({"display":"none",});
                                    $(this).click(function () {
                                        $('.click').css({"display":"block",});
                                        $(this).click(function () {
                                            $('.click').css({"display":"none",});
                                            $(this).click(function () {
                                                $('.click').css({"display":"block",});
                                                $(this).click(function () {
                                                    $('.click').css({"display":"none",});
                                                    $(this).click(function () {
                                                        $('.click').css({"display":"block",});
                                                        $(this).click(function () {
                                                            $('.click').css({"display":"none",});
                                                            $(this).click(function () {
                                                                $('.click').css({"display":"block",});
                                                                $(this).click(function () {
                                                                    $('.click').css({"display":"none",});
                                                                    $(this).click(function () {
                                                                        $('.click').css({"display":"block",});
                                                                    
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})   
window.addEventListener("scroll" , function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky" , window.scrollY > 0);
})


$(document).ready(function(){
    $('.c-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 2800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});


       
      
    