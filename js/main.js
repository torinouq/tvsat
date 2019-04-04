var link = '';
// var jsString = '[{"img":["http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/1","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/3","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/4","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/5","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/6","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/7","http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/12"]}]';

var jsString = '[{"img":["http://192.168.1.13/vid/tvone.webm"]}]';
var data = JSON.parse(jsString);


// $('#start').click(function() {
    $.each(data, function() {   
        for(var i=0; i < this.img.length; i++){
            var newNode = document.createElement('div');
            $('#container').append(newNode); 
            playVideo(newNode, i, this.img[i]);
        };
    });
// });    

function playVideo(div, number, visual) {
    var video = '<video-js id="tv' + number + '" class="video-js vjs-default-skin vjs-big-play-centered video-js-fullscreen" ' +
                'width="420" height="320"' +
                'data-setup=\'{ "controls": true, "autoplay": true, "preload": "auto", "muted": true }\'> ' +
                '<source src="' + visual + '" type="video/webm"/>' +
                '</video-js>';
    $(div).html(video);
    videojs('tv'+ number, {}, function () {});
}
   

// var video = array(videojs('tvone');



// video.src({
//     src:'http://tvsat:Apaansihl03@192.168.1.13:9981/stream/channelnumber/1', 
//     type:'video/mp4',
//     withCredentials: true

// });
// video.play();


// var stream_url = $(this).attr('data-stream'); 
 
// player = videojs('wiPlayer'); 
// player.src({ src: stream_url , type: "application/x-mpegURL", useCueTags: true }); 
// window.onOrientation(player,   'wiPlayer'); player.play();

// video.ready(function() {

    // setTimeout(() => {

        // this.play();

    // }, 3000);

// });