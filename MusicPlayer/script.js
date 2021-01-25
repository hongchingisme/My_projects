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