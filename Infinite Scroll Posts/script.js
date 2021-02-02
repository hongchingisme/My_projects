const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1 ;


//Async 非同步，會先去撈資料，撈到資料才會執行，不像是同步 Sync 會等撈到資料才執行
// 使用 fetch 抓取 api 後印出 json
// await 則是可以暫停非同步函式的運行,並且等待 Promise 物件執行操作，等 Promise 解析後，並繼續此 Async 的執行
async function getPosts(){
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const data = await res.json();

    
    return data;
}

// 將抓到的 posts 放到 DOM 

async function showPosts(){
    const posts = await getPosts();

    posts.forEach(function(post){
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        ` ;

        postContainer.appendChild(postEl);

    }
    )}

// 顯示一開始的頁面
showPosts()

function showLoading(){
    loading.classList.add('show')

    setTimeout(function(){
        loading.classList.remove('show')
        
        setTimeout(function(){
            page++;
            showPosts();
        },300)
    },1000)
}

//寫入一個 滾動事件，先抓取滾動的值
//scrollTop:內容被捲動的距離
//scrollHeight:元素所包含的「子元素」的「完整」高度，其中包含了超出捲軸之外的部分的寬度與高度。
//clientHeight :元素所包含的「子元素」的高度，其中包含了padding，但不包含邊界及捲軸。
//這裡是當我們捲動的距離加上元素本身的距離大於等於整個元素包含全部的高度 -5 時，就會觸發 showLoading 事件

window.addEventListener('scroll', function(){
    const top = window.document.documentElement.scrollTop;
    const SH = window.document.documentElement.scrollHeight;
    const CH = window.document.documentElement.clientHeight;
    if(top + CH >= SH -30){
      showLoading();
    }

    
}) ;


filter.addEventListener('input',filterPosts)

function filterPosts(e){
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(function(post){
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
        
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = 'flex';
        }else{
            post.style.display = 'none';
        }
    });
}

