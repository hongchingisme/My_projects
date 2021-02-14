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

// 寫入一個隨機文字的函式
// 利用產生隨機亂數並且使用 floor 可以將亂數上下取整數並且乘上陣列長度達成效果
function getRandomWord(){
  
  return words[Math.floor(Math.random()* words.length)]
 
}

// 將產生的文字顯示在 DOM 上

function addWordToDom(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDom();