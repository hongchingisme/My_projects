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

