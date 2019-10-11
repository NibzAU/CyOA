let canvas = document.getElementById("canvas");
let intro = document.getElementById("intro");
let story = document.getElementById("story");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let btnOK = document.getElementById("btnOK");
let name = document.getElementById("name");
let items = document.getElementById("items");

/*--------------LOAD------------*/
window.onload = function(){
   story.style.display = "none";
   inventory.style.display = "none";
   options.style.display = "none";
   player.location = "start";
}
/*--------INVENTORY-------------*/
function updateInventory(){
  while( items.firstChild ){
    items.removeChild( items.firstChild );
  }
  if(items.childElementCount != player.items.length || items.childElementCount == 0 ){
    if (player.items.length == 0){
      let item = document.createElement("li");                 
      item.innerHTML = ("nothing");
      items.appendChild(item);
    }else{
      for (let i = 0; i < player.items.length; i++){
        let item = document.createElement("li");                 
        item.innerHTML = (player.items[i]);
        items.appendChild(item);
      }
    }
  }
}
/*--------------------INTRO------------------------*/
btnOK.addEventListener("click", function(e){
  if ( name.value ==""){
    player.name = "Nameless One";
  }else{
    player.name = name.value;
  }

  story.style.display = "block";
  inventory.style.display = "block";
  options.style.display = "inline-block";
  intro.style.display = "none";
  story.innerText = rooms[player.location].story;
  option1.innerText = rooms[player.location].options.option1;  
  option2.innerText = rooms[player.location].options.option2;
  updateInventory()
});
/* ----------------------story------------*/
option1.addEventListener("click", gameLoop);
option2.addEventListener("click", gameLoop);

/*-----------------GaME LOOP--------------*/
function gameLoop(event){
  let option = event.target.id
  updateGame(option);
  
  story.innerText = rooms[player.location].story;
  option1.innerText = rooms[player.location].options.option1;  
  option2.innerText = rooms[player.location].options.option2;
  updateInventory()
}


