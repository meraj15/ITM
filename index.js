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

//   document.querySelector(".item-first").addEventListener("mouseover",function(){
//     let vara= document.querySelector(".item-first");
//     if(mouseover === vara){
//  vara.style.height = "30rem";
//     }else{
//  vara.style.height = "22rem";
//     }
//   })
// let display = document.querySelector(".item-3-container-hover");
//   document.querySelector(".item-3-btn").addEventListener("click",function(){
// display.classList.remove("hidden");
//   })

//   document.querySelector(".item-3-btn").addEventListener("dblclick",function(){
//     display.classList.add("hidden");
//       })


  


