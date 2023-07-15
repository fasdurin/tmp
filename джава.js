const list= document.querySelectorAll('.list');
function meny(event){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');  
    event.preventDefault();
}
list.forEach((item)=>
item.addEventListener('click',meny));



const kolo=document.querySelector('.kolo');
const two=document.querySelectorAll('.container');
two.forEach((items)=>
    items.addEventListener('mousemove',har));

function har(event){
    kolo.style.left=`${event.clientX}px`;
    kolo.style.top=`${event.clientY}px`;
}
