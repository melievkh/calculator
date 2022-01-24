const output = document.getElementById('output');
const clear = document.getElementById('clear')

function display(num) {
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
       alert('Invalid!');
    }
}
 function Clear() {
     output.value = ''
 }