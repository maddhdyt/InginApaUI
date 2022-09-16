(function () {
  "use strict";

  var suhaWindow = $(window);

  // :: Preloader
  suhaWindow.on("load", function () {
    $("#preloader").fadeOut("1000", function () {
      $(this).remove();
    });
  });

  // :: Dropdown Menu
  $(".sidenav-nav")
    .find("li.suha-dropdown-menu")
    .append(
      "<div class='dropdown-trigger-btn'><i class='lni lni-chevron-down'></i></div>"
    );
  $(".dropdown-trigger-btn").on("click", function () {
    $(this).siblings("ul").stop(true, true).slideToggle(700);
    $(this).toggleClass("active");
  });

  // :: Hero Slides
  if ($.fn.owlCarousel) {
    var welcomeSlider = $(".hero-slides");
    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: true,
      center: true,
      margin: 0,
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
  }

  // :: Flash Sale Slides
  if ($.fn.owlCarousel) {
    var flashSlide = $(".flash-sale-slide");
    flashSlide.owlCarousel({
      items: 3,
      margin: 16,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      dots: false,
      nav: false,
      responsive: {
        1400: {
          items: 5,
        },
        992: {
          items: 5,
        },
        768: {
          items: 4,
        },
        480: {
          items: 4,
        },
      },
    });
  }
  // :: Flash Sale Slides
  if ($.fn.owlCarousel) {
    var flashSlide = $(".catagory-slide");
    flashSlide.owlCarousel({
      items: 4,
      margin: 3,
      loop: false,
      autoplay: false,
      smartSpeed: 800,
      dots: false,
      nav: false,
      responsive: {
        992: {
          items: 12,
          margin: 5,
        },
        768: {
          items: 10,
          margin: 5,
        },
        480: {
          items: 5,
          margin: 4,
        },
      },
    });
  }
  // :: Collection Slides
  if ($.fn.owlCarousel) {
    var collectionSlide = $(".collection-slide");
    collectionSlide.owlCarousel({
      items: 2,
      margin: 16,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      dots: false,
      nav: false,
      responsive: {
        1400: {
          items: 6,
        },
        992: {
          items: 5,
        },
        768: {
          items: 4,
        },
        480: {
          items: 4,
        },
      },
    });
  }

  // :: Products Slides
  if ($.fn.owlCarousel) {
    var productslides = $(".product-slides");
    productslides.owlCarousel({
      items: 1,
      margin: 0,
      loop: false,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      nav: true,
      navText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
    });
  }

  // :: Related Products Slides
  if ($.fn.owlCarousel) {
    var relProductSlide = $(".related-product-slide");
    relProductSlide.owlCarousel({
      items: 2,
      margin: 16,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      dots: false,
      nav: false,
      responsive: {
        1400: {
          items: 6,
        },
        992: {
          items: 5,
        },
        768: {
          items: 4,
        },
        480: {
          items: 3,
        },
      },
    });
  }

  // :: Counter Up
  if ($.fn.counterUp) {
    $(".counter").counterUp({
      delay: 150,
      time: 3000,
    });
  }

  // :: Prevent Default 'a' Click
  $('a[href="#"]').on("click", function ($) {
    $.preventDefault();
  });

  // :: Password Strength
  if ($.fn.passwordStrength) {
    $("#registerPassword").passwordStrength({
      minimumChars: 8,
    });
  }

  // :: Magnific Popup
  if ($.fn.magnificPopup) {
    $("#singleProductVideoBtn, #videoButton").magnificPopup({
      type: "iframe",
    });
  }

  // :: Review Image Magnific Popup
  if ($.fn.magnificPopup) {
    $(".review-image").magnificPopup({
      type: "image",
    });
  }

  // :: Cart Quantity Button Handler
  $(".quantity-button-handler").on("click", function () {
    var value = $(this).parent().find("input.cart-quantity-input").val();
    if ($(this).text() == "+") {
      var newVal = parseFloat(value) + 1;
    } else {
      if (value > 1) {
        var newVal = parseFloat(value) - 1;
      } else {
        newVal = 1;
      }
    }
    $(this).parent().find("input").val(newVal);
  });

  // :: Data Countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $(this).find(".days").html(event.strftime("%D"));
      $(this).find(".hours").html(event.strftime("%H"));
      $(this).find(".minutes").html(event.strftime("%M"));
      $(this).find(".seconds").html(event.strftime("%S"));
    });
  });

  // :: Tooltip
  var tooltipSuha = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipSuha.map(function (tooltip) {
    return new bootstrap.Tooltip(tooltip);
  });

  // :: Toast
  var toastSuha = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastSuha.map(function (toast) {
    return new bootstrap.Toast(toast);
  });
  toastList.forEach((toast) => toast.show());

  // :: Home Page Toast
  var toastSuha = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastSuha.map(function (toast) {
    return new bootstrap.Toast(toast);
  });
  toastList.forEach((toast) => toast.show());
})();

  // :: Back Button
  function goBack() {
    window.history.back();
}
