var CarLot = (function(originalCarLot) {

  originalCarLot.activateEvents = function() {

    var smallDiv = document.getElementsByClassName('smallDiv');

    for (var i = 0; i < smallDiv.length; i++) {
      var currentDiv = smallDiv[i];

      currentDiv.addEventListener('click', function() {
        clickHandler(event.currentTarget)
      });

      // currentDiv.addEventListener('click', function() {
      //   CarLot.changeStyle(event.currentTarget, event.currentTarget.style.cssText.split(' ').pop())
      // });

    }

    function clickHandler(event) {

      CarLot.changeStyle(event, event.style.cssText.split(' ').pop())
      CarLot.resetStyle(event)
    }

  };

  return originalCarLot;

})(CarLot || {});