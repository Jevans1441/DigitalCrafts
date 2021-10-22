const headerElement = document.createElement("h1");
const listElement = document.createElement("ul");
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
const listItemThree = document.createElement("li");
const test = document.querySelector("#test");
const divElement = document.createElement("div");
const paragraphElement = document.createElement("p");
//call the test element and add created elements

divElement.id = "container";
paragraphElement.id = "paraHome";

//Calling elements to make id's

test.append(headerElement);
test.append(listElement);
test.append(divElement);
divElement.appendChild(paragraphElement);
listElement.appendChild(listItemOne);
listElement.appendChild(listItemTwo);
listElement.appendChild(listItemThree);

//adding css to elements above

headerElement.innerText = "This is my header";
headerElement.style = "color: blue";
headerElement.align = "center";

paragraphElement.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at est odio. Suspendisse commodo, leo vel dapibus vestibulum, nisl odio imperdiet justo, id euismod purus eros quis felis. In ligula turpis, vehicula in imperdiet vel, faucibus non lorem. Praesent elementum odio nec felis lacinia, in viverra risus dignissim. Vestibulum aliquet lobortis scelerisque. Nam egestas consectetur odio, eget varius dui pulvinar in. Cras molestie suscipit arcu ac interdum. Pellentesque mattis aliquam nulla, ut venenatis elit sollicitudin et. Suspendisse potenti. Donec gravida felis et ex placerat facilisis. Aenean accumsan consectetur sapi";
