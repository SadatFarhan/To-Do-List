const inputBox = document.querySelector('.input');
const listContainer = document.querySelector('.list');
const btn = document.querySelector('.btn');

function addTask(){
 if(inputBox.value===''){
  alert("You must write domething!");
 }else{
  let li = document.createElement('li');
  li.innerHTML= inputBox.value;
  listContainer.appendChild(li);
  let span= document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
 }
 inputBox.value= '';
 saveData();
}
listContainer.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("chk");
    saveData();
  }else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();;
  }
},false);
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
  listContainer.innerHTML = localStorage.getItem("data");
};
showList();