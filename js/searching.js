
 // each search pushed to array
 var searchesmade = [];

// search input
var searchinput = document.getElementById('search-input');

// handle the searchbox function
searchinput.addEventListener("click", displaySearches);

function displaySearches() {

  this.onkeypress = function(e) {
    // on space / enter press
    var spacebar = e.keyCode == 32 || event.keyCode == 32; // do later
    var enterkey = e.keyCode == 13 || event.keyCode == 13;

    // get latest individual input
    var input = searchinput.value.toLowerCase();

    if (enterkey && input != '') {
        // create list item
        createItem(input);
        // refresh that search
        document.getElementById('search-input').value = '';

        // run our search ?

    // end function
    return false;
    }
    return true;
  }

} // end displaySearches function


function createItem(input) {
  // create new searches
  var populate = document.getElementById('search-box');
  var items = document.createElement('div');
  var del   = document.createElement('span');

  items.classList.add('box');
  del.classList.add('del');
  // output that search
  items.innerHTML = input;
  items.appendChild(del) && populate.insertBefore(items, populate.childNodes[0]);

  // push input to all searches array
  searchesmade.push(input);

  // provide search history in localstorage

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

// search function
var submit = document.getElementById('myForm').addEventListener('submit', search);


function search(event) {
  // loop through search
  for (var eachSearch = 0; eachSearch < searchesmade.length; eachSearch ++) {

    // get each search
    var toCompare= searchesmade[eachSearch];
    // pass value to compare with listings
    getcontent(toCompare);

  }

  // stop page submitting
  event.preventDefault();
}





//
