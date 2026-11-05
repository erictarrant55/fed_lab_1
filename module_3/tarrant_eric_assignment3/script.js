/*
    Drum kit design survey form
    October 29, 2026
    Eric Tarrant
 */

const validate = (e) => {
    // Hides all error elements on the page
    hideAllErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        console.log("Validation failed");
        // Prevents the form from submitting
        e.preventDefault();
        return false;
    }
    console.log("Validation passed");
    return true;

}


/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
const formHasErrors = () => {
    let errorFlag = false

    const requiredTextFields = ["name", "email",
        "band_name", "favorite_drummer"]

    for (const field of requiredTextFields) {
        let textField = document.getElementById(field)

        if (!formFieldHasInput(textField)) {
            console.log("Missing input:", field);
            document.getElementById(field + "_error").style.display = "block"

            if (!errorFlag) {
                textField.focus()
            }

            errorFlag = true
        }
    }

    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    const email = document.getElementById("email")
    let emailValue = email.value

    console.log("Email tested:", emailValue, "valid:", regex.test(emailValue));

    if (!regex.test(emailValue)) {
        document.getElementById("email_error").style.display = "block"

        if (!errorFlag) {
            email.focus()
            email.select()
        }

        errorFlag = true
    }

    const drumShell = ["pearl", "tama", "yamaha", "ludwig", "sjc", "sonor"]
    let drumShellChecked = false

    for (const shellType of drumShell) {
        if (document.getElementById(shellType).checked) {
            drumShellChecked = true
        }
    }

    if (!drumShellChecked) {
        console.log("No drum shell selected");
        document.getElementById("drum_shell_error").style.display = "block"
        errorFlag = true
    }

    const cymbalCompany = ["zildjian", "sabian", "meinl", "istanbul", "paiste"]
    let cymbalCompanyChecked = false

    for (const cymbalBrand of cymbalCompany) {
        if (document.getElementById(cymbalBrand).checked) {
            cymbalCompanyChecked = true
        }
    }

    if (!cymbalCompanyChecked) {
        console.log("No cymbal company selected");
        document.getElementById("cymbal_company_error").style.display = "block"
        errorFlag = true
    }

    const cymbalBrandType = ["crash", "ride", "splash", "china", "clapstack"]
    let cymbalBrandTypeChecked = false

    for (const cymbalType of cymbalBrandType) {
        if (document.getElementById(cymbalType).checked) {
            cymbalBrandTypeChecked = true
        }
    }

    if (!cymbalBrandTypeChecked) {
        console.log("No cymbal type selected");
        document.getElementById("cymbal_error").style.display = "block"
        errorFlag = true
    }

    const dateField = document.getElementById("pickup-date")

    console.log("Date check:", dateField.value, "min:", dateField.min, "max:", dateField.max);

    if (dateField.value === "" ||
        dateField.value < dateField.min ||
        dateField.value > dateField.max) {
        console.log("Date invalid");
        document.getElementById("date_error").style.display = "block"

        if (!errorFlag) {
            dateField.focus()
        }

        errorFlag = true
    }

    console.log("formHasErrors result:", errorFlag);
    return errorFlag
}

const hideAllErrors = () => {
    const errorFields = document.getElementsByClassName("error")

    for (const field of errorFields) {
        field.style.display = "none"
    }
}

const formFieldHasInput = (fieldElement) => {
    if (fieldElement.value == null || fieldElement.value.trim() == "") {
        return false;
    }

    return true;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Attach the listener once the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey_form");
    console.log("Form found:", form);
    form.addEventListener("submit", validate);
});