var CarLot = (function(originalCarLot) {

  originalCarLot.changeStyle = function() {
    elementId = event.currentTarget;
    elementId.classList.toggle('changeStyle');
    // elementId.classList
    console.log(elementId);
  }

  return originalCarLot;

})(CarLot || {});