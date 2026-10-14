    var sound = new Howl({
      src: ['Audio/IfOnlyIWasaPoet(SLCTRemix).mp3'],
    });

    const BotonPlay = document.querySelector('.play-button')
    BotonPlay.addEventListener('click', function() {
      sound.play();
    });

    fetch('musicoide.json')
    .then(response => response.json())
    .then(datos => {
      console.log(datos);
    });