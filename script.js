
//Code for sortable js


let all = document.querySelectorAll('.list-tasks');
all.forEach(element => {
   Sortable.create(element, {
     group: 'one',
     animation: 150
   })
});
let dash = document.querySelector('.dash');
Sortable.create(dash, {
 group: 'two',
 animation: 150
})
function refresh() {
    let dashes = document.querySelectorAll('.dash');
    dashes.forEach(element => {
        Sortable.create(element, {
          group: 'two',
          animation: 150
        })
    })
    all = document.querySelectorAll('.list-tasks');
    all.forEach(element => {
        Sortable.create(element, {
          group: 'one',
          animation: 150
        })
    });
}
document.getElementById('plus-add').addEventListener('click',function () {
    setTimeout(refresh(),100);
})
let projects = document.querySelector('.all-projects');
Sortable.create(projects, {
  group: 'three',
  animation: 150
  })
;

//those are global variables for the countf of number of tasks and number of tables.

let countOfProjects = 1;

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
    <div class="task" id="t-${countOfCurrentTasks}" spellcheck="false" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;"><p contenteditable="true" class="task-text">New task </p><img src="Assets/dots-3.png" onclick="showModal1()" class="dots" alt="" onclick="showModal1(this)"></div>
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
  countOfProjects++;
  const Project = document.querySelector(".all-projects");
  Project.insertAdjacentHTML( "beforeend", ` 
  <div class="project-name" spellcheck="false" onclick="saveData(this)" id="p-${countOfProjects}">
    <p class="projectName" contenteditable="true">Project...</p>
    <img src="Assets/dots-3.png" alt="" class="dots">
  </div> `);

  //add table content
  document.querySelector('.dash').insertAdjacentHTML('afterend',`
    <section class="dash" id="dash-${countOfProjects}" style="display:none;">
      <div class="list">
      <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
          <div class="list-tasks">
              <div class="task" spellcheck="false"><p contenteditable="true">task 1</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 2</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 3</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
          </div>
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
    </div>
    <div class="list">
      <div class="list-name" contenteditable="true" spellcheck="false">Doing</div>
          <div class="list-tasks">
              <div class="task" spellcheck="false"><p contenteditable="true">task 1</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 2</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 3</p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
          </div>
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
    </div>
    <div class="list">
      <div class="list-name" contenteditable="true" spellcheck="false">Done</div>
          <div class="list-tasks">
              <div  class="task" spellcheck="false"><p contenteditable="true">task 1 </p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 2 </p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
              <div class="task" spellcheck="false"><p contenteditable="true">task 3 </p><img onclick="showModal1()" src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
          </div>
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode.previousElementSibling)"></div>
    </div>
    <div class="list">
      <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addCol(this.parentNode.parentNode)" id="plus-add"></div>
    </div>
  </section>
  `)
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
 function saveData(e) {
  document.querySelector('.current').classList.remove('current');
  e.classList.add('current');
  let id = e.id;
  id = id.split('-')[1];
  document.querySelectorAll('.dash').forEach(element => {
    element.style.display = 'none';
  });
  document.getElementById(`dash-${id}`).style.display = 'flex';
  refresh();
 }

