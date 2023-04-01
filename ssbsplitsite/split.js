function createInputBoxes() {
	var totalValues = document.getElementById("total-values").value;
	var inputBoxes = "";
	for (var i = 0; i < totalValues; i++) {
		inputBoxes += "<label for='value-" + (i+1) + "'>Money Added " + (i+1) + ":</label><input type='number' id='value-" + (i+1) + "' name='value-" + (i+1) + "'><br>";
	}
	document.getElementById("input-boxes").innerHTML = inputBoxes;
}

function splitValues() {
	var totalValues = document.getElementById("total-values").value;
	var finalResult = document.getElementById("final-result").value;
	
	// calculate the total of input values
	var totalInput = 0;
	for (var i = 0; i < totalValues; i++) {
		var inputValue = document.getElementById("value-" + (i+1)).value;
		totalInput += parseFloat(inputValue);
	}
	
	// calculate the ratio for each value
	var ratio = totalInput / finalResult;
	
	// split the final result into each value based on the ratio
	var output = "";
	for (var i = 0; i < totalValues; i++) {
		var inputValue = document.getElementById("value-" + (i+1)).value;
		var value = (inputValue / ratio).toFixed(2);
		output += "Person " + (i+1) + ": " + value + "<br>";
	}
	
	// display the output
	document.getElementById("output").innerHTML = output;
}