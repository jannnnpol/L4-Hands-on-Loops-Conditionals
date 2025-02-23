let userInput = document.querySelector("input");
let checker = document.querySelector("button");
let result = document.querySelector("h4");

checker.addEventListener("click", () =>{
    let value  = userInput.value;
    let number = Number(value);


    let res = number % 2 == 0 ? "The number "+ value +  " is EVEN" : "The number " + value +" is ODD";
    result.textContent = res;
});