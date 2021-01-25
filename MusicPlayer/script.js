const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtb = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover =  document.getElementById('cover');


// 歌曲的名稱

const songs = ['HelloGoodbye' ,'Onemoretime' ,'RainMusic'] ;

// 抓取歌曲位置

let songIndex = 0;

// 將歌曲的的資訊放進 DOM

loadsong(songs [songIndex]);

// 更新歌曲的細節

function loadsong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `img/${song}.jpg`
}

//點擊事件的函式
// 撥放音樂
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    audio.play();
}

// 暫停音樂
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// 點擊事件監聽

playBtn.addEventListener('click', function(){
    const isplaying = musicContainer.classList.contains('play');

    if(isplaying){
        pauseSong();
    } else{
        playSong();
    }
});