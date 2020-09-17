//*****code pour le bouton hide node parents js et avec proposition de delete pour les articlees*****//
let removeCards=Array.from(document.getElementsByClassName("close"));

removeCards.forEach(element => {element.addEventListener("click",function(){
  let confirmation= confirm("Are you sure you want to Delete this Article");
  if(confirmation)
   this.parentNode.remove()
   calculation();
})
  
});

//**********code pour l'incrémenttation et la décrémentation de la continue*****************//
let y=document.getElementsByClassName("fa-plus-square");
let z=document.getElementsByClassName("fa-minus-square-o");
 let turnon=Array.from(y);
 let turnoff=Array.from(z);
 turnon.forEach(element => {element.addEventListener("click",function(){
  
  element.previousElementSibling.innerHTML++;
  calculation();

})
 });
 turnoff.forEach(element => {element.addEventListener("click",function(){
  
  let turndown= element.nextElementSibling.innerHTML;
  if(turndown<=0) {
    element.nextElementSibling.innerHTML=0;
    alert("you have to put positive number of articles");
    
   }else{
    element.nextElementSibling.innerHTML--;
    calculation()
   }

  
 
})
});
//********code pour calculer les prix totales des articles à achter */
// get the prices 

function calculation() {
  let Prices = document.getElementsByClassName("card-title");
  
//
let carts=document.getElementsByClassName("quantity");
let  x=0;

for (var i = 0; i < carts.length; i++) {
  //Articles quantity
 
 
  x+=parseFloat(Prices[i].innerText.replace("£",""))*parseFloat(carts[i].innerHTML);
   
   
}
return document.getElementById("price").innerHTML=x.toFixed(2);
}
//change color of heart
var heart=Array.from(document.getElementsByClassName("fa-heart"));
      
heart.forEach(element=>{element.addEventListener("click",function(){
 
  if(element.style.color=="pink"){
   
        element.style.color="red";}
     else{
       element.style.color="pink";
            }
})})
   


