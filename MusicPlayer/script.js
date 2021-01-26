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
    audio.attr(`src`, `music/${song}.mp3`);
    cover.attr ('src',`img/${song}.jpg`)
}

