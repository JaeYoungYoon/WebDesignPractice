$(document).ready(function () {
  $(".mainmenu > li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown();
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp();
    });

  var slideGroup = $("#imgslide > ul");
  var slides = slideGroup.find("li");
  var current = 0;

  slides.each(function (i) {
    $(this).css({ left: 100 * i + "%" });
  });

  function gotoSlide(i) {
    slideGroup.animate({ left: -100 * i + "%" }, 500);
    current = i;
  }

  setInterval(function () {
    var next = (current + 1) % 3;

    gotoSlide(next);
  }, 3000);

  $(".popup").click(function () {
    $(".layer").show();
  });

  $(".layer .close").click(function () {
    $(".layer").hide();
  });
});
