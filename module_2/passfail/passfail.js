/*
	Pass/Fail Demonstration 

	Alan Simpson
*/


/** Sets up the event listeners */
const load = () => {


}

/** Retrieves and validates the data */
const checkData = () => {

}

/**
 * Create DOM elements and add them to the DOM
 *
 * @param {*} name 
 * @param {*} mark 
 */
const displayData = (name, mark) => {
	//	Declare variables

}

/** Clears the data in the form and hides the clear button */
const clearButton = () => {
	let tbody = document.getElementById("list");
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	clearbutton.style.display = "none";
	resetFields();

}

/** Resets the form's inputs */
const resetFields = () => {
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
}


document.addEventListener("DOMContentLoaded", load);












