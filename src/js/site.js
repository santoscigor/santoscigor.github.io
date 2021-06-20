let didScroll = false;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = document.querySelector('header').offsetHeight;


window.onscroll = function() {
    didScroll = true;
};

window.addEventListener('scroll', function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
}, 250);

const hasScrolled = () => {
    const scrollTop = window.scrollY;

    if(Math.abs(lastScrollTop - scrollTop) <= delta)
        return;

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
        // Scroll Down
        document.querySelector('header').classList.remove('nav-down');
        document.querySelector('header').classList.add('nav-up');
    } else {
        // Scroll Up
        if(scrollTop + window.innerHeight < document.body.clientHeight) {
            document.querySelector('header').classList.remove('nav-up');
            document.querySelector('header').classList.add('nav-down');
        }
    }
        
    lastScrollTop = scrollTop;
}