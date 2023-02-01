const url = "https://raw.githubusercontent.com/Marchino5791/Frontend-Mentor-Expenses-chart-component/main/data.json";

fetch(url)
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => {
        console.log(data)

        const col = document.querySelectorAll(".column");
        const day = document.querySelectorAll(".day");
        const spendigValue = document.querySelectorAll(".spending-value");
        const expensesData = data;

        let val = [];
        let colIndex = 0;
        let highV = 0;

        for (let index = 0; index < col.length; index++) {
            // assign each column properly height based on daily spand (multiplied for 3 just for aestetic question)
            let valCol = expensesData[index].amount * 3 + "px";
            col[index].style.height = valCol;

            // to add the right value above each column
            spendigValue[index].innerHTML = expensesData[index].amount;

            // to add the right day below each column
            day[index].innerHTML = expensesData[index].day;

            // find the highest value
            val.push(expensesData[index].amount)
            if (val[index] > highV) {
                highV = val[index];
                colIndex = val.indexOf(highV)
            }

            // click column to show the value
            col[index].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = spendigValue[0].className.replace(" active", "");
                }
                spendigValue[index].className += " active";
            });
        }

        // assign color at highest value
        col[colIndex].classList.add("max");
    });



