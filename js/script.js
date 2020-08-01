let form = document.querySelector("form");
let name = document.querySelector('#name');
let email = document.querySelector('#mail');
let titles = document.querySelector('#title');
let otherTitle = document.querySelector('#other-title');
let shirtDiv = document.querySelector(".shirt-box");
let tShirtTheme = document.querySelector('#design');
let tShirtColors = document.querySelector('#color');
let colorDiv = document.querySelector("#colors-js-puns");
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
let alertActivities = document.querySelector("#alert-activities");
let cardNumbers = document.querySelector("#cc-num");
let zipNumbers = document.querySelector("#zip");
let cvvNumbers = document.querySelector("#cvv");
let submit = document.querySelector("button");


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

// T-shirt 

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
                colorDiv.style.display = "inherit";
                classChange("firstColor");
            }
            if(e.target.value == "heart js") {
                colorDiv.style.display = "inherit";
                classChange("secondColor");
            }
        } 
        if(e.target.value == "default" ) {
            colorDiv.style.display = "none";
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

        for(let i = 0; i < regInputs.length; i++) {
            if(regInputs[i].checked == true) {
                alertActivities.style.display = "none";            
                break;
            } else {
                alertActivities.style.display = "";
            }

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

// Validators

function validName(username) {
    return /^[a-z A-Z]+$/.test(username);
}

function validEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}  

function validCardNumbers(numbers) {
    return /^[0-9]{13,16}$/.test(numbers)
}

function validZipNumbers(numbers) {
    return /^[0-9]{5}$/.test(numbers)
}

function validCvvNumbers(numbers) {
    return /^[0-9]{3}$/.test(numbers)
}

// alert message hide or show when user type in the field 

function alertShowOrHide(show, element) {
    if (show) {
        element.style.display = "inherit";
    } else {
        element.style.display = "none";
    }
} 

function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      alertShowOrHide(showTip, tooltip);
    };
  }
  
// event listener to check user inputs 

name.addEventListener('input', createListener(validName));
email.addEventListener('input', createListener(validEmail));
cardNumbers.addEventListener('input', createListener(validCardNumbers));
zipNumbers.addEventListener('input', createListener(validZipNumbers));
cvvNumbers.addEventListener('input', createListener(validCvvNumbers));


// create Ul which will contain any error Li
let ul = document.createElement("ul");
ul.setAttribute("id", "show-error");
form.appendChild(ul);

// event listener to submit the form and check everything is correct

submit.addEventListener('click', () => {
    let li;
    let errorUl = document.querySelector("#show-error");
    let nameLi = document.querySelector(".nameError");
    let emailLi = document.querySelector(".emailError");
    let otherLi = document.querySelector(".otherTitleError");
    let actLi = document.querySelector(".actError");
    let tshirtLi = document.querySelector(".tshirtError");
    let cardNumLi = document.querySelector(".cardNumError");
    let zipNumLi = document.querySelector(".zipNumError");
    let cvvNumLi = document.querySelector(".cvvNumError");

    // name check
    if(name.value == "") {
        li =  document.createElement("li");
        li.classList.add("nameError");
        li.innerHTML = "*Please provide a name."
        if(!nameLi) {
            errorUl.appendChild(li);
            name.classList.add("red-border");
        }
    } else {
        if(nameLi) {
            nameLi.remove();
            name.classList.remove("red-border");
        }
        
    }

    //email check
    let emailAlert = document.querySelector("#mail + .alert-message");
    if(email.value == "" || emailAlert.style.display !== "none") {
        li =  document.createElement("li");
        li.classList.add("emailError");
        li.innerHTML = "*Please fill the form with correct email.";
        if(!emailLi) {
            errorUl.appendChild(li);
            email.classList.add("red-border");
        }
    } else {
        if(emailLi) {
            emailLi.remove();
            email.classList.remove("red-border");
        }   
    }

    //job check
    if(titles.value == "other" && otherTitle.value == "") {
        li =  document.createElement("li");
        li.classList.add("otherTitleError");
        li.innerHTML = "*Please fill the other Job field.";
        if(!otherLi) {
            errorUl.appendChild(li);
            otherTitle.classList.add("red-border");
        }
    } else {
        if(otherLi) {
            otherLi.remove();
            otherTitle.classList.remove("red-border");
        }   
    }

 
    // t-shirt check

    if(tShirtColors.value == "default") {
        li =  document.createElement("li");
        li.classList.add("tshirtError");
        li.innerHTML = "*Please choose one T-shirt.";
        if(!tshirtLi) {
            errorUl.appendChild(li);
            tShirtTheme.classList.add("red-border");
        }
    } else {
        if(tshirtLi) {
            tshirtLi.remove();
            tShirtTheme.classList.remove("red-border");
        }   
    }

    // activities check
    let activitiesAlert = document.querySelector("#alert-activities");
    if(activitiesAlert.style.display !== "none") {
        li =  document.createElement("li");
        li.classList.add("actError");
        li.innerHTML = "*Please choose at least one from Activities.";
        if(!actLi) {
            errorUl.appendChild(li);
        }
    } else {
        if(actLi) {
            actLi.remove();
        }   
    }    
    
    // card check 
    if(cardNumbers.value.length < 13 || cardNumbers.value.length  > 16) {
        let cardLength = cardNumbers.value.length;
        li =  document.createElement("li");
        li.classList.add("cardNumError");
        li.innerHTML = `*Card numbers need to be 13 - 16 digits. You enter ${cardLength} digits.`;
        if(!cardNumLi) {
            errorUl.appendChild(li);
            cardNumbers.classList.add("red-border");
        }
    } else {
        if(cardNumLi) {
            cardNumLi.remove();
            cardNumbers.classList.remove("red-border");
        }   
    }   
    
    // zip check
    if(zipNumbers.value.length < 5 || zipNumbers.value.length  > 5) {
        let zipLength = cardNumbers.value.length;
        li =  document.createElement("li");
        li.classList.add("zipNumError");
        li.innerHTML = `*Zip Code need to be 5 digits. You enter ${zipLength} digits.`;
        if(!zipNumLi) {
            errorUl.appendChild(li);
            zipNumbers.classList.add("red-border");
        }
    } else {
        if(zipNumLi) {
            zipNumLi.remove();
            zipNumbers.classList.remove("red-border");
        }   
    }
    
    // CVV check
    if(cvvNumbers.value.length !== 3) {
        let cvvLength = cvvNumbers.value.length;
        li =  document.createElement("li");
        li.classList.add("cvvNumError");
        li.innerHTML = `*CVV need to be 3 digits. You enter ${cvvLength} digits.`;
        if(!cvvNumLi) {
            errorUl.appendChild(li);
            cvvNumbers.classList.add("red-border");
        }
    } else {
        if(cvvNumLi) {
            cvvNumLi.remove();
            cvvNumbers.classList.remove("red-border");
        }   
    } 


});



//call the functions to default mode
addDefault();
hideAndShow("");