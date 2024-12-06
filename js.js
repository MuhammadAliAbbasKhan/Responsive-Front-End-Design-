

my_cursor = document.querySelector("#cursor")
my_cursor_blur = document.querySelector("#cursor_blur")
document.addEventListener("mousemove" , function(details){
    my_cursor.style.left  =   `${details.x +30}px`
    my_cursor.style.top  =   `${details.y}px`
    my_cursor_blur.style.left  =   `${details.x-250}px`
    my_cursor_blur.style.top  =   `${details.y-250}px`

})


var nav_h4s  = document.querySelectorAll("#nav h4")

nav_h4s.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
            my_cursor.style.scale = 3  ;
            my_cursor.style.border =  "0.1px solid #fff" ;
            my_cursor.style.backgroundColor = "transparent" ;
    })
    elem.addEventListener("mouseleave" , function(){
        my_cursor.style.scale = 1  ;
        my_cursor.style.border =  "0px solid #95C11E" ;
        my_cursor.style.backgroundColor = "#95C11E" ;
    })
})


gsap.to("#nav" , {
    backgroundColor : "black" ,
    duration  : 0.5         ,
    height    : "110px"    ,
    scrollTrigger :  {
         trigger : "#nav" , 
         scroller : "body" , 
         start   : "top -10%" ,
         end   : "top -11%" , 
         scrub : 1
    }
})

gsap.to("#main" , {
    backgroundColor : "black" ,
    scrollTrigger :  {
         trigger : "#main" , 
         scroller : "body" , 
         start   : "top -25%" ,
         end   : "top -70%" , 
         scrub : 2
    }
})


gsap.from("#about_us img , #about_us_p" , {
    y : 50 ,
    duration  : 1         ,
    opacity : 0  , 
    stagger : 0.5 , 
    scrollTrigger :  {
         trigger : "#about_us" , 
         scroller : "body" , 
         start   : "top 60%" ,
         end   : "top 55%" , 
         scrub : 2 
    }
})


gsap.from(".card" , {
    scale  : 1.1 ,
    duration  : 1         ,
    opacity : 0  ,  
    scrollTrigger :  {
         trigger : ".card" , 
         scroller : "body" , 
         start   : "top 70%" ,
         end   : "top 65%" , 
         scrub : 2 
    }
})



gsap.from("#colon1" , {
    y : -70 ,
    x : -70 ,
    scrollTrigger :  {
         trigger : "#colon1" , 
         scroller : "body" , 
         start   : "top 55%" ,
         end   : "top 45%" , 
         scrub : 5 
    }
})


gsap.from("#colon1" , {
    y : -70 ,
    x : -70 ,
    scrollTrigger :  {
         trigger : "#colon1" , 
         scroller : "body" , 
         start   : "top 35%" ,
         end   : "top 55%" , 
         scrub : 3 
    }
})
gsap.from("#colon2" , {
    y : 70 ,
    x : 70 ,
    scrollTrigger :  {  
         trigger : "#colon2" , 
         scroller : "body" ,
         start   : "top 15%" ,
         end   : "top 35%" , 
         scrub : 5 
    }
})




gsap.to("#page4 h1" , {
    y : -70 ,
    scrollTrigger :  {  
         trigger : "#page4 h1" , 
         scroller : "body" ,
         start   : "top 85%" ,
         end   : "top 70%" , 
         scrub : 3 
    }
})


