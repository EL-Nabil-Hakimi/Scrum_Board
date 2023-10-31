function addCol(e) {
    e.insertAdjacentHTML('beforebegin',`
        <div class="list" draggable="true" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;">
            <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
            <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode)"></div>
        </div>
    `);
}
function addTask(e) {
    e.insertAdjacentHTML('beforebegin',`
    <div onclick="showModal1()" class="task" contenteditable="true" spellcheck="false" style="animation-name:pop-down;animation-duration:0.2s;animation-timing-function:linear;">New task <img src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
    `)
}
function showModal1() {
    var Modale  =  document.getElementById("Modale1");
    Modale.style.display  = "block";
    Modale.style.backdropFilter ="blur(5px)";

}

function hideModal1() {
    var Modale  =  document.getElementById("Modale1");
    Modale.style.display="none"
    Modale.style.backdropFilter ="blur(0px)";
}

// Zouhair : Account_Name

function show_hide_Account(){
    const Account = document.querySelector(".Account-name");
    if(Account.style.display == "none"){
        Account.style.display = "flex";
    }
    else{Account.style.display = "none";}
}