const plus = document.querySelector('#plus');
const close = document.querySelector('#close');
const modal = document.querySelector('.modal');
const container  =document.querySelector('.container');
const saveBtn = document.querySelector('#save');


const myLibrary =[
    {
        title:'The Ouja',
        author:'lalala',
        pages:267,
        read:'read'
    },
    {
        title:'python programming',
        author:'migeen magar',
        pages:500,
        read:'unread'
    }
];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    container.innerHTML='';
    let index=0;
    for( x of myLibrary){
        
        const div = document.createElement('div');
        div.classList.add('book');

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete-div');
        deleteDiv.id = index;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add(`delete-btn-${index}`)
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = 'delete';

        const title = document.createElement('p');
        title.innerHTML = x.title;
        title.classList.add('title');
        
        const author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = x.author;
        
        const noOfPages = document.createElement('p');
        noOfPages.innerHTML=x.pages;
        noOfPages.classList.add('pages');
        
        const read  = document.createElement('button');
        read.textContent=x.read;
        read.classList.add('read');
        
        read.addEventListener('click',function(){
            if(read.textContent==='read'){
                read.textContent='unread';
            }else if(read.textContent==='unread'){
                read.textContent='read';
            }
        });

        deleteDiv.appendChild(deleteBtn);
        div.appendChild(deleteDiv);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(noOfPages);
        div.appendChild(read);
        container.appendChild(div);

        let deleteButn = document.querySelector(`.delete-btn-${index}`);
        deleteButn.addEventListener('click',function(event){
            let BookCard = event.target.parentNode.id;
            console.log(BookCard);
            deleteBook(Number(BookCard));
        });
    

        index++;
    }

}

addBookToLibrary();

function deleteBook(index){
    myLibrary.splice(index,1);
    let tempLibrary = myLibrary;
    addBookToLibrary();
}

plus.addEventListener('click',function(){
    modal.classList.add('open-modal');
});

close.addEventListener('click',function(){
    modal.classList.remove('open-modal');
});

saveBtn.addEventListener('click',function(){
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#page').value;
    const inputRead = document.querySelector('#read').checked ? 'read' : 'unread';    

    const newBook = new Book(inputTitle,inputAuthor,inputPages,inputRead); 
    myLibrary.push(newBook);
    addBookToLibrary();
    modal.classList.remove('open-modal');
});




