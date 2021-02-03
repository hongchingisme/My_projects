const postContainer = $('#post-container');
const loading = $('.loader');
const filter = $('#filter');

let limit = 5;
let page = 1 ;

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

    console.log(posts)
    //JQuery 要使用 appendTo 才可以把欲新增的元素加到 DOM 當中
    posts.forEach(function(post){
        const postEl = $('<div></div>').appendTo(postContainer);
        postEl.addClass('post');
        postEl.html( `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        ` );
    }
    )}

    showPosts()