//carousel-1
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  $(".my-next-button").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  $(".my-previous-button").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});


//carousel-2
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: false,
    margin: 15,
    nav: false,
  });

  $(".next-button").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
    $(".next-button").css("color", "grey");
    $(".previous-button").css("color", "black");
  });

  $(".previous-button").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
    $(".my-previous-button").css("color", "grey");
    $(".next-button").css("color", "black");
  });

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0,
    },
    vimeo: {
      color: "f00",
    },
  });

  $(".fancybox").fancybox({ width: 1000, height: 550, autoSize: false });
});
$(document).ready(function () {
    $(".gallery-2").fancybox({
      transitionIn: "elastic",
      transitionEffect: "fade",
      transitionOut: "elastic",
      speedIn: 600,
      speedOut: 200,
      overlayShow: true,
      opacity: true,
      cyclic: true,
    });
  
    $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];
  });

  //login
  function validation(){
    let email = document.getElementById("email").value;

    if(email == ""){
      document.getElementById("mail").innerHTML = "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
    return false;
    }

  }

  //contact us
  let myForm = document.querySelector("#signUp");
let btnSubmit = document.querySelector(".btnSubmit");

myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    checkInputs()
});

function validationSecond() {
    let email = document.getElementById("email").value;
    let textarea = document.getElementById("textarea").value;

    if (email == "") {
      document.getElementById("mail").innerHTML = "No account found with that email.";
      document.getElementById("email").style.borderColor = "red";
    }

    if (textarea == "") {
      document.getElementById("textArea").innerHTML = "No account found with that email.";
      document.getElementById("textarea").style.borderColor = "red";

    }
}

// $(function(){
//   let navbar = $('.header');
//   $(window).scroll(function(){
//     if($(window).scrollTop() <=40){
//       navbar.removeClass('navbar-scroll');
//     }
//     else{
//       navbar.addClass('navbar-scroll')
//     }
//   });
// });