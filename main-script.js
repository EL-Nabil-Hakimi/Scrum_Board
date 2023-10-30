function addCol(e) {
    e.insertAdjacentHTML('beforebegin',`
        <div class="list" draggable="true" style="animation-name:pop-down;animation-duration:0.5s;animation-timing-function:linear;">
            <div class="list-name" contenteditable="true" spellcheck="false">To Do</div>
            <div class="add"><img src="Assets/plus.svg" alt="" class="plus" onclick="addTask(this.parentNode)"></div>
        </div>
    `);
}
function addTask(e) {
    e.insertAdjacentHTML('beforebegin',`
    <div class="task" contenteditable="true" spellcheck="false" style="animation-name:pop-down;animation-duration:0.5s;animation-timing-function:linear;">New task <img src="Assets/dots-3.png" class="dots" alt="" onclick="showModal1(this)"></div>
    `)
}
function showModal1(e) {
    console.log(e.src);
    if (e.src == 'http://127.0.0.1:3000/Assets/dots-3.png') {
        e.src = 'Assets/dots-3-after.png';
        document.getElementById('main').style.filter = 'blur(5px)';
    } else if (e.src = 'http://127.0.0.1:3000/Assets/dots-3-after.png') {
        e.src = 'Assets/dots-3.png';
        document.getElementById('main').style.filter = 'blur(0px)';
    }
}