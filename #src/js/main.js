
// const scrollToTop = document.querySelector('.scroll-to-top');
function scrollToTop() {
    let scrollToTop = $('.scroll-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });
    scrollToTop.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 100);
    });
}

scrollToTop();


// PRELOADER
window.onload = function () {
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('loaded_hiding');
    setTimeout(function () {
        preloader.remove();
    }, 500);
}

// MODAL
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

barba.init({
})