import { CheckList } from "./models/CheckList";

let c = new CheckList("Fixa bilen", false);
let c2 = new CheckList("Bli klar med inlämning", false);
let c3 = new CheckList("Ta Luna till bvc", false);
let c4 = new CheckList("Vika undan evighetsberget med tvätt som stått sedan 2007", true);
let c5 = new CheckList("Fria till Fredrik", true);
let c6 = new CheckList("Gifta mig", false);

let checklist = [c, c2, c3, c4, c5, c6];

let ul = document.getElementById("todoList");

let list = document.getElementById("todoList");
list.innerHTML = "To Do:"; 
document.body.appendChild(list);

for (let i = 0; i < checklist.length; i++) {
    const CheckList = checklist[i];

    let button = document.createElement("button");
    button.addEventListener("click", handleClick);
    button.innerHTML = "Done"

    function handleClick() {
        console.log(checklist[i].done);
        if (checklist[i].done == true) {
            checklist[i].done = false
        }
        else {checklist[i].done = true;
        li.innerHTML = "";
        li.setAttribute("class", "d-none");
        };
    }
    
    let li = document.createElement("li");
    li.setAttribute("class", "d-flex justify-content-between list-group-item");
    li.innerHTML = CheckList.todo ;
    list.appendChild(li);
    li.appendChild(button);
}

console.log(checklist);



