

// build our content from cottages / search

function getcontent(compareA, compareB) {

   for (var compareB = 0; compareB < cottages.length; compareB ++) {

   var eachSearch  = compareA;
   var eachListing = cottages[compareB];

   console.log(eachSearch, eachListing);
   // compare A - b

   }

  }

// build our content on page load

function getcontentOnLoad() {

   for (var listingItem = 0; listingItem < cottages.length; listingItem ++) {

     var eachListing = cottages[listingItem];
     build(eachListing);
   }

  }

function build(eachListing) {

  // get array contents
  var placename = eachListing.name;
  var location  = eachListing.location;
  var price  = eachListing.price;
  var rating = eachListing.rating;
  var image  = eachListing.image;

  console.log(placename, location, price, rating, image);
  // build content
  var contentItem   = document.createElement('div');
  var listingPhoto  = document.createElement('div');
  var listingDetail = document.createElement('div');
}
