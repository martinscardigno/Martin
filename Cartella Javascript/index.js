
/*let base = 10;
let altezza = 10;

if(base == altezza){
    console.log("quadrato")
}else{
    console.log("rettangolo")
}
*/

/*
let reddito = 40000;
let imposte = 0

if(reddito > 30000){

    imposte += (reddito-30000)*.4;
    reddito = 30000;

}

if(reddito > 15000){

    imposte += (reddito-15000)*.3;
    reddito = 15000;

}

if(reddito > 2000){

    imposte += (reddito-2000)*.1;
    reddito = 2000;

}
console.log(imposte);
*/


/*

let eta1 = 15;
let eta2 = 25;

if(eta1 > eta2){
    console.log(eta1);
}else{
    console.log(eta2);
}


let n = 10;
while(n >= 0){
    console.log(n);
    n--;
}


let n = 10;
while(n >= 0){
    console.log(n);
    n = n - 2;
}



for(let i = 10; i >= 0; i--){
    console.log(i)
}

for(let i = 10; i >= 0; i--){
    if(i %2 == 0)
    console.log(i)
}



let array = [1,2,3,4,5,10]
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}



let array = [5,6,5,7]

for(let i = 0; i < array.length; i++){
    if(array[i] %2 == 0)
    console.log(array[i]);
}



let array1 = [1,2,3]
let array2 = [4,5,6]

for(let i = 0; i < array.length; i++){
    
}



//let p = document.getElementById("prova");
//console.log(p);
//p.innerHTML = "sto modificando p";



let nomi = ["giacomo", "aldo", "giovanni"]

let table = document.getElementById("tabella")

let tr = document.createElement("tr"); 
let td = document.createElement("td");

td.appendChild = nome;
tr.appendChild(td);
table.appendChild(tr);

*/

/*
let nomi = ["giacomo", "aldo", "giovanni"]

let table = document.getElementById("tabella")

for(nome of nomi){

    let tr = document.createElement("tr"); 
    let td = document.createElement("td");

    td.innerHTML = nome;

    tr.appendChild(td);
    table.appendChild(tr);

}
*/

let nomi = ["giacomo", "aldo", "giovanni"]

let table = document.getElementById("tabella")

for(nome of nomi){

    let tr = document.createElement("tr"); 
    let td = document.createElement("td");

    td.innerHTML = nome;

    tr.appendChild(td);
    table.appendChild(tr);

}




