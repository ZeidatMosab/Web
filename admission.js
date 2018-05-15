$(document).ready(function() {
    $("body").animate({
        scrollTop: 1050
    }, 1200);
    return false;
});

$(document).on("click", "#return-to-top", function() {
   $("body").animate(
     {
       scrollTop: 0
     },
     500
   );
   return false;
 });

 $("body").on("scroll",function(){
  var y = $("body").scrollTop();
  if (y > 150) {
    $("#return-to-top").fadeIn(500);
    $("body").addClass("body-scrolled");
  } else {
    $("body").removeClass("body-scrolled");
    $("#return-to-top").fadeOut(500);
  }s
});
