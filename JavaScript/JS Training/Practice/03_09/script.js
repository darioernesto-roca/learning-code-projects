/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changePocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  }
};

console.log("Before: ", backpack.lidOpen); // false
backpack.toggleLid(true);
console.log("After toggleLid: ", backpack.lidOpen); // true

console.log("Before newStrapLength: ", backpack.strapLength); // { left: 26, right: 26 }
backpack.newStrapLength(20, 20);
console.log("After newStrapLength: ", backpack.strapLength); // { left: 20, right: 20 }

console.log("Before changeColor: ", backpack.color); // grey
backpack.changeColor("blue");
console.log("After changeColor: ", backpack.color); // blue

console.log("Before changeVolume: ", backpack.volume); // 30
backpack.changeVolume(50);
console.log("After changeVolume: ", backpack.volume); // 50

console.log("Before changeName: ", backpack.name); // Everyday Backpack
backpack.changeName("New Backpack");
console.log("After changeName: ", backpack.name); // New Backpack

console.log("Before changePocketNum: ", backpack.pocketNum); // 15
backpack.changePocketNum(20);
console.log("After changePocketNum: ", backpack.pocketNum); // 20

// Path: JavaScript/JS%20Training/Practice/03_10/script.js