function scrollToSection(getStarted){
    let scrollSection = document.getElementById(getStarted);
    if(scrollSection){
        scrollSection.scrollIntoView({behavior: 'smooth'});
    }
}

function changeBg(){
    const seat = document.getElementById('A1');
     seat.style.backgroundColor = "Green";
}

function resetClr(){
    const seat = document.getElementById('A1');
    seat.style.backgroundColor = ""; 
}