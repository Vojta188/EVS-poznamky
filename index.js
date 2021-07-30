ulozit = [];






function Saver()
{


let sport = document.getElementById("sport").value;
let specifikace = document.getElementById("specifikace").value;
let clip = document.getElementById("clip").value;
let select = document.getElementById("select").value;

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();


if (sport == false ||  clip == false)
{
    alert("Vyplňte")
}
else
{
    ulozit.push("Sport: ",sport," - ", "Specifikace: ", specifikace," - ",select,":", clip," Čas: ",h,":",m,"<br>")
}


document.getElementById("ulozit").innerHTML = ulozit.join("");


}


function deleting()
{
    
    let del = 14;
    ulozit.splice(ulozit.length - del);
    
    document.getElementById("ulozit").innerHTML = ulozit.join("");
 
    
}






