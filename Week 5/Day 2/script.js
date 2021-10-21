const headerElement = document.createElement("h1");
const listElement = document.createElement("ul");
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
const listItemThree = document.createElement("li");
const test = document.querySelector("#test");

//call the test element and add created elements

test.append(headerElement);
test.append(listElement);
listElement.appendChild(listItemOne);
listElement.appendChild(listItemTwo);
listElement.appendChild(listItemThree);

//adding css to elements above

headerElement.innerText = "This is my header";
headerElement.style = "color: blue";
headerElement.align = "center";
