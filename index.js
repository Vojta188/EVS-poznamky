ulozit = [];





function Saver()
{


let sport = document.getElementById("sport").value;
let specifikace = document.getElementById("specifikace").value;
let clip = document.getElementById("clip").value;
let select = document.getElementById("select").value;


if (sport == false &&  clip == false && select == false)
{
    alert("Vyplňte")
}
else
{
    ulozit.push(sport, specifikace, clip, select,"<br>")
}


document.getElementById("ulozit").innerHTML = ulozit;


}


function deleting()
{
    
    
     
    
 
    
}






