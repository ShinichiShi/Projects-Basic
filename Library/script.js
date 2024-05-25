const submitbtn=document.querySelector('#close');
const plus=document.querySelector('#plus');
const details = document.querySelector('.section');

// document.addEventListener('DOMContentLoaded', start);
start();
function start(){
    plus.addEventListener('click', () => {
        details.hidden = false;
    }
    );
}
function end(){
    submitbtn.addEventListener('click', () => {
        details.classList.remove('.section');
    }
    );
}
const Library = [
    {
    title:"title",
    author:"author",
    pages:"pages",
    read:true
    },
    {
        title:"title2",
    author:"author2",
    pages:"pages2",
    read:true
    }
];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

