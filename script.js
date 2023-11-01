function addCol(e) {
  e.insertAdjacentHTML(
    "beforebegin",
    `
        <div class="list" draggable="true" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;">
            <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
            <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode)"></div>
        </div>
    `
  );
}
function addTask(e) {
  e.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="task" contenteditable="true" spellcheck="false" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;">New task <img src="Assets/dots-3.png" onclick="showModal1()" class="dots" alt="" onclick="showModal1(this)"></div>
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

<<<<<<< HEAD
// Fonction pour ajouter un tableau
function addTable() {
  const Project = document.querySelector(".project-name");
  Project.insertAdjacentHTML( "afterend", ` <div class="project-name" contenteditable="true" spellcheck="false">
  Project...
</div> `)
}

=======

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
>>>>>>> d70d81932f6e36a162e7dff73e90cd52668f15ed
