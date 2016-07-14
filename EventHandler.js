var CarLot = (function(originalCarLot) {

  originalCarLot.activateEvents = function() {

    var smallDiv = document.getElementsByClassName('smallDiv');
    //loop through smallDiv HTML Collection and
    //add event listeners one at a time
    for (var i = 0; i < smallDiv.length; i++) {
      var currentDiv = smallDiv[i];
      currentDiv.addEventListener('click', function() {
        //pass current target of event into
        //click handler to execute multiple functions
        clickHandler(event.currentTarget)
      });
    }

    function clickHandler(currentTarget) {
      CarLot.changeStyle(currentTarget, "lightgrey");
      CarLot.resetStyle(currentTarget);
      CarLot.inputFocus(currentTarget);
    }
  };

  return originalCarLot;

})(CarLot || {});