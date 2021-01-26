const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover =  document.getElementById('cover');


// 歌曲的名稱

const songs = ['HelloGoodbye' ,'Onemoretime' ,'RainMusic'] ;

// 抓取歌曲位置

let songIndex = 2;

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

// 寫入下一首歌功能

nextBtn.addEventListener('click' , nextSong );

function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1 ){
        songIndex  = 0;
    }

    loadsong(songs [songIndex]);
    playSong();
}


// 寫入上一首歌功能

prevBtn.addEventListener('click' , prevSong );

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadsong(songs [songIndex]);
    playSong();
}


// 抓取歌曲的時間

audio.addEventListener('timeupdate' , updateProgress);

// duration 為 js audio 當中 api 的用法，用來抓取音頻的長度
// currenTime 屬性會返還音頻當前位置 (秒針表示) 當設定該屬性時，播放會跳到指定位置
function updateProgress (e){
    const {duration , currentTime} = e.srcElement;
    progressPercent = (currentTime / duration) *100 ;
    progress.style.width = `${progressPercent}%`;   
}

// 點擊音樂條時，跳轉到當前 % 數的功能

progressContainer.addEventListener('click' ,setProgress);
// 使用 clientWidth 可以獲得當前點擊的 "子元素" 寬度
function setProgress (e){
//抓取目標總長度
    const width = this.clientWidth;
// 使用 offsetX 去抓取點擊到的 X 座標
    const clickX = e.offsetX;
// 定義 duration 為 音頻的長度
    const duration = audio.duration;
// 點擊之後音頻的位置 = 點擊的位置 / 總長度 * 音頻的長度
    audio.currentTime = (clickX /width) *duration;
}

//結束音樂，並且往下個音樂開始
//使用 api ended 事件，讓歌曲結束後自動執行函式 nextSong

audio.addEventListener('ended', nextSong);