$(document).ready(function(){
      
  // menu nav

  $(".mainmenu > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
  }).mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
  });

  // image slide
  var container = $("#imgSlide"),
      slideGroup = container.find("ul"),
      slides = slideGroup.find("li"),
      current = 0;
  slides.eq(1).hide();
  slides.eq(2).hide();
  
  setInterval(function(){
    var next = (current + 1) % 3;
    slides.eq(current).fadeOut();
    slides.eq(next).fadeIn();
    current = next;
  },3000);


  // tabmenu
  var button = $(".tabbtn > li");

  button.click(function(e){
    e.preventDefault;

    var target = $(this);
    var index = target.index();

    button.removeClass("active");
    target.addClass("active");

    if(index == 0){
      $(".tab2").hide();
      $(".tab1").show();
    }
    else{
      $(".tab1").hide();
      $(".tab2").show();
    }

  });

  // layer
  $(".popup").click(function(e){
      e.preventDefault();
      $("#layer").show();
    });

    $("#layer .close").click(function(e){
      e.preventDefault();
      $("#layer").hide();
    });

});