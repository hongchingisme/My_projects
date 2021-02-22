const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const year = document.getElementById('year');
const loading = document.getElementById('loading');


//取得目前 Date 裡面的年份

const currentYear = new Date().getFullYear();

//設定明年 1月 1日的時間點

const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`)

// 抓取明年與現在時間的差異毫秒 (返還的值都是毫秒)
// 透過 / 1000 取得毫秒 /60取得分鐘 /60取得小時 /24 取得天數
function updataCountdown() {
    const currentTime = new Date();
    const diff  = newYearTime - currentTime ;
    
    const d = Math.floor(diff /1000 /60 /60 /24);
    const h = Math.floor(diff /1000 /60 /60) %24;
    const m = Math.floor(diff /1000 /60) %60;
    const s = Math.floor(diff /1000) %60;

    days.innerHTML= d;
    hours.innerHTML = h < 10 ? '0'+h : h;
    minutes.innerHTML = m< 10 ? '0'+m : m;
    seconds.innerHTML = s< 10 ? '0'+s : s;
};


//設定 每秒執行函式的 JS 內建函式 setInterval()
setInterval( updataCountdown , 1000);


//把下一年的年份更新到 DOM 裡面

year.innerHTML = currentYear;

//讀取圈圈設定，讓他在一秒後消失，並讓時間顯示

setTimeout(function (){
    loading.remove();
    countdown.style.display = 'flex'
    
},1000);