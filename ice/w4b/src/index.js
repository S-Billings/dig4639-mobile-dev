import Component from "./Component.js";
// hold control and hover over file path 
import Task from "./Task.js";
function runOnLoad()
{
    //container
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);

    //handle adding a new task
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    console.log("Hello World truly");
}

window.addEventListener("DOMContentLoaded", runOnLoad);