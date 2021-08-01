const ulozit = [];





let x = 1;





function Saver()
{


let sport = document.getElementById("sport").value;


let specifikace = document.getElementById("specifikace").value;
let clip = document.getElementById("clip").value;
let select = document.getElementById("select").value;



const id = x++;


 





let d = new Date();
let t = d.toLocaleTimeString();



if (sport == false ||  clip == false)
{
    alert("Vyplňte")
}
else
{
    ulozit.push([id, ":", " ","Sport: ",sport," - ", "Specifikace: ", specifikace," - ",select,":", clip," Čas: ",t , "<br>"].join(""))
}


document.getElementById("ulozit").innerHTML = ulozit.join("");


}


function deleting()
{
    
    let del = 1;
    ulozit.splice(ulozit.length - del);
    Saver.id = x--;
    
    document.getElementById("ulozit").innerHTML = ulozit.join("");
 
    
}


function prehrano()
{
   

    let cislo = document.getElementById("cislo").value;
    
    if(cislo == 1)
    
       { 
        ulozit.push[0]("prehrano")
        document.getElementById("ulozit").innerHTML = ulozit[0] + "prehrano";
        
    }
    
    

    
}












