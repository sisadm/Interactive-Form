let name = document.querySelector('#name');
let titles = document.querySelector('#title');
let otherTitle = document.querySelector('#other-title');
let tShirtTheme = document.querySelector('#design');
let tShirtColors = document.querySelector('#color');
let colorOptions = document.querySelectorAll('#color option');
let activities = document.querySelector(".activities");
let regInputs = document.querySelectorAll(".activities input");
let regLabels = document.querySelectorAll(".activities label");
let total = 0;
let payment = document.querySelector("#payment");
let paymentDefault = document.querySelector(".paymentDefault");
let creditCardDiv = document.querySelector("#credit-card");
let paypalDiv = document.querySelector("#paypal");
let bitcoinDiv = document.querySelector("#bitcoin");


// create total cost part 

let hThree = document.createElement("h3");
hThree.setAttribute("class", "totalMoney");
hThree.innerHTML = "Total: $" + "<span class='total'> </span>";
activities.appendChild(hThree);
hThree.style.display = "none";
let totalSpan = document.querySelector(".total");
let totalH3 = document.querySelector(".totalMoney");


// Job role

    // set focus the first input field 
    name.focus();

    // hide Other Job role fild
    otherTitle.style.display = 'none';

    // when click Other Job role text field pop up
    titles.addEventListener('change', (e) => {
        if(e.target.value == "other") {
            otherTitle.style.display = "";
        } else {
            otherTitle.style.display = "none";
        }
    });

// T-shirt event listeners

    // add color option if nothing select 
    function addDefault() {
            let opt = document.createElement('option');
            opt.innerText = "Please select a T-shirt theme.";
            opt.setAttribute("value", "default");
            tShirtColors.add(opt, tShirtColors[0]);
            tShirtColors.options[0].selected = true;
    }

    // delete default 
    function deleteDefault() {
        tShirtColors.options[0].remove();
    }

    // clear class and add choosen one
    function classChange(name) {
        tShirtColors.classList.remove("default", "firstColor", "secondColor");
        tShirtColors.classList.add(name);
    }

    // T-shirt theme select 
    tShirtTheme.addEventListener('change', (e) => {
        if(e.target.value == "js puns" || e.target.value == "heart js") {   
            deleteDefault()
            if(e.target.value == "js puns") {
                classChange("firstColor");
            }
            if(e.target.value == "heart js") {
                classChange("secondColor");
            }
        } 
        if(e.target.value == "default" ) {
            classChange("default");
            addDefault();
        }
    });


// Activities 

    // set disable input and change label color

    function disable(num) {
        regInputs[num].setAttribute("disabled", true);
        regLabels[num].style.color = "grey";
    }

    // delete disable 
    function deleteDisable(num) {
        regInputs[num].removeAttribute("disabled");
        regLabels[num].style.color = "black";
    }

    activities.addEventListener('change', (e) => {

        let cost = parseInt(e.target.getAttribute("data-cost"));
        if(e.target.name == "all") {
            if(e.target.checked) {
                total += cost;
            } else {
                total -= cost;
            }
        }
        if(e.target.name == "js-frameworks") {
            if(e.target.checked) {
                disable(3);
                total += cost;
            } else {
                deleteDisable(3);
                total -= cost;
            }
        }
        if(e.target.name == "js-libs") {
            if(e.target.checked) {
                disable(4);
                total += cost;
            } else {
                deleteDisable(4);
                total -= cost;
            }
        }
        if(e.target.name == "express") {
            if(e.target.checked) {
                disable(1);
                total += cost;
            } else {
                deleteDisable(1);
                total -= cost;
            }
        }
        if(e.target.name == "node") {
            if(e.target.checked) {
                disable(2);
                total += cost;
            } else {
                deleteDisable(2);
                total -= cost;
            }
        }
        if(e.target.name == "build-tools") {
            if(e.target.checked) {
                total += cost;
            } else {
                total -= cost;
            }
        }
        if(e.target.name == "npm") {
            if(e.target.checked) {
                total += cost;
            } else {
                total -= cost;
            }
        }
        if(total !== 0) {
            totalH3.style.display = "";
            totalSpan.innerHTML = total;
        } else {
            totalH3.style.display = "none";
        }      
    });

// Payment 

function hideAndShow(value) {
    creditCardDiv.style.display = "none";
    paypalDiv.style.display = "none";
    bitcoinDiv.style.display = "none";
    if(value !== "") {
        let divId = document.querySelector("#"+value);
        divId.style.display = "";
    }
    
}

    

payment.addEventListener("change", (e) => {
    paymentDefault.style.display = "none";
    let elementValue = e.target.value;
    if(e.target.value == "credit-card"){
        hideAndShow(elementValue);
    }
    if(e.target.value == "paypal"){
        hideAndShow(elementValue);
    }
    if(e.target.value == "bitcoin"){
        hideAndShow(elementValue);
    }
});


//call the functions to default mode
addDefault();
hideAndShow("");