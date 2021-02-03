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

    //JQuery 要使用 appendTo (要新增的位置)才可以把欲新增的元素加到 DOM 當中
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

    

    $(window).on('scroll', function(){
        const top = $(window).scrollTop();
        const SH = $(window).height();  
        const CH = $(document).height();
        if(top + CH >= SH -30){
            showLoading();
         
        }
    
    }) ;

   
    function showLoading(){
        loading.addClass('show')
    
        setTimeout(function(){
            loading.remove('show')
            
            setTimeout(function(){
                page++;
                showPosts();
            },300)
        },1000)
    }