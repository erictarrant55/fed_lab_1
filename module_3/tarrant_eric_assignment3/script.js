// /*
//     Drum kit design survey form
//     October 29, 2026
//     Eric Tarrant
//  */


const validate = (e) => {
    //	Hides all error elements on the page
    hideAllErrors();

    //	Determine if the form has errors
    if (formHasErrors()) {
        // 	Prevents the form from submitting
        e.preventDefault();
        return false;
    }

    return true;
}
console.log(validate)

const form = document.getElementById("survey_form");

form.addEventListener("submit", validate);
/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
const formHasErrors = () => {
    let errorFlag = false

    const requiredTextFields = ["name", "email",
        "genre_of_drummer", "band_name", "favorite_drummer"]

    //	Loop through the text fields and check to see the user entered a value
    for (const field of requiredTextFields) {
        let textField = document.getElementById(field)

        //	Determine if the user entered text
        if (!formFieldHasInput(textField)) {
            document.getElementById(field + "_error").style.display = "block"

            //	Determine if this is the first error
            if (!errorFlag) {
                textField.focus()
            }

            //	Raise the error flag indicating an error
            errorFlag = true
        }
    }
    console.log(formHasErrors)
    return errorFlag;
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

// Attach the listener once the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("survey_form").addEventListener("submit", validate);
});