const msgEL = $('#msg');

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

//寫入事件監聽，要使用 result 才能返還語音辨識結果
recognition.addEventListener('result' ,onSpeak);

// 捕獲語音函式
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
    
};

//將捕獲的語音數值寫入 DOM
function writeMessage(msg){

    msgEL.html(`
    <div>您的數字：</div>
    <span class="box">${msg}</span>
    `);
}

// 判斷捕獲的數字是否為數字，若不是就回傳錯誤訊息

function checkNumber(msg){
    const num = +msg;

    //確認是否為數字
    if(Number.isNaN(num)){
        msgEL.append('<div>這不是一個有效的數字</div>')
        return;
    }
    //超出或太小給予提示
    if(num>100 || num<1){
        msgEL.append('<div>數字在 1~100之間</div>')
        return;
    }
    //答對輸出恭喜訊息，若還沒會提示數字高低
    if(num === randomNum){
        $(window.document.body).html( `
        <h2>恭喜您，正確的數字就是${num}</h2>
        <button class="play-again" id="play-again">Play Again</button>
        `);
    }else if(num >randomNum){
        msgEL.append('<div>再低一點！</div>')
    }else{
        msgEL.append('<div>再高一點！</div>')
    }
}

//寫入事件結束事件，當結束的時候，我們執行函式，讓語音辨識重啟
recognition.addEventListener('end' , function(){
    recognition.start();
});

$(document.body).on('click' , function(e){
    if(e.target.id == "play-again"){
        window.location.reload()
    };
});