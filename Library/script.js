const submitbtn = document.querySelector('#close');
const plus = document.querySelector('#plus');
const details = document.querySelector('.section');
const card = document.querySelector('.hero');
const deletebtn=document.querySelector('#delete');
// document.addEventListener('DOMContentLoaded', start);

const Library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function start() {
    plus.addEventListener('click', () => {
        details.hidden = false;
    }
    );
    submitbtn.addEventListener('click', () => {
        addbook();
    });
    deletebtn.addEventListener('click',() => {
      deletecard();
    }
    );
}

function addbook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    if (validate(title.trim(), author.trim(), pages.trim(), read)) {
        let book = new Book(title, author, pages, read);
        Library.push(book);
        // console.log(Library);
        display();
        details.hidden = true;
    }
    else {
        alert('Please enter Valid info');
    }
}

function display() {
    for (const index of Library) {
        let div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <div class="details">
            <div class="title">${index.title}</div>
            <div class="author">${index.author}</div>
            <div class="pages">${index.pages}</div>
            <button id="read">${index.read}</button>
        </div> `
        card.appendChild(div);
    }
}

function validate(title, author, pages, read) {
    if (title === '' || author === '' || isNaN(pages) || parseInt(pages) <= 0) { return false; }
    return true;
}

function deletecard(){
    
}
start();
