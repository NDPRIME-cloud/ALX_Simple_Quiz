function add(number1, number2){
    return number1 + number2;
}
function subtraction(number1, number2){
    return number1 - number2;
}
function multiplication(number1, number2){
    return number1 * number2;
}
function division(number1, number2){
    return number1 / number2;
}

const addi = document.getElementById("add")
addi.addEventListener("click", function(){
    const number1 = 
    parseFloat(document.getElementById("number1").value) || 0;
    const number2 =
    parseFloat(document.getElementById("number2").value) || 0;
    const result = add(number1, number2);
    document.getElementById("calculation-result").textContent = result;
})

const subs = document.getElementById("subtract")
subs.addEventListener("click", ()=>{
    const number1 = 
    parseFloat(document.getElementById("number1").value) || 0;
    const number2 =
    parseFloat(document.getElementById("number2").value) || 0;
    const result = subtraction(number1, number2)
    document.getElementById("calculation-result").textContent = result
})

const multi = document.getElementById("multiply");
multi.addEventListener("click", ()=>{
    const number1 = 
    parseFloat(document.getElementById("number1").value) || 0;
    const number2 =
    parseFloat(document.getElementById("number2").value) || 0;
    const result = multiplication(number1, number2)
    document.getElementById("calculation-result").textContent = result

})

const divi = document.getElementById("divide");
divi.addEventListener("click", ()=>{
    const number1 =
    parseFloat(document.getElementById("number1").value) || 0;
    const number2 =
    parseFloat(document.getElementById("number2").value) || 0;
    const result = division(number1, number2)
    document.getElementById("calculation-result").textContent = result
})