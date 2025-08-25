function convertTemperature() {
    const inputT = parseFloat(document.getElementById("inputT").value);
    const inputUnit = document.getElementById("inputUnit").value; 
    const outputUnit = document.getElementById("outputUnit").value;

    if (isNaN(inputT)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    let C;

    // Convert input temperature to Celsius
    switch (inputUnit) {
        case "C": 
            C = inputT;
            break;  
        case "F": 
            C = (inputT - 32) * 5/9;
            break;
        case "K": 
            C = inputT - 273.15;
            break;
    }

    let outputT;

    // Convert from Celsius to target unit
    switch (outputUnit) {
        case "C": 
            outputT = C;
            break;  
        case "F": 
            outputT = (C * 9/5) + 32;
            break;
        case "K": 
            outputT = C + 273.15;
            break;
    }

    document.getElementById("result").textContent = `${inputT}°${inputUnit.charAt(0).toUpperCase()} = ${outputT.toFixed(2)}°${outputUnit.charAt(0).toUpperCase()}`;
}
