var no = "Litres Per Shed : <br>"; 
var items= document.getElementsByName('shed'); 
function mary() { 
  
    for (var i = 0; i < items.length; i++) { 
        var a = items[i]; 
        no = no +  a.value + " " +"<br>"; 
 } };