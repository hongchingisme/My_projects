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



let songsIndex = 1;



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


nextBtn.click(function nextSong(){
    songsIndex++;
    if(songsIndex > songs.length -1 ){
        songsIndex  = 0;
    }

    loadsong(songs [songsIndex]);
    playSong();
})



prevBtn.click (function prevSong(){
    songsIndex--;
    if(songsIndex < 0){
        songsIndex = songs.length - 1;
    }

    loadsong(songs [songsIndex]);
    playSong();
});


audio.on('timeupdate', function() {
    const duration = this.duration;
    const currentTime = this.currentTime;
    const progressPercent = ((currentTime / duration) *100 );
    progress.width (`${progressPercent}%`); 
});

progressContainer.bind('click' ,function(e){
    const width = progressContainer.width()
    const clickX =  progressContainer.offset().left  
    const duration =  audio[0].duration;
    const page  = e.pageX;
    audio[0].currentTime= ((page-clickX) /width)*duration;
});


audio.on('ended', function(){
    songsIndex++;
    if(songsIndex > songs.length -1 ){
        songsIndex  = 0;
    }

    loadsong(songs [songsIndex]);
    playSong();
});





