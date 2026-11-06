/*
    Drum kit design survey form
    October 29, 2026
    Eric Tarrant
 */
/**
 * Submit event handler that validates the survey form.
 * Hides any previously shown errors, then runs all validation checks.
 * If any check fails, the form submission is cancelled.
 *
 * @param { SubmitEvent } e - The form's submit event.
    * @returns { boolean } `true` if the form is valid and may be submitted,
 * `false` if validation failed and submission was prevented.
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

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
/**
 * Sets a browser cookie.
 *
 * @param {string} name - The cookie name.
 * @param {string} value - The cookie value (not URI-encoded by this function).
 * @param {number} [days] - Number of days until the cookie expires.
 *   If omitted, a session cookie is created.
 * @returns {void}
 */
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


/**
 * Deletes a browser cookie.
 *
 * @param {string} name - The cookie name.
 */
function deleteCookie(name) {

    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}

/**
 * Retrieves the validated survey information.
 */
const checkData = () => {

    // Retrieve values from the form
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let genre = document.getElementById("genre_of_drummer").value;

    let bandName = document.getElementById("band_name").value;

    let favoriteDrummer =
        document.getElementById("favorite_drummer").value;

    let message = document.getElementById("message").value;

    let pickupDate = document.getElementById("pickup-date").value;


    // Retrieve selected drum shell
    let shell = document.querySelector(
        'input[name="shellType"]:checked'
    ).value;


    // Retrieve selected cymbal brand
    let cymbalBrand = document.querySelector(
        'input[name="cymbalBrand"]:checked'
    ).value;


    // Retrieve selected cymbal types
    const cymbalTypes = [
        "crash",
        "ride",
        "splash",
        "china",
        "clapstack"
    ];

    let selectedTypes = [];

    for (const type of cymbalTypes) {

        if (document.getElementById(type).checked) {

            selectedTypes.push(
                document.getElementById(type).value
            );
        }
    }


    // Display the survey information
    displayData(
        name,
        email,
        genre,
        bandName,
        favoriteDrummer,
        message,
        shell,
        cymbalBrand,
        selectedTypes.join(", "),
        pickupDate
    );


    // Reset the form fields
    document.getElementById("survey_form").reset();

    // Return focus to the name field
    document.getElementById("name").focus();
};

/**
 * Saves the table contents to LocalStorage.
 */
const saveListData = () => {

    let list = document.getElementById("list");

    setLocalStorage("surveyData", list.innerHTML);
};


/**
 * Attaches the validation handler to the survey form
 * once the DOM has finished loading.
 *
 * @listens DOMContentLoaded
 */
// Attach the listener once the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey_form");
    console.log("Form found:", form);
    form.addEventListener("submit", validate);
});