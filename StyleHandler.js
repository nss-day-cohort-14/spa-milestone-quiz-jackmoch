var CarLot = (function(originalCarLot) {

  originalCarLot.changeStyle = function(smallDiv, color) {

    smallDiv.classList.toggle('clicked');
    smallDiv.style.background = color;
    // event.stopPropogation();
  };

  originalCarLot.resetStyle = function(currentTarget) {
    //capture id of current target for comparison
    var currentId = currentTarget.id;
    var smallDiv = document.getElementsByClassName('smallDiv')
    for (var i = 0; i < smallDiv.length; i++) {
      var currentDiv = smallDiv[i];
      var testId = currentDiv.id;
      //compare id of current target to
      //id's of all the different divs
      if (currentId != testId) {
        currentDiv.classList.remove('clicked');
        currentDiv.style.background = "white";
      }
    }
  };

  originalCarLot.inputFocus = function(currentTarget) {
    inputEl.focus();
    inputEl.value = '';
    currentId = currentTarget.id.split('v').pop();
    currentDescription = document.getElementById(`descriptionPara${currentId}`);
    inputEl.addEventListener('keyup', function() {
      currentDescription.innerText = inputEl.value;
    })
  };

  return originalCarLot;

})(CarLot || {});