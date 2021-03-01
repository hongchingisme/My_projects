const draggable_list = $('#draggable-list');
const check = $('#check');

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
//賦予每個 data 一個隨機的數值
function createList(){
  [...comics]
  //返還一個只有原陣列的 value陣列
     //賦予陣列內每個數值一個隨機數值
     .map(function (data) {
      return {
        value: data,
        sort: Math.random(),
      };
    })
    //使用sort 可以用 a - b 自動排序
  .sort(function(a,b){
      return a.sort - b.sort;
  })
  //將排序好的陣列，只抓取他的value
  .map(function (data) {
      return data.value;
    })
  .forEach(function(comicsname , index){
    const listItem = $('<li></li>').appendTo(draggable_list)
    listItem.attr('data-index' , index);
    listItem.html( ` 
    <span class="number">${index +1 }</span>
    <div class="draggable" draggable="true">
    <p class="comicsname">${comicsname}</p>
    <i class="fas fa-grip-lines"></i>
    </div>
    `) 
    listItems.push(listItem);
});
}