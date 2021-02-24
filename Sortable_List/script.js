const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

//設定漫畫的陣列
const comics = [
    'ONE PIECE 海賊王',
    '鬼滅之刃',
    '灌籃高手',
    '名偵探柯南',
    '七龍珠',
    '進擊的巨人',
    '火影忍者',
    '排球少年',
    '鋼之錬金術師',
    'JoJo的奇妙冒險',

]

//設定空的陣列

const listItems = [];

let dragStartIndex;

createList();

//插入物件表格進入 DOM

function createList(){
    [...comics].forEach(function(comicsname , index){
        
        const listItem = document.createElement('li');
        
        listItem.setAttribute('data-index' , index);

        listItem.innerHTML = ` 
        <span class="number">${index +1 }</span>
        <div class="draggable">
        <p class="comicsname">${comicsname}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });



  
}