// create a list to contain all number buttons
const numberButtons = [
    document.querySelector('.zero'),
    document.querySelector('.one'),
    document.querySelector('.two'),
    document.querySelector(".three"),
    document.querySelector(".four"),
    document.querySelector(".five"),
    document.querySelector(".six"),
    document.querySelector(".seven"),
    document.querySelector(".eight"),
    document.querySelector(".nine")
]

//operator button selection
const zero = document.querySelector('.zero');
const mult = document.querySelector(".mult");
const divide = document.querySelector(".divide");
const add = document.querySelector(".add");
const subt = document.querySelector(".subt");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

let number = "";
let stored = null;
let operation;

// if any of the number buttons is selected, it takes the text content of the div,
// and concatenates it
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        let buttonText = numberButtons[i].textContent;
        number = number+buttonText;
        display.textContent = number;
    });
}

mult.addEventListener('click', () =>{
    if(stored == null){
        stored = parseInt(number);
        display.textContent = stored; 
    }
    else{
        stored *= parseInt(number);
        display.textContent = stored;
    }
    number = "";
    operation = "multiply";
})

add.addEventListener('click', () =>{
    if(stored == null){
        stored = parseInt(number);
        display.textContent = stored; 
    }
    else{
        stored += parseInt(number);
        display.textContent = stored; 

    }
    number = "";
    operation = "add";
})

subt.addEventListener('click', () =>{
    if(stored == null){
        stored = parseInt(number);
        display.textContent = stored; 
    }
    else{
        stored -= parseInt(number);
        display.textContent = stored; 
    }
    number = "";
    operation = "subtract";
})

divide.addEventListener('click', () =>{
    if(stored == null){
        stored = parseInt(number);
        display.textContent = stored; 
    }
    else{
        stored /= parseInt(number);
        display.textContent = stored; 
    }
    number = "";
    operation = "divide";
})

equal.addEventListener('click', () =>{
    currentNumber = parseInt(number);
    let result;
    if(stored == null){
        return;
    }
    switch (operation){
        case "multiply":
            result = stored * currentNumber;
            break;
        case "divide":
            result = stored / currentNumber;
            break;
        case "add":
            result = stored + currentNumber;
            break;
        case "subtract":
            result = stored - currentNumber;
            break;
    }
    display.textContent = result;
    operation = null;
    stored = null;
    number = result.toString();
})

clear.addEventListener('click', () =>{
    number = "";
    stored = null;
    operation = null;
    display.textContent = "000000";
})  