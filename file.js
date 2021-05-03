var no = "Litres Per Shed : <br>"; 
var items= document.getElementsByName('shed'); 
function mary() { 
  
    for (var i = 0; i < items.length; i++) { 
        var a = items[i]; 
        no = no +  a.value + " " +"<br>"; 
 } 
 document.getElementById("res").innerHTML = no; 
    document.getElementById("milk").innerHTML = "Productions"; 
} 

var totalLitres = 0;
function totalCapacity(){
for(var i = 0; i < items.length; i++)
{
    totalLitres = totalLitres + items[i];
}

}

var dailyIncome;
var rate = 45;
