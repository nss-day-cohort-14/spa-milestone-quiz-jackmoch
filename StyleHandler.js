var CarLot = (function(originalCarLot) {

  originalCarLot.changeStyle = function() {
    smallDiv = event.currentTarget;
    var currentColor = event.currentTarget.style.cssText.split(' ').pop();
    smallDiv.classList.toggle('clicked');
  }

  // originalCarLot.setColor = function(test) {
  //   for (var i = 0; i < test.length; i++) {
  //     console.log("test", test[i]);
  //   }
  // }
  return originalCarLot;

})(CarLot || {});