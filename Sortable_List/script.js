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
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index' , index);

        listItem.innerHTML = ` 
        <span class="number">${index +1 }</span>
        <div class="draggable" draggable="true">
        <p class="comicsname">${comicsname}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });

    addEventListeners()
}

//寫入滑鼠拖曳事件
function addEventListeners(){
  //抓取 class DOM 進行操作
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(function(draggable){
    draggable.addEventListener('dragstart',dragStart);
  })

  dragListItems.forEach(function(item){
    item.addEventListener('dragover',dragOver);
    item.addEventListener('drop',dragDrop);
    item.addEventListener('dragenter',dragEnter);
    item.addEventListener('dragleave',dragLeave);
  })
}

function dragStart(){
  //console.log('Event' , 'dragstart');
  //使用 closest() 找到最接近的 li
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter(){
  //console.log('Event' , 'dragenter');
  this.classList.add('over');
}
function dragDrop(){
  //console.log('Event' , 'dragdrop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

//找到 抓取與放下的資訊並將兩者交換
function swapItems(fromIndex , toIndex){
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
function dragOver(e){
  //over 在這邊的預設事件會干擾到 Drop 所以將 over 關掉
  e.preventDefault();
  //console.log('Event' , 'dragover');
}
function dragLeave(){
  this.classList.remove('over');
  //console.log('Event' , 'dragleave');
}