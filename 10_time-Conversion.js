'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    s.split('');
    
    let horas = parseInt(s[0] + s[1]);
    let minutos = s[3] + s[4];
    let segundos = s[6] + s[7];
    let amPm = s[8];
    
    if (horas >= 12 && amPm === 'A'){
        horas = horas - 12;
    } 
    else if (horas < 12 && amPm === 'P'){
        horas = horas + 12;
    }
    
    
    if(horas < 10){
        return (`0${horas}:${minutos}:${segundos}`)
    }
    else {
        return (`${horas}:${minutos}:${segundos}`);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
