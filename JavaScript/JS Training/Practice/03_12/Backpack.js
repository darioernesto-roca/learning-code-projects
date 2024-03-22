/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

class NightTable {
  constructor(
    // Defines parameters:
    name,
    volume,
    material,
    drawerNum,
    drawerOpen,
    drawerContent,
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.material = material;
    this.drawerNum = drawerNum;
    this.drawerOpen = false;
    this.drawerContent = drawerContent;
    }
  // Add methods like normal functions:
  toggleDrawer(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
}

export {Backpack, NightTable};