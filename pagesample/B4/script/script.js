
$(document).ready(function() {

  /* menu navigation */
  $(".mainmenu").hover(function(){
    $(".submenu, #subbg").slideDown(1000);
  }, function(){
    $(".submenu, #subbg").slideUp(1000);
});


  /*image slide*/
  var slidegroup = $("#imgslide > ul"),
      slides = slidegroup.find("li"),
      current = 0;

  slides.each(function(index){
    $(this).css({left : index * 100 + "%"});
  });

  function gotoSlide(index){
    slidegroup.animate({left : -100 * index + "%"},500);
    current = index;
  }

  setInterval(function(){
    var next = (current + 1) % 3;
    gotoSlide(next);
  },3000);

  /* modal layer */
  $(".modal").click(function(){
    $("#modallayer").show();
  });

  $(".close").click(function(){
    $("#modallayer").hide();
  }
  );

});
  
