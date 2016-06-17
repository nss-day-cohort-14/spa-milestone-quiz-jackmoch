var CarLot = (function(originalCarLot) {

  originalCarLot.activateEvents = function() {

    var smallDiv = document.getElementsByClassName('smallDiv');
    for (var i = 0; i < smallDiv.length; i++) {
      var currentDiv = smallDiv[i];
      currentDiv.addEventListener('click', CarLot.changeStyle)
    }
  };

  return originalCarLot;

})(CarLot || {});