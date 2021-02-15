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