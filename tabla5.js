const fs = require('node:fs');
let number = 5; 
let table = "";

for(let multiplo = 0; multiplo <= 10; multiplo++){
    let result = number * multiplo;
    table += `${number} x ${multiplo} = ${result}\n`
    console.log(`${number} x ${multiplo} = ${result}`);
}

fs.writeFile('tabla5.txt', table, (err)=> {
    if(err) throw err;
    console.log("El fichero se ha creado correctamente");
});