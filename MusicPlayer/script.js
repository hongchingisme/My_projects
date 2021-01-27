const musicContainer = $('#music-container')
const playBtn = $('#play')
const prevBtn = $('#prev')
const nextBtn = $('#next')
const audio = $('#audio')
const progress = $('#progress')
const progressContainer = $('#progress-container')
const title = $('#title')
const cover =  $('#cover')


const songs = ['HelloGoodbye' ,'Onemoretime' ,'RainMusic'] ;



let songsIndex = 2;



loadsong(songs [songsIndex]);



function loadsong(song){
    title.text(song)
    audio.attr('src', `music/${song}.mp3`);
    cover.attr ('src',`img/${song}.jpg`)
}
playBtn.click(function () { 
    if(musicContainer.hasClass('play')){
        pauseSong();
    }else{
        playSong();
    }
    
});


function playSong() {
    $('#music-container').addClass('play');
    playBtn.find('i.fas').removeClass('fa-play');
    playBtn.find('i.fas').addClass('fa-pause');

    $('#audio').get(0).play();
}


function pauseSong() {
    $('#music-container').removeClass('play');
    playBtn.find('i.fas').addClass('fa-play');
    playBtn.find('i.fas').removeClass('fa-pause');

    $('#audio').get(0).pause();
}
