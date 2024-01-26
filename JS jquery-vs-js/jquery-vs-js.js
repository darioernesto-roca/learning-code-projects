// Finding HTML Element by Id

//JQuery
myElement = $("#id01");

//JavaScript
myElement = document.getElementById("id01");


//Finding HTML Elements by Tag Name

//JQuery
myElements = $("p");

//JavaScript
myElements = document.getElementsByTagName("p");


//Finding HTML Elements by Class Name

//JQuery
myElements = $(".intro");

//JavaScript
myElements = document.getElementsByClassName("intro");


//Finding HTML Elements by CSS Selectors

//JQuery
myElements = $("p.intro");

//JavaScript
myElements = document.querySelectorAll("p.intro");


//Set Text Content

//JQuery

myElement.text("Hello Colombia!");

//JavaScript

myElement.textContent = "Hello Colombia!";


// Get Text Content

//JQuery

myText = $("#02").text();

//JavaScript

myText = document.getElementById("02").textContent;


//Set HTML Content

//JQuery
myElement.html("<p>Hello World</p>");

//JavaScript
myElement.innerHTML = "<p>Hello World</p>";


//Get HTML Content

//JQuery
content = myElement.html();

//JavaScript
content = myElement.innerHTML;


