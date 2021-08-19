let didScroll = false;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = document.querySelector('header').offsetHeight;
const currentTheme = localStorage.getItem("theme");
const nightmodeButton = document.querySelector(".switch");

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("darkmodecheckbox").checked = true;
}

nightmodeButton.addEventListener("click", function(event) {
    document.body.classList.toggle("dark-theme");
  
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
      document.getElementById("darkmodecheckbox").checked = true;
    } else {
        document.getElementById("darkmodecheckbox").checked = false;
    }

    localStorage.setItem("theme", theme);
    event.preventDefault();
});

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
        document.querySelector('header').classList.remove('nav-down');
        document.querySelector('header').classList.add('nav-up');
    } else {
        if(scrollTop + window.innerHeight < document.body.clientHeight) {
            document.querySelector('header').classList.remove('nav-up');
            document.querySelector('header').classList.add('nav-down');
        }
    }
        
    lastScrollTop = scrollTop;
}