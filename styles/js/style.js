function scrollToSection(getStarted){
    let scrollSection = document.getElementById(getStarted);
    if(scrollSection){
        scrollSection.scrollIntoView({behavior: 'smooth'});
    }
}