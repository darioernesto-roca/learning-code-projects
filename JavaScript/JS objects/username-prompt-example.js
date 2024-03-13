let user = {
    name: "Ernesto",
    age: 37
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name")