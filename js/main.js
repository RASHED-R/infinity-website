/*-----------------------------------------------------------------------------------

    Theme Name: Flyweb - Web Design Agency HTML Template
    Description: Web Design Agency HTML Template
    Author: Website Design Templates
    Version: 1.1
        
    ---------------------------------- */

! function (t) {
    "use strict";
    var s = t(window);

    function a() {
        var e, a;
        e = t(".full-screen"), a = s.height(), e.css("min-height", a), e = t("header").height(), a = t(".screen-height"), e = s.height() - e, a.css("height", e)
    }
    t("#preloader").fadeOut("normall", function () {
        t(this).remove()
    }), s.on("scroll", function () {
        var e = s.scrollTop(),
            a = t(".navbar-brand img"),
            o = t(".navbar-brand.logodefault img");
        e <= 50 ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "img/logos/logo-inner.png")) : (t("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "img/logos/logo.png")), o.attr("src", "img/logos/logo.png")
    }), s.on("scroll", function () {
        500 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn(400) : t(".scroll-to-top").fadeOut(400)
    }), t(".scroll-to-top").on("click", function (e) {
        e.preventDefault(), t("html, body").animate({
            scrollTop: 0
        }, 600)
    }), t(".parallax,.bg-img").each(function (e) {
        t(this).attr("data-background") && t(this).css("background-image", "url(" + t(this).data("background") + ")")
    }), t(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), s.resize(function (e) {
        setTimeout(function () {
            a()
        }, 500), e.preventDefault()
    }), a(), t(document).ready(function () {
        t(".blog-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), t(".testimonial-carousel3").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            dots: true,
            margin: 0,
            autoplay: !0,
            thumbs: !0,
            thumbsPrerendered: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), t(".testimonial-carousel-02").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }), t(".testimonial-carousel5").owlCarousel({
            items: 1,
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            margin: 0,
            smartSpeed: 1500
        }), t(".team-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: 1,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".service-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), t(".service-carousel-02").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: !1,
            center: !1,
            margin: 40,
            responsive: {
                0: {
                    items: 1,
                    dots: !0,
                    nav: !1
                },
                768: {
                    items: 2,
                    dots: !0,
                    nav: !1
                },
                992: {
                    items: 2,
                    dots: !0,
                    nav: !1
                },
                1200: {
                    items: 3,
                    dots: !0,
                    nav: !1
                },
                1400: {
                    items: 3,
                    dots: !1,
                    nav: !0
                }
            }
        }), t(".clients02-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), t(".slider-fade1").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            nav: !1,
            autoplay: !0,
            smartSpeed: 1500,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                576: {
                    items: 1,
                    dots: !1
                },
                768: {
                    items: 1,
                    dots: !0
                }
            }
        }), t(".slider-fade3").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            nav: !1,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: !0,
            smartSpeed: 1500,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: {
                    nav: !0,
                    dots: !1
                }
            }
        }), t(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !1,
            smartSpeed: 500
        }), t(".slider-fade1").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            t("p").removeClass("animated fadeInUp"), t("h1").removeClass("animated fadeInUp"), t("a").removeClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")
        }), t(".slider-fade3").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            t(".small-title").removeClass("animated fadeInUp"), t(".title").removeClass("animated fadeInUp"), t(".btn-style1").removeClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find(".small-title").addClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find(".title").addClass("animated fadeInUp"), t(".owl-item").not(".cloned").eq(e).find(".btn-style1").addClass("animated fadeInUp")
        }), t(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), t(".countdown").countdown({
            date: "01 Mar 2026 00:01:00",
            format: "on"
        }), t(".current-year").text((new Date).getFullYear())
    }), s.on("load", function () {
        t(".portfolio-gallery").lightGallery(), t(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);