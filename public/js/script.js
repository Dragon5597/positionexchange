(function ($) {
  var $window = $(window);

  $window.on("load", function () {
    // Onload to check menu color background.
    if ($window.scrollTop() > 0 || $(".static-page").length) {
      $(".header-area").addClass("sticky");
      $(".classy-nav-container").removeClass("dark");
    } else {
      $(".header-area").removeClass("sticky");
      $(".classy-nav-container").addClass("dark");
    }
  });

  $("body").on("click", "#navbar-toggler", function () {
    if ($(".navbarToggler").hasClass("active")) {
      $(".navbarToggler").removeClass("active");
      $(".classy-menu").removeClass("menu-on");
    } else {
      $(".navbarToggler").addClass("active");
      $(".classy-menu").addClass("menu-on");
    }
  });

  // $("body").on("click", ".classycloseIcon", function () {
  //   $(".navbarToggler").removeClass("active");
  //   $(".classy-menu").removeClass("menu-on");
  // }

  // $window.on("ready", () => {
  //   $("#navbar-toggler").on("click", function () {
  //     if ($(".navbarToggler").hasClass("active")) {
  //       $(".navbarToggler").removeClass("active");
  //       $(".classy-menu").removeClass("menu-on");
  //     } else {
  //       $(".navbarToggler").addClass("active");
  //       $(".classy-menu").addClass("menu-on");
  //     }
  //   });

  //   $(".classycloseIcon").on("click", function () {
  //     debugger;
  //     $(".navbarToggler").removeClass("active");
  //     $(".classy-menu").removeClass("menu-on");
  //   });
  // });

  // :: Sticky Active Code
  $window.on("scroll", function () {
    if ($window.scrollTop() > 0 || $(".static-page").length) {
      $(".header-area").addClass("sticky");
      $(".classy-nav-container").removeClass("dark");
    } else {
      $(".header-area").removeClass("sticky");
      $(".classy-nav-container").addClass("dark");
    }
  });

  // :: Carousel Active Code
  if ($.fn.owlCarousel) {
    var welcomeSlider = $(".welcome_slides");

    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: true,
      navText: [
        "<i class='ti-angle-left'</i>",
        "<i class='ti-angle-right'</i>",
      ],
      dots: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });
    welcomeSlider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .removeClass("animated " + anim_name)
          .css("opacity", "0");
      });
    });
    $("[data-delay]").each(function () {
      var anim_del = $(this).data("delay");
      $(this).css("animation-delay", anim_del);
    });
    $("[data-duration]").each(function () {
      var anim_dur = $(this).data("duration");
      $(this).css("animation-duration", anim_dur);
    });
    welcomeSlider.on("translated.owl.carousel", function () {
      var layer = welcomeSlider
        .find(".owl-item.active")
        .find("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .addClass("animated " + anim_name)
          .css("opacity", "1");
      });
    });

    $(".client_slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 700,
      dots: true,
    });

    var dot = $(".client_slides .owl-dot");
    dot.each(function () {
      var index = $(this).index() + 1;
      if (index < 10) {
        $(this).html("0").append(index);
      } else {
        $(this).html(index);
      }
    });
  }

  // :: Gallery Menu Style Active Code
  $(".portfolio-menu button.btn").on("click", function () {
    $(".portfolio-menu button.btn").removeClass("active");
    $(this).addClass("active");
  });

  // :: ScrollUp Active Code
  if ($.fn.scrollUp) {
    $.scrollUp({
      scrollSpeed: 1500,
      scrollText: "Scroll Top",
    });
  }

  // :: onePageNav Active Code
  // if ($.fn.onePageNav) {
  //   $("#nav").onePageNav({
  //     currentClass: "active",
  //     scrollSpeed: 1500,
  //     easing: "easeOutQuad",
  //   });
  // }

  // :: Wow Active Code
  if ($window.width() > 767) {
    new WOW().init();
  }

  // :: Jarallax Active JS
  if ($.fn.jarallax) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }

  // :: PreventDefault a Click
  $("a[href='#']").on("click", function ($) {
    $.preventDefault();
  });

  // :: Accordian Active Code
  // (function () {
  //   var dd = $("dd");
  //   dd.filter(":nth-child(n+3)").hide();
  //   $("dl").on("click", "dt", function () {
  //     $(this).next().slideDown(500).siblings("dd").slideUp(500);
  //   });
  // })();

  // :: Nav Active Code
  if ($.fn.classyNav) {
    $("#dreamNav").classyNav({
      theme: "dark",
    });
  }

  // :: niceScroll Active Code
  if ($.fn.niceScroll) {
    $(".timelineBody").niceScroll();
  }

  $(".dropdown-toggle").dropdown();
})(jQuery);
