let WeightField = document.querySelector("#weight-field");
let HeightField = document.querySelector("#height-field");
let calculateButton = document.querySelector(".calculate-btn");
let result = document.querySelector(".res");
let detail = document.querySelector("#detail");


function calculateBMI(){
    let res = WeightField.value / (Math.pow(HeightField.value, 2)/10000);
    result.innerHTML = `Yours: ${res.toFixed(2)}`;

    if(res < 18.5){
        detail.innerHTML = `Your underWeight. Eat Healthy!`;
    }
    else if(res > 18.5 && res < 24.9){
        detail.innerHTML = ` Your Healthy.Good to go!`;
    }
    else if(res > 30.0){
        detail.innerHTML = "Your overWeight. Make a diet Plan!";
    }
}

calculateButton.addEventListener("click", calculateBMI);