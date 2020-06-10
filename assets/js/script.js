$(document).ready(function () {
    // <div id="slider"></div>
    (() => {
        var slider = document.getElementById('slider');
        if (slider) {
            noUiSlider.create(slider, {
                start: [20, 80],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            });
        }


        var sliders = document.querySelectorAll(".s-slider");
        if (sliders) {
            for (var i = 0, len = sliders.length; i < len; i++) {
                var slider = sliders[i];
                if (slider.classList.contains("-togrid")) {
                    var flkty = new Flickity(slider, {
                        cellAlign: "left",
                        contain: true,
                        wrapAround: true,
                        imagesLoaded: true,
                        watchCSS: true
                    });
                } else {
                    var flkty = new Flickity(slider, {
                        cellAlign: "left",
                        contain: true,
                        wrapAround: true,
                        imagesLoaded: true
                    });
                }
            }
        }

    })();
    // Slider

    $('.menuToggle').click(function () {

        $('.wrapper').toggleClass('mm-open');
    });

    $('.filterToggle').click(function (e) {
        e.preventDefault();
        $('.filter-popup').toggleClass('open');
    });

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });
});