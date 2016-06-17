var CarLot = (function(originalCarLot) {

  originalCarLot.changeStyle = function(smallDiv, color) {
    smallDiv.classList.toggle('clicked');
    smallDiv.style.background = color;
  };

  originalCarLot.resetStyle = function(currentTarget) {
    //capture id of current target for comparison
    var currentId = currentTarget.id;
    //make collection of divs
    var smallDiv = document.getElementsByClassName('smallDiv')
      //loop through div collection
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
    //get id of click event element
    currentId = currentTarget.id.split('v').pop();
    //grab corresponding description using click event id
    currentDescription = document.getElementById(`descriptionPara${currentId}`);
    //pull word "description" from description id
    var descriptionString = currentDescription.id.slice("description", 11);
    //capitalize "description"
    toTitleCase(descriptionString);

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        upperDescription = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    inputEl.addEventListener('keyup', function() {
      console.log("", upperDescription);
      currentDescription.innerText = upperDescription + ": " + inputEl.value;
    })
  };

  return originalCarLot;

})(CarLot || {});