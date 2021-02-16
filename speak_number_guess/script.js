const msgEL = document.getElementById('msg');

const randomNum = getRandomNuber();

//產生亂數
function getRandomNuber(){
    return Math.floor(Math.random()*100) +1;
}

//設定語音辨識 api ，寫入 webkit 是為了相容性問題，有些瀏覽器不支援，所以要加入 webkit 讓他相容
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//定義語音辨識，當他辨識後產生新的物件
let recognition = new window.SpeechRecognition();

// 語音辨識 api 用法，讓瀏覽器判斷語音開始
recognition.start();

// 捕獲語音函式
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    console.log(msg);
}
//寫入事件監聽，要使用 result 才能返還語音辨識結果
recognition.addEventListener('result' ,onSpeak);