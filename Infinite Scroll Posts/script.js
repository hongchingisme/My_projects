const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loading');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1 ;


//Async 非同步，會先去撈資料，撈到資料才會執行，不像是同步 Sync 會等撈到資料才執行

async function getPosts(){
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const data = await res.json();

    
    return data;
}

getPosts()