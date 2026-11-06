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

        /*Creates the table elements and displays the information **/
        const displayData = (
            name,
            email,
            genre,
            bandName,
            favoriteDrummer,
            message,
            shell,
            cymbalBrand,
            cymbalTypes,
            pickupDate
        ) => {

            // Get the table body
            let tbody = document.getElementById("list");

            // Create a new table row
            let newTr = document.createElement("tr");

            // Store survey responses
            const values = [
                name,
                email,
                genre,
                bandName,
                favoriteDrummer,
                message,
                shell,
                cymbalBrand,
                cymbalTypes,
                pickupDate
            ];

            // Create table cells
            for (const value of values) {

                let newTd = document.createElement("td");

                newTd.textContent = value;

                newTr.appendChild(newTd);
            }

            // Add the row to the table
            tbody.appendChild(newTr);

            // Display the clear button
            document.getElementById("clearbutton").style.display = "block";

            // Save the table data
            saveListData();
        };


        /**
         * Clears the survey results table.
         */
        const clearButton = () => {

            let tbody = document.getElementById("list");

            // Remove all table rows
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }

            // Hide the clear button
            document.getElementById("clearbutton").style.display = "none";

            // Remove saved survey data
            removeLocalStorage("surveyData");
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