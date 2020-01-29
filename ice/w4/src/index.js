import Component from "./Component.js";
// hold control and hover over file path 
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    container.appendChild(element2);
    console.log("Hello World truly");
}

window.addEventListener("DOMContentLoaded", runOnLoad);