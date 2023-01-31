import users from './data.json' assert {type: 'json'}

const col = document.querySelectorAll(".column");
const spendigValue = document.querySelectorAll(".spending-value");

let val = [];
let colIndex = 0;
let highV = 0;

for (let index = 0; index < col.length; index++) {
    // assign each column properly height based on daily spand (multiplied for 3 just for aestetic question)
    let valCol = users[index].amount * 3 + "px";
    col[index].style.height = valCol;

    // to add the right value above each column
    spendigValue[index].innerHTML = users[index].amount;

    // find the highest value
    val.push(users[index].amount)
    if (val[index] > highV) {
        highV = val[index];
        colIndex = val.indexOf(highV)
    }

    col[index].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = spendigValue[0].className.replace(" active", "");
        }
        spendigValue[index].className += " active";
    });
}

// assign color at highest value
col[colIndex].classList.add("max");

