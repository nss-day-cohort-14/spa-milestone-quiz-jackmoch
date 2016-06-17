var CarLot = (function(originalCarLot) {

  originalCarLot.changeStyle = function(smallDiv, color) {
    smallDiv.classList.toggle('clicked');
  }

  originalCarLot.resetStyle = function(event) {
    var currentId = event.id;
    var smallDiv = document.getElementsByClassName('smallDiv')
    for (var i = 0; i < smallDiv.length; i++) {
      var currentDiv = smallDiv[i];
      var testId = currentDiv.id;
      if (currentId != testId) {
        currentDiv.classList.remove('clicked');
      }
    }
  }

  return originalCarLot;

})(CarLot || {});