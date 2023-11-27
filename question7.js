// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

/*
const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const randomIpsumPosts = document.querySelector('#posts');

async function getPosts() {
 const response = await fetch(POST_URL);
 const data = await response.json();

 data.forEach((post) => {
    if (post.userId === 1) {
      const articleEl = document.createElement("div");
      articleEl.setAttribute("class", "article");
      articleEl.innerHTML += `
        <div class = "articleText">
        <h2>${post.title}</h2>
        <p>${post.body}</p></div>`;
        

    randomIpsumPosts.appendChild(articleEl);
    }
 });
}
getPosts();
*/

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold    
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const randomIpsumPosts = document.querySelector('#posts');

const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments';
const randomComments = document.querySelector('#postsWithComments');



async function getPosts() {
 const response = await fetch(POST_URL);
 const data = await response.json();

 data.forEach((post) => {
    if (post.userId === 1) {
      const articleEl = document.createElement("div");
      articleEl.setAttribute("class", "article");
      articleEl.innerHTML += `
        <div class = "articleText">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <i id="myClick-${post.id}" onclick="getComments(${post.id})">Show Comments:</i>
        <div class="zxc" id="hello-${post.id}"></div>
        </div>`;
        

    randomIpsumPosts.appendChild(articleEl);
    }
 });
}

//Denna del fungerar tyvärr inte :C jag gjorde ett försök,
getPosts();

async function getComments(q){
    let commentPlace = document.getElementById(`hello-${q}`);
    let inp = document.getElementById(`myClick-${q}`);

    if (inp.classList.contains("far")) {
       const resp = await fetch(COMMENT_URL)
       const dataCom = await resp.json
            .then((resp)=>{
                return response.json();
            })
            .then((elem)=>{
                    for (let index=0; index < elem.length; index++){
                        if (post[ton].postId === q){
                            commentPlace.innerHTML += `<p>${elem[ton].body}</p>`
                        }
                        ton = ton+1;
                    }
                    ton = 0;
                }
            )}}