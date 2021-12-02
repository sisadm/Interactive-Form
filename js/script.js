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
let creditCardDiv = document.querySelector("#credit-card");
let paypalDiv = document.querySelector("#paypal");
let bitcoinDiv = document.querySelector("#bitcoin");
let cardNumbers = document.querySelector("#cc-num");
let zipNumbers = document.querySelector("#zip");
let cvvNumbers = document.querySelector("#cvv");




// create function which will make a tag and append to what we choose

function appendTag(className, message, appendTo, tag) {
    let newTag = document.createElement(`${tag}`);
    newTag.classList.add(className);
    newTag.innerHTML = message;
    appendTo.appendChild(newTag);
}

// add span elements to inputs 
let nameDiv = document.querySelector(".namePart");
let emialDiv = document.querySelector(".emailPart");
let ccNumDiv = document.querySelector("#ccNumDiv");
let zipNumDiv = document.querySelector("#zipNumDiv");
let cvvNumDiv = document.querySelector("#cvvNumDiv");

appendTag("alert-message", "Can only contain letters a-z.", nameDiv, "span");
appendTag("alert-message", "Must be a valid email address.", emialDiv, "span");
appendTag("alert-credit", "The credit card number between 13 - 16 digits.", ccNumDiv, "span");
appendTag("alert-credit", "Zip code need to be 5 digits.", zipNumDiv, "span");
appendTag("alert-credit", "Please enter 3 digits.", cvvNumDiv, "span");

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
            opt.classList.add("select-tshirt");
            opt.innerText = "Please select a T-shirt theme.";
            opt.setAttribute("value", "default");
            tShirtColors.add(opt, tShirtColors[0]);
            tShirtColors.options[0].selected = true;
    }

    function defaultClass() {
        tShirtColors.classList.add("default")
        colorDiv.style.display = "none";
    }

    // function to hide/show Colors 

    function firstDesign() {
        colorOptions[0].style.display = "";
        colorOptions[0].selected;
        tShirtColors.value = colorOptions[0].value;
        colorOptions[1].style.display = "";
        colorOptions[2].style.display = "";
        colorOptions[3].style.display = "none";
        colorOptions[4].style.display = "none";
        colorOptions[5].style.display = "none";
    }

    function secondDesign() {
        colorOptions[0].style.display = "none";
        colorOptions[1].style.display = "none";
        colorOptions[2].style.display = "none";
        colorOptions[3].style.display = "";
        colorOptions[3].selected;
        tShirtColors.value = colorOptions[3].value;
        colorOptions[4].style.display = "";
        colorOptions[5].style.display = "";
    }
    

    // T-shirt theme select 
    tShirtTheme.addEventListener('change', (e) => {
        if(e.target.value == "js puns" || e.target.value == "heart js") {   
            let selectTshirt = document.querySelector(".select-tshirt");
            if(selectTshirt) {
                selectTshirt.remove();
            }
            if(e.target.value == "js puns") {
                colorDiv.style.display = "";
                tShirtColors.classList.remove("default")
                firstDesign();
            }
            if(e.target.value == "heart js") {
                colorDiv.style.display = "";
                tShirtColors.classList.remove("default")
                secondDesign();
            }
        } 
        if(e.target.value == "default" ) {
            colorDiv.style.display = "none";
            tShirtColors.classList.add("default")
            addDefault();
        }
    });

    defaultClass();

// Activities 


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
    creditCardDiv.style.display = "";
    paypalDiv.style.display = "none";
    bitcoinDiv.style.display = "none";
    if(value !== "") {
        creditCardDiv.style.display = "none";
        let divId = document.querySelector("#"+value);
        divId.style.display = "";
    }
    
}

