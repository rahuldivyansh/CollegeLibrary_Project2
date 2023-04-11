console.log("welcome to smart library");

// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// to add and display books
function Display() {
    // This is used and methods are added below in it with the help of protoypes.
}

let bookNumber = 0; 
// Adding add() method to Display prototype
Display.prototype.add = function(book) {
  console.log("Adding to UI");
  bookNumber++;
  let tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                    <th scope="row">${bookNumber}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`;
  tableBody.innerHTML += uiString;
};

// Adding clear() method to Display prototype
Display.prototype.clear = function() {
  libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};


// To check if the details of book given by user are valid or not.
Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length < 2 || book.type == undefined ){
        return false;
    } else{
        return true;
    }
}

// To show alert whether the book has been successfully added or not.
Display.prototype.show = function(type, message){
    let msgElem = document.getElementById('message');
    
        msgElem.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${message}</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    
      // The alert will get closed after 2 seconds
      setTimeout( function() {          
        msgElem.innerHTML = ``
      }, 5000);

}

// Add submit event listener to libraryForm
let libForm = document.getElementById("libraryForm");
libForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let computerprogramming = document.getElementById("computerprogramming");

  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (computerprogramming.checked) {
    type = computerprogramming.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  // console.log("You have added a book");
  let display = new Display();

   // this makes sure reqeuired details are added to add new book
  if(display.validate(book)){
      display.add(book);
      display.clear();
      display.show('success', 'Your book details have been successfully added.')
    } else {
        display.show('danger', 'Please fill in the appropriate details to add the book.')
    }
      
    e.preventDefault(); // This prevents page refreshing when user clicks the submit button.
}


/* To do -
            1. Add delete book button.
            2. Store data in local storage.
            3. If many books exist, add a scroll bar feature.
*/