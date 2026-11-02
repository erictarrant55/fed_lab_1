// /*
//     Beer League Hockey Registration
//     October 29, 2026
//     Eric Tarrant
//  */

const validate = (event) => {
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


/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
const formHasErrors = () => {
    let errorFlag = false

    const requiredTextFields = ["eventRegistrationForm", "nameError",
        "emailError, ageError "]

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