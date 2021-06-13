$(function(){
    //bottom-to-top-function

    $('.bottom-to-top').click(function(){
        $('html, body').animate({scrollTop:0},2000);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.bottom-to-top').fadeIn(500);
        }
        else{
            $('.bottom-to-top').fadeOut(500);
        }


        if(scrolling > 200){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });


// animation scroll js
 $(".menu a").on('click', function(event) {
     if (this.hash !== "") {
       event.preventDefault();
       var hash = this.hash;
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){
         window.location.hash = hash;
       });
     }
   });

// preloader
$(window).on('load', function(){
    $('.preloader').delay(1500).fadeOut(400);
  });



  //count Down
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "February 14, 2022 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());



});