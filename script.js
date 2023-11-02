//those are global variables for the countf of number of tasks and number of tables.

let countOfTables = 1;

let countOfCurrentTasks = 3;

let countOfCurrentColumns = 2;

//end of global vars;


function addCol(e) {
  countOfCurrentColumns++;
  e.insertAdjacentHTML(
    "beforebegin",
    `
  <div class="list">
      <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
      <div class="list-tasks"></div>
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
  </div>
    `
  );
}
function addTask(e) {
  countOfCurrentTasks++;
  e.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task" id="t-${countOfCurrentTasks}" spellcheck="false" draggable="true" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;"><p contenteditable="true" class="task-text">New task </p><img src="Assets/dots-3.png" onclick="showModal1()" class="dots" alt="" onclick="showModal1(this)"></div>
    `
  );
}
function showModal1() {
  var Modale = document.getElementById("Modale1");
  Modale.style.display = "block";
  Modale.style.backdropFilter = "blur(5px)";
}

function hideModal1() {
  var Modale = document.getElementById("Modale1");
  Modale.style.display = "none";
  Modale.style.backdropFilter = "blur(0px)";
}

// Zouhair : Account_Name

function show_hide_Account() {
  const Account = document.querySelector(".Account-name");
  if (Account.style.display == "none") {
    Account.style.display = "flex";
  } else {
    Account.style.display = "none";
  }
}


function addCheckList() {
  var e = document.querySelector("#checklest1")
  e.insertAdjacentHTML(
    "beforebegin",
    `
    <div id="checklest1"><input type="checkbox"><span contenteditable>Tache ...</span></div>
    `
  );
}


function showTools(){
  var show = document.querySelector(".Div_Tools");
  if (show.style.display == "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }

}
// Ajouter fonction qui ajoute un table .
function addTable() {
  countOfTables++;
  const Project = document.querySelector(".project-name");
  Project.insertAdjacentHTML( "afterend", ` 
  <div class="project-name" spellcheck="false" onclick="saveData(this)" id="p-1">
    <p class="projectName" contenteditable="true">Project...</p>
    <img src="Assets/dots-3.png" alt="" class="dots">
  </div> `)
}

// show sideBar In mobile

function ShowSideBar() {
  var ShowSideBar = document.querySelector("#ShowSideBar");
  var hideSideBar = document.querySelector("#HideSideBar");
  var sideBarBody = document.querySelector(".sideBar-body");

  hideSideBar.style.display = "block";
  sideBarBody.style.display = "block"; 
  ShowSideBar.style.display = "none";
};

function HideSideBar() {
  var ShowSideBar = document.querySelector("#ShowSideBar");
  var hideSideBar = document.querySelector("#HideSideBar");
  var sideBarBody = document.querySelector(".sideBar-body");   

  hideSideBar.style.display = "none";
  sideBarBody.style.display = "none"; 
  ShowSideBar.style.display = "block";
  
}; 
 function saveData(el) {
  let id = el.id;
  let num = id.match(/(\d+)/)[0];
  console.log(num);
 }