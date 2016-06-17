var outputEl = document.getElementById('output');

function populatePage(inventory) {
  var mainDiv = document.createElement('div');
  mainDiv.classList.add('row');
  outputEl.appendChild(mainDiv);
  // Loop over the inventory and populate the page
  for (var i = 0; i < inventory.length; i++) {
    var currentCar = inventory[i];
    var currentMake = currentCar.make;
    var currentModel = currentCar.model;
    var currentYear = currentCar.year;
    var currentPrice = currentCar.price;
    var currentColor = currentCar.color;
    var currentPurchase = currentCar.purchased;
    var currentDescription = currentCar.description;

    var smallDiv = document.createElement('div');
    var makePara = document.createElement('p');
    var modelPara = document.createElement('p');
    var yearPara = document.createElement('p');
    var pricePara = document.createElement('p');
    var colorPara = document.createElement('p');
    var purchasePara = document.createElement('p');
    var descriptionPara = document.createElement('p');

    makePara.innerText = currentMake;
    modelPara.innerText = currentModel;
    yearPara.innerText = currentYear;
    pricePara.innerText = currentPrice;
    colorPara.innerText = currentColor;
    purchasePara.innerText = currentPurchase;
    descriptionPara.innerText = currentDescription;

    smallDiv.classList.add('col-md-4');
    mainDiv.appendChild(smallDiv);
    smallDiv.appendChild(makePara);
    smallDiv.appendChild(modelPara);
    smallDiv.appendChild(yearPara);
    smallDiv.appendChild(pricePara);
    smallDiv.appendChild(colorPara);
    smallDiv.appendChild(purchasePara);
    smallDiv.appendChild(descriptionPara);

  }
  console.log("", outputEl);


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);