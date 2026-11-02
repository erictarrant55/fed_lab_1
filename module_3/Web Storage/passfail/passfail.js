/*
	Pass/Fail Demonstration 
	Alan Simpson
	Sept 24, 2026
*/


/** Sets up the event listeners */
const load = () => {
	//Check local storage for existing data
	if (localStorage.getItem("marksData")) {
		// Populate the table with the stored data
		document.getElementById("list").innerHTML = localStorage.getItem("marksData")

		document.getElementById("clearbutton").style.display = "block"
	}


	document.getElementById("submit").addEventListener("click", checkData)
	document.getElementById("clearbutton").addEventListener("click", clearButton)
}

/** Retrieves and validates the data */
const checkData = () => {
	//	Retrieve the values from the DOM
	let name = document.getElementById("name").value
	let mark = document.getElementById("mark").value

	//	Javascript will treat an empty string as 0, 
	//	so first we must parse the mark into a number
	mark = parseFloat(mark)
	if (name != "" && isNaN(mark) == false) {
		displayData(name, mark)
	}

	resetFields()
}

/**
 * Create DOM elements and add them to the DOM
 *
 * @param {*} name 
 * @param {*} mark 
 */
const displayData = (name, mark) => {
	//	Declare variables
	let passfail = "Fail"
	let tbody = document.getElementById("list")

	if (mark >= 50) {
		passfail = "Pass"
	}

	//	Create the table elements using DOM methods
	//	Build the row and its tds
	let newTr = document.createElement("tr")
	let newNameTd = document.createElement("td")
	let newMarkTd = document.createElement("td")
	let newPFTd = document.createElement("td")

	//	Add the data to the new elements
	newNameTd.textContent = name
	newMarkTd.textContent = mark
	newPFTd.textContent = passfail
	newTr.appendChild(newNameTd)
	newTr.appendChild(newMarkTd)
	newTr.appendChild(newPFTd)

	//	Append the new tr to the tbody
	tbody.appendChild(newTr)

	clearbutton.style.display = "block"
	saveListData()
}

/** Clears the data in the form and hides the clear button */
const clearButton = () => {
	let tbody = document.getElementById("list");
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	clearbutton.style.display = "none";
	resetFields();
	saveListData()
}

/** Resets the form's inputs */
const resetFields = () => {
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
}

// Save the Data 
const saveListData = () => {
	let list = document.getElementById("List")
	localStorage.setItem("marksData", list.innerHTML)

}


document.addEventListener("DOMContentLoaded", load);