let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    showSlides(slideIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("lightbox-slide");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    // if(n!=0){
    //     slides[0].children[0].src=document.getElementsByClassName('gallery-item')[n-1].children[0].src;
    // }
    
}
