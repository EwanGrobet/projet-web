// slide des photos d'exemples
//La méthode querySelector() permet de sélectionner le premier élément CSS qui possède la classe photoEx.
const photoEx = document.querySelector('.photoEx');

window.addEventListener('scroll', () => {
    //défini les paramètres du scroll et de la hauteur du client
    const { scrollTop, clientHeight } =
        document.documentElement

    const topElementToTopViewport = photoEx.getBoundingClientRect().top;
    //des que la class photoEx apparait dans le 80% du champs de vision de la page web, l'animation apparaît
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        photoEx.classList.add('active')
    }
})

const photoEx2 = document.querySelector('.photoEx2');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } =
        document.documentElement

    const topElementToTopViewport = photoEx2.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        photoEx2.classList.add('active')
    }
})

const musique = document.querySelector('.musique');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } =
        document.documentElement

    const topElementToTopViewport = musique.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
        musique.classList.add('active')
    }
})