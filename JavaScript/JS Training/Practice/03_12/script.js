/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import { Backpack, NightTable } from "./Backpack";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
    );

everydayPack.toggleLid(true);

const nightTable = new NightTable(
    "Night Table",
    20,
    "wood",
    2,
    false,
    {
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
    }
);

nightTable.toggleDrawer(true);