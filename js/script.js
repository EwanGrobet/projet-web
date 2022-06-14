// slide des photos d'exemples
const photoEx = document.querySelector('.photoEx');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} =
    document.documentElement

    const topElementToTopViewport =photoEx.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        photoEx.classList.add('active')
    }
})