const fs = require('node:fs');
// const ps = require('prompt-sync');
// const prompt = ps();
const prompt = require("prompt-sync")();
let table= "";

let number = prompt("Introduce un número: ");
let docName = prompt("Introduce el nombre del documento:");
let docType = prompt("Intoduce en tipo de documento: ");
// console.log(number);
// console.log(docName);
// console.log(docType);

    for(let multiplo=0; multiplo <=10; multiplo++){
        let result = number * multiplo;
        table += `${number} x ${multiplo} = ${result}\n`
        //console.log(`${number} x ${multiplo} = ${result}`);
    }
fs.writeFile(`${docName}.${docType}`, table, (err)=> {
    if(err) throw err;
    console.log("El fichero se ha creado correctamente");
});