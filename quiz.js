var outputEl = document.getElementById('output');
var inputEl = document.getElementById('inputTxt')

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

    smallDiv.id = `smallDiv${i}`;
    smallDiv.style.borderColor = `${currentColor}`
    makePara.id = `makePara${i}`;
    modelPara.id = `modelPara${i}`;
    yearPara.id = `yearPara${i}`;
    pricePara.id = `pricePara${i}`;
    colorPara.id = `colorPara${i}`;
    purchasePara.id = `purchasePara${i}`;
    descriptionPara.id = `descriptionPara${i}`;


    smallDiv.classList.add('smallDiv');
    makePara.classList.add('makePara');
    modelPara.classList.add('modelPara');
    yearPara.classList.add('yearPara');
    pricePara.classList.add('pricePara');
    colorPara.classList.add('colorPara');
    purchasePara.classList.add('purchasePara');
    descriptionPara.classList.add('descriptionPara');

    makePara.innerText = "Make: " + currentMake;
    modelPara.innerText = "Model: " + currentModel;
    yearPara.innerText = "Year: " + currentYear;
    pricePara.innerText = "Price: " + currentPrice;
    colorPara.innerText = "Color: " + currentColor;
    purchasePara.innerText = "Purchased: " + currentPurchase;
    descriptionPara.innerText = "Description: " + currentDescription;

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

  CarLot.activateEvents();
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);