var CarLot = (function(originalCarLot) {
  var inventory = [];

  originalCarLot.getInventory = function() {
    return inventory
  },

  originalCarLot.loadInventory = function(callback) {
    var inventoryLoader = new XMLHttpRequest();

    inventoryLoader.addEventListener("load", function() {

      inventory = JSON.parse(this.responseText).cars;

      callback(inventory);

    });

    inventoryLoader.addEventListener(`error`, function() {
      console.log(`An error occurred while transferring the messageData`);
    });

    inventoryLoader.open(`GET`, `inventory.json`);
    inventoryLoader.send();

  };

  return originalCarLot;

})(CarLot || {});