ulozit = [];

let chck = document.getElementById("chck");





function Saver()
{


let sport = document.getElementById("sport").value;


let specifikace = document.getElementById("specifikace").value;
let clip = document.getElementById("clip").value;
let select = document.getElementById("select").value;



 
  
 





let d = new Date();
let t = d.toLocaleTimeString();


if (sport == false ||  clip == false)
{
    alert("Vyplňte")
}
else
{
    ulozit.push("Sport: ",sport," - ", "Specifikace: ", specifikace," - ",select,":", clip," Čas: ",t , "<br>")
}


document.getElementById("ulozit").innerHTML = ulozit.join("");


}


function deleting()
{
    
    let del = 12;
    ulozit.splice(ulozit.length - del);
    
    document.getElementById("ulozit").innerHTML = ulozit.join("");
 
    
}












