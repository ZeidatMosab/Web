
  $("body").on("scroll",function(){
    var y = $("body").scrollTop();
    if (y > 150) {
      $("#return-to-top").fadeIn(500);
      $("body").addClass("body-scrolled");
    } else {
      $("body").removeClass("body-scrolled");
      $("#return-to-top").fadeOut(500);
    }
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
  $(document).on("click", "#newBut", function() {
    var temp = document.getElementById("news");
    if (this.innerHTML == "Show More"){
     temp.style.visibility="visible";
     temp.style.height="220px";
    this.innerHTML = "Show Less";
    temp.style.animationDuration="1s";
    temp.style.animationName="Sfadin";
    }
    else{
      this.innerHTML = "Show More";
      temp.style.height="0px";
      temp.style.visibility="hidden";
      temp.style.animationDuration="1s";
      temp.style.animationName="Sfadout";
    }
    return false;
  });
  $(document).on("click", "#evBut", function() {
    var temp = document.getElementById("eve");
    if (this.innerHTML == "Show More"){
      temp.style.height="220px";
    this.innerHTML = "Show Less";
    temp.style.visibility="visible";
    temp.style.animationDuration="1s";
    temp.style.animationName="Sfadin";
    }
    else{
      this.innerHTML = "Show More";
      temp.style.animationDuration="1s";
      temp.style.animationName="Sfadout";
      temp.style.visibility="hidden";
      temp.style.height="0px";

      }

    return false;
  });
