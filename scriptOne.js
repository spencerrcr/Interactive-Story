document.addEventListener('DOMContentLoaded', (event) => {
    let seraphineAttribs = document.querySelectorAll('.seraphineAttrib');
    let ladyButtonHover = document.querySelector('#ladyButtonHover');
    let backgroundImage = document.querySelector('.ladySeraphine');

    // Initially hide all seraphineAttrib elements
    seraphineAttribs.forEach(attrib => attrib.style.display = 'none');

    ladyButtonHover.addEventListener('click', () => {
        let anyVisible = Array.from(seraphineAttribs).some(attrib => attrib.style.display === 'block');
        if (anyVisible) {
            seraphineAttribs.forEach(attrib => attrib.style.display = 'none');
            backgroundImage.style.filter = 'brightness(100%)';
        } else {
            seraphineAttribs[0].style.display = 'block';  // Show the first slide
            backgroundImage.style.filter = 'brightness(50%)';
            slideIndex = 1;  // Reset the slideIndex for the slideshow
        }
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        if (n > seraphineAttribs.length) {slideIndex = 1}
        if (n < 1) {slideIndex = seraphineAttribs.length}
        for (i = 0; i < seraphineAttribs.length; i++) {
            seraphineAttribs[i].style.display = "none";
        }
        seraphineAttribs[slideIndex-1].style.display = "block";
    }
});
