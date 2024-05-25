document.addEventListener('DOMContentLoaded', start);
function start(){
    let addbtn = document.getElementById('addnewcard');
    addbtn.addEventListener('click', addcard);
}

let Library = [
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
// ######################################################################
let book = new Book('ABC','BAC',123,true);
Library.push(book);
Library.push(book);
console.log(Library);
let book2=new Book ('ABCC','SDSD',1234,false);
Library[3]=book2;
// ######################################################################

function open() {
    document.querySelector('.section').hidden=false;
    addd();
}
function close(){
    document.getElementById('close');
}
function add(){
    
    let submitbtn = document.getElementById('submit');
    
    submitbtn.addEventListener('click',(event) => {
        event.preventDefault();
        let obj = details();
        
        // let radioStatus = document.getElementById('read').checked ? 'Read' : 'Not Read';
        // console.log('Status:', radioStatus);
        let body_card = document.querySelector('.hero'); //creates node to link to the body of cards    //select tail node
        let newcard = document.createElement('div'); //creates new element at tht var    //creating inserting node
        newcard.classList.add('card'); //adds card class to the newcard var    //adding inside div tag
        newcard.innerHTML=` 
        <div class="details">
        <div class="title">${obj.title}</div>
        <div class="author">author</div>
        <div class="pages">XXX</div>
        <button>read</button>
        </div>  
        `;         
        body_card.appendChild(newcard); //adds this var to the body of cards    //ADDS to html
        // body_card.insertAdjacentElement('beforeend',newcard)
    }
);

}
function addd(){
    let obj = new Book('', '', 0, false);

// Listen for click event on the submit button
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Retrieve the value of the title input field
    let titleValue = document.querySelector('.title').value;

    // Assign the title to the Book object
    obj.title = titleValue;

    // Create a new card with the updated title
    newcard.innerHTML = `
        <div class="details">
            <div class="title">${obj.title}</div>
            <div class="author">author</div>
            <div class="pages">XXX</div>
            <button>read</button>
        </div>  
    `;
});
}

function details(){
    let obj = new Book('','',0,false);
    let submitbtn = document.getElementById('submit');
    submitbtn.addEventListener('click',(event) => {
        event.preventDefault();
      obj.title=document.getElementById('.title').value;
    console.log(obj.title);
    }
    );
    return obj;
}

function details1() {
    let x = document.querySelector('.title').value;
    let obj = new Book(x,' ',0,false);
    console.log(obj.title);
    return obj;
}
