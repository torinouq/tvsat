var video = Array(
                videojs("tvone"),
                videojs("indosiar"),
                videojs("jaktv")
            );

video[0].src({
    src:'http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/1', 
    type:'video/mp4',
    withCredentials: true
});

video[1].src({
    src:'http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/12', 
    type:'video/mp4',
    withCredentials: true
});

video[2].src({
    src:'http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/3', 
    type:'video/mp4',
    withCredentials: true
});




video[0].play();
video[1].play();
video[2].play();