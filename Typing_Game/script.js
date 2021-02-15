const word = $('#word');
const text = $('#text');
const scoreEl = $('#score');
const timeEl = $('#time');
const endgameEl = $('#end-game-container');
const settingsBtn = $('#settings-btn');
const settings = $('#settings');
const settingsForm = $('#settings-form');
const difficultySelect = $('#difficulty');

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

// 寫入一個隨機文字的函式

function getRandomWord(){
  
return words[Math.floor(Math.random()* words.length)];
 
};

//讓時間倒數
//setInterval() 是固定延遲了某段時間之後，執行對應的程式碼，然後「不斷循環」。
const timeInterval = setInterval(updataTime , 1000);

// 將產生的文字顯示在 DOM 上

function addWordToDom(){
  randomWord = getRandomWord();
  word.html(randomWord);
};

addWordToDom();

// 寫入分數更新事件

function updataScore(){
  score++ ;

  scoreEl.html(score);
};



// 文字輸入的事件監聽

text.on('input' , function(e){
  const insertedText = text.val();
  
  if(insertedText === randomWord){  
    addWordToDom();
    updataScore();
    
    // 輸入後要清除 input 裡面的值，要不然會一直疊加
    text.val('') ;

  }
});

// 讓使用者進入網頁的時候，自動就從 input 開始
text.focus();

// 設定初始難度
// 抓取存在瀏覽器中的選項，如果之前沒有操作過會為 null 這時候就讓它是 medium
let difficulty = localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty'):'Medium' ;


difficultySelect.val(difficulty);

//給予設定紐功能，讓它把上面的難度視窗關開

settingsBtn.on('click' , function(){
  settings.toggle('hide');
});

//時間倒數功能
function updataTime (){
  time--;
  timeEl.html(time + 's');
  if(time === 0){
    //寫入 clearInterval() 來停止倒數
    clearInterval(timeInterval);
    gameOver();
  }
};

// 寫入遊戲結束的功能
// 使用 location.reload() 來將頁面刷新
function gameOver(){
  endgameEl.html( `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick = "location.reload()">Reload</button>
  ` );
  endgameEl.css('display' , 'flex');
};


// 設定難度選項調

settingsForm.on('change' , function(e){
  difficulty = difficultySelect.val();
  console.log(difficulty);
  localStorage.setItem('difficulty',difficulty);
  location.reload();
});

