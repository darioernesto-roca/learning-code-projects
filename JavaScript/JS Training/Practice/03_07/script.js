/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const nightTable = {
  name: "Night Table",
  color: "brown",
  material: "wood",
  drawerNum: 2,
  drawerOpen: false,
  toggleDrawer: function (drawerStatus) {
    this.drawerOpen = drawerStatus;
  },
  drowerContent: {
    drawer1: [
      {
        name: "Key Ring",
        color: "silver",
        material: "metal",
        keys: ["Front Door", "Outside Door", "Car", "Department", "Office"],
        keyChain: "Leather",
      },
      "Watch",
      "Wallet",
      "Documents",
    ],
    drawer2: ["Tools", "Screwdriver", "Gripper", "Scalpel"],
  },
};

nightTable.toggleDrawer(true);
console.log("The nightTable object", nightTable);

let query = "drawerNum";
console.log("The drawerNum value:", nightTable[query]); // 2

query = "drowerContent";
console.log("The drowerContent value:", nightTable[query]); // {drawer1: Array(4), drawer2: Array(3)}

query = "drawer1";
console.log("The drawer1 value:", nightTable.drowerContent[query]); // (4) [{…}, "Watch", "Wallet", "Documents"]

query = "keyChain";
console.log("The keyChain value:", nightTable.drowerContent.drawer1[0][query]); // Leather