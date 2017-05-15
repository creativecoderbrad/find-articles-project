
// search input
var searchinput = document.getElementById('search-input');

// each search pushed to array
var searchesmade = [];


// handle the searchbox function
searchinput.addEventListener("click", displaySearches);

function displaySearches() {

  this.onkeypress = function(e) {
    // on space / enter press
    var spacebar = e.keyCode == 32 || event.keyCode == 32;
    var enterkey = e.keyCode == 13 || event.keyCode == 13;

    // get latest individual input
    var input = searchinput.value;

    if (enterkey) {
        // create new searches
        var item = document.createElement('li');

        // output that search

        // push input to all searches array
        searchesmade.push(input);

        // refresh that search


        // end function
        return false;
    }
    return true;
  }

}

// delete individual searches made

var deleach = document.getElementsByClassName("del");

var myFunction = function(event) {
  var parentNode = '';

  console.log(event.target);

};

for (var i = 0; i < deleach.length; i++) {
  deleach[i].addEventListener('click', myFunction, false);
}


// search button function

var submit = document.getElementById('myForm').addEventListener('submit', search);

function search(event) {

   // use array of individual searches

  // top submission
  event.preventDefault();
}