payment.addEventListener("change", (e) => {
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





// event listener to submit the form and check everything is correct

submit.addEventListener('click', (e) => {

    let nameSpan = nameDiv.querySelector("span");
    let nameLi = document.querySelector(".nameError");
    let emailLi = document.querySelector(".emailError");
    let otherLi = document.querySelector(".otherTitleError");
    let actLi = document.querySelector(".actError");
    let tshirtLi = document.querySelector(".tshirtError");
    let cardNumLi = document.querySelector(".cardNumError");
    let zipNumLi = document.querySelector(".zipNumError");
    let cvvNumLi = document.querySelector(".cvvNumError");
    let paymenLi = document.querySelector(".paymentError");

    // name check
    if(name.value == "" || nameSpan.style.display == "inherit") {
        e.preventDefault();
        if(!nameLi) {
            appendTag("nameError", "*Please provide a name.", nameDiv, "p");
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
        e.preventDefault();
        if(!emailLi) {
            appendTag("emailError", "*Please fill the form with correct email.", emialDiv, "p");
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
        e.preventDefault();
        let jobDiv = document.querySelector(".jobPart");
        if(!otherLi) {
            appendTag("otherTitleError", "*Please fill the other Job field.", jobDiv, "p");
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
        e.preventDefault();
        let tshirtFieldset = document.querySelector("fieldset:nth-child(2)");
        let tshirtFirstDiv = document.querySelectorAll(".shirt div")[0];
        if(!tshirtLi) {
            let p = document.createElement("p");
            p.classList.add("tshirtError");
            p.innerHTML = "*Please choose one T-shirt.";
            tshirtFieldset.insertBefore(p, tshirtFirstDiv);
            tShirtTheme.classList.add("red-border");
        }
    } else {
        if(tshirtLi) {
            tshirtLi.remove();
            tShirtTheme.classList.remove("red-border");
        }   
    }

    // activities check
    if(totalH3.style.display == "none") {
        e.preventDefault();
        let activitiesDiv = document.querySelector("#activities-error-div");
        if(!actLi) {
            appendTag("actError", "*You need to pick at least one Activitie", activitiesDiv, "p");
        }
    } else {
        if(actLi) {
            actLi.remove();
        }   
    }    
    
    // card check 
    if(payment.value == "credit-card") {
        let cardFieldset = document.querySelector("fieldset:nth-child(4)");
        if(cardNumbers.value.length < 13 || cardNumbers.value.length  > 16) {
            e.preventDefault();
            let cardLength = cardNumbers.value.length;
            if(!cardNumLi) {
                appendTag("cardNumError", `*Card numbers need to be 13 - 16 digits. You enter ${cardLength} digits.`, cardFieldset, "p");
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
            e.preventDefault();
            let zipLength = cardNumbers.value.length;
            if(!zipNumLi) {
                appendTag("zipNumError", `*Zip Code need to be 5 digits. You enter ${zipLength} digits.`, cardFieldset, "p");
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
            e.preventDefault();
            let cvvLength = cvvNumbers.value.length;
            if(!cvvNumLi) {
                appendTag("cvvNumError", `*CVV need to be 3 digits. You enter ${cvvLength} digits.`, cardFieldset, "p");
                cvvNumbers.classList.add("red-border");
            }
        } else {
            if(cvvNumLi) {
                cvvNumLi.remove();
                cvvNumbers.classList.remove("red-border");
            }   
        } 
    }

    if(payment.value == "paypal" || payment.value == "bitcoin") {
        if(cvvNumLi || zipNumLi || cardNumLi) {
            cvvNumLi.remove();
            zipNumLi.remove();
            cardNumLi.remove();
        }
    }

    if(payment.value == "select method") {
        e.preventDefault();
        if(!paymenLi) {
            appendTag("paymentError", "*Please select one from paymet option.", cardFieldset, "p");
            errorUl.appendChild(li);
            payment.classList.add("red-border")
        }
    } else {
        if(paymenLi) {
            paymenLi.remove();
            payment.classList.remove("red-border");
        }
    }

});



//call the functions to default mode
addDefault();
hideAndShow("");