document.getElementById('pause-play').addEventListener('click',function(){
    document.getElementById('carouselExampleCaptions').setAttribute('data-bs-ride','false');
    this.setAttribute('src','assets/images/play-circle.svg');
})