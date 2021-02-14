const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

// 初始的文字
let randomWord;
// 初始的分數
let score = 0 ;
// 初始的時間
let time = 10;

// 讓使用者進入網頁的時候，自動就從 input 開始
text.focus();

//讓時間倒數
//setInterval() 是固定延遲了某段時間之後，執行對應的程式碼，然後「不斷循環」。
const timeInterval = setInterval(updataTime , 1000);

// 寫入一個隨機文字的函式
// 利用產生隨機亂數並且使用 floor 可以將亂數上下取整數並且乘上陣列長度達成效果
function getRandomWord(){
  
  return words[Math.floor(Math.random()* words.length)];
 
};

// 將產生的文字顯示在 DOM 上

function addWordToDom(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

addWordToDom();


// 寫入分數更新事件

function updataScore(){
  score++ ;

  scoreEl.innerHTML = score;
};

//時間倒數功能
function updataTime (){
  time--;
  timeEl.innerHTML = time + 's';
  if(time === 0){
    //寫入 clearInterval() 來停止倒數
    clearInterval(timeInterval);
    //寫入遊戲結束的功能  
    gameOver();
  }
};

// 寫入遊戲結束的功能
// 使用 location.reload() 來將頁面刷新
function gameOver(){
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick = "location.reload()">Reload</button>
  ` ;
  endgameEl.style.display = "flex";
};

// 文字輸入的事件監聽

text.addEventListener('input' , function(e){
  const insertedText = e.target.value;
  
  if(insertedText === randomWord){  
    addWordToDom()
    updataScore()
    // 輸入後要清除 input 裡面的值，要不然會一直疊加
    e.target.value = '';

    //每當玩家輸入成功就加5秒鐘當作獎勵

    time = time +5;
    updataTime();
  }
});


//給予設定紐功能，讓他把上面的難度視窗關開

settingsBtn.addEventListener('click' , function(){
  settings.classList.toggle('hide')
})