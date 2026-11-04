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
        // Prevents the form from submitting
        e.preventDefault();
        return false;
    }

    return true;
}

const MIN_WORDS = 50
const commentsField = document.getElementById("message")
/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
const formHasErrors = () => {
    let errorFlag = false

    const requiredTextFields = ["name", "email",
        "genre_of_drummer", "band_name", "favorite_drummer"]

    for (const field of requiredTextFields) {
        let textField = document.getElementById(field)

        if (!formFieldHasInput(textField)) {
            document.getElementById(field + "_error").style.display = "block"

            if (!errorFlag) {
                textField.focus()
            }

            errorFlag = true
        }
    }

    const drumShell = ["pearl", "tama", "yamaha", "ludwig", "sjc", "sonor"]
    let drumShellChecked = false

    for (const shellType of drumShell) {
        if (document.getElementById(shellType).checked) {
            drumShellChecked = true
        }
    }

    if (!drumShellChecked) {
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
        document.getElementById("cymbal_error").style.display = "block"
        errorFlag = true
    }
    const dateField = document.getElementById("pickup-date")

    if (dateField.value === "" ||
        dateField.value < dateField.min ||
        dateField.value > dateField.max) {
        document.getElementById("date_error").style.display = "block"

        if (!errorFlag) {
            dateField.focus()
        }

        errorFlag = true
    }

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
    document.getElementById("survey_form").addEventListener("submit", validate);
});