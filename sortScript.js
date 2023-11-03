
import Sortable from './node_modules/sortablejs/modular/sortable.complete.esm.js';


let all = document.querySelectorAll('.list-tasks');
all.forEach(element => {
   Sortable.create(element, {
     group: 'one',
     animation: 150
   })
});
Sortable.create(dash, {
 group: 'two',
 animation: 150
})
function refresh() {
    all = document.querySelectorAll('.list-tasks');
    all.forEach(element => {
        Sortable.create(element, {
          group: 'one',
          animation: 150
        })
    });
    console.log('done');
}
document.getElementById('plus-add').addEventListener('click',function () {
    setTimeout(refresh(),100);
    console.log('test');
})