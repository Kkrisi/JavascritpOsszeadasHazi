
// Hozz létre egy új projektet,
//    index.html
//    index.js
//    fuggvenyek.js - függvényt, ami paraméterként kap egy számot, és
//    egytől eddig a számig összeadja a számokat és visszatér az összeggel.
//    ezt az eredményt írjuk ki az index.js-ben.




function Osszead() {
    
    var szam = parseInt(document.getElementById("bekertSzam").value);
    var vegosszeg = 0;

    for(var i = 1; i <= szam-1; i++){
    	vegosszeg += i;
    }

    console.log("A végösszeg: " + vegosszeg);
    return vegosszeg;
}




































