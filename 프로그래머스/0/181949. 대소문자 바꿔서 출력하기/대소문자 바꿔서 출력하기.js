const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str = str.split('').reduce((a,c)=>{
        return a+(c===c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    },'');
    console.log(str);
});