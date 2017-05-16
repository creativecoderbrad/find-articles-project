
// search input
var searchinput = document.getElementById('search-input');

// each search pushed to array
var searchesmade = [];

// handle the searchbox function
searchinput.addEventListener("click", displaySearches);

function displaySearches() {

  this.onkeypress = function(e) {
    // on space / enter press
    var spacebar = e.keyCode == 32 || event.keyCode == 32; // do later
    var enterkey = e.keyCode == 13 || event.keyCode == 13;

    // get latest individual input
    var input = searchinput.value;

    if (enterkey) {
        // create list item
        createItem(input);
        // refresh that search
        document.getElementById('search-input').value = '';

    // end function
    return false;
    }
    return true;
  }

} // end displaySearches function


function createItem(input) {
  // create new searches
  var populate = document.getElementById('results');
  var items = document.createElement('li');
  var del   = document.createElement('span');

  items.classList.add('box');
  del.classList.add('del');
  // output that search
  items.innerHTML = input;
  items.appendChild(del) && populate.appendChild(items);

  // push input to all searches array
  searchesmade.push(input);

  del.addEventListener("click", function () {

    deleteItemArray(input);

    var listItem = this.parentNode;
    populate.removeChild(listItem);

  });
}

function deleteItemArray(input) {

    for(var i = searchesmade.length - 1; i >= 0; i--) {
      var check = searchesmade[i];
      var matchfind = input;

      if( check === matchfind ) {
         searchesmade.splice(i, 1);
         console.log(searchesmade);
      }
    }

}

// search button function

var submit = document.getElementById('myForm').addEventListener('submit', search);

function search(event) {
   // use array of individual searche
  // top submission
  event.preventDefault();
}





//
