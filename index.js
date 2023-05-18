let animate = document.querySelector(".item-10")

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY < 5600){
        animate.classList.remove("hidden");
    }
    // else{
    //     animate.classList.add("hidden");
    // }
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
            $(".navbar").css("background" , "black");
        }
        else{
            $(".navbar").css("background" , "none");  	
        }
    })
  })
