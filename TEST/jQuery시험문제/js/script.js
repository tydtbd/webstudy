$(document).ready(function(){
//**********************************************************
// A. hover Menu 1안 내꺼
$("nav ul li").mouseover(function(){
  $(this).css("background-color","red").children("a").css("color","#FFF")
}),
$("nav ul li").mouseout(function(){
  $(this).css("background-color","#ccc").children("a").css("color","#000")
})

//**********************************************************

 // A. hover Menu 2안 & scroll
 //   var abc = function(){$(this).css("background","#F00")
 //             .children("a").css("color","#FFF")
 // }
 //   var def = function(){$(this).css("background","#ccc")
 //             .children("a").css("color","#000")
 // }
 //   var sc = function(){
 //      var scroll = $(this).index();
 //      var scrull = $(".content section").eq(scroll).offset().top;
 //      console.log(scrull)
 //      $("html,body").stop().animate({
 //        scrollTop:scrull
 //      },500)
 //      return false;
 //   }
 //   $("nav ul li").hover(abc,def).click(sc);

//**********************************************************

//  scroll
$('header nav li').click(function(){
  var idx = $(this).index();
  var scroll = $('.content section').eq(idx).offset().top;
   $('body,html').animate({
     scrollTop:scroll
   });
   return false; // click 이벤트가 아닐때는 return click 안써도됨.
})

//**********************************************************


// 슬라이드 배너 풀어 주신것
var idx = 0;

// var slide = {
//     Event:function(){
//         $('.slidebanner .next').click(function(){ //  슬라이드배너 안에 클래스명이 넥스트인 버튼을 클릭할때
//            var move = $('.slidebanner').width()  //  슬라이드배너의 넓이값을 구한다
//            $('.slidebanner ul li').eq(idx) //  슬라이드 배너안에 있는 모든 li들중 첫번째 eq(idx=0) li 의 이미지를 찾아 왼쪽으로 -500px 만큼 이동시킨다
//            .find('img')
//            .animate({
//                'left':-move
//            },1000)
//            .parent().next().find('img').css({  // 부모   다음   자식의 이미지를 찾는다
//               'left':move,
//                'display':'block'
//            }).animate({
//                'left':0
//            },1000)
//            idx++
//         })
//
//     }
// }
//**********************************************************

// 슬라이드 배너
var slide = {
  Event:function(){
    $(".slidebanner .next").click(function(){
      var move = $(".slidebanner").width()

      $(".slidebanner ul li").eq(idx).find("img").animate({"left":-move})
      .parent().next().find("img").css({"left":move,"display":"block"})
      .animate({"left":0})
      idx++
      if(idx == $(".slidebanner ul li").length){
        idx = 0;
        $(".slidebanner ul li").eq(idx).addClass("on").find("img")
        .css({"left":move,"display":"block"}).animate({"left":0})
      }
    });

    $(".slidebanner .prev").click(function(){
      var move = $(".slidebanner").width()

      $(".slidebanner ul li").eq(idx).find("img").animate({"left":move})
      .parent().prev().find("img").css({"left":-move,"display":"block"})
      .animate({"left":0})
      idx--
      if(idx < $(".slidebanner ul li").length-1){

        $(".slidebanner ul li").eq(idx).addClass("on").find("img")
        .css({"left":-move,"display":"block"}).animate({"left":0})
      }
    });

}
}

      $(function(){
      slide.Event()

})
//**********************************************************

// Fade Banner
 var idxx;
 $(".fadebanner li a").click(function(){

     idxx = $(this).parent().index();
     $(".fadebanner li.on").removeClass().find("img").fadeOut(4800);

     $(".fadebanner li").eq(idxx).addClass("on").find("img").fadeIn();
       return false;
 })

//**********************************************************

// SNS Move List Gellay 내꺼
 var aaa = ["Uv554B7YHk4","4z4sN05-xIs","1ELGunbuvqc","uBezVQweeUE","q6f-LLM1H6U"]

 $(".movie-view li").click(function(){
   var bbb = $(this).index();
   var url = "https://www.youtube.com/embed/"+aaa[bbb]+"?rel=0&amp;controls=0&amp;showinfo=0"
   $(".view iframe").attr("src",url)

    return false;
 })

//**********************************************************

 // SNS Move List Gellay 선생님꺼
 // $('.movie-view li a').click(function(){
 //
 //     var movecode = $(this).attr('href');
 //     var url = "https://www.youtube.com/embed/"+movecode+"?rel=0&amp;controls=0&amp;showinfo=0"
 //     $('.movie-view iframe').attr('src',url)
 //
 //
 //
 //     return false
 // })

//**********************************************************

 //  Wing banner

 $(window).scroll(function(){
   $(".wing").stop().animate({
     top:$(this).scrollTop()
   })
 })

//**********************************************************

 //  Layout Popup

  $(".btngroup button").click(function(){
    blaind()
   $(this).next("div").css({
     "width":"300px",
     "height":"300px",
     "border":"1px #F00 solid",
     "display":"block",
     "position":"absolute",
     "left":"0",
     "margin-left":"50%",
     "background":"#FFF"
   }).animate({"top":7050})

 });

  $(".btngroup div").prepend("<button class='close'>닫기</button>")
 function blaind(){
   $("body").prepend("<div class='blaind'></div>")
  $(".blaind").fadeTo(1000,0.5)
 }


//**********************************************************

})
