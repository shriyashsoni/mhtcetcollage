async function getPrediction() {
    let input = document.getElementById("userInput").value;
    let percentile = parseFloat(input);
    let typingIndicator = document.getElementById("typingIndicator");
    
    if (isNaN(percentile) || percentile < 0 || percentile > 100) {
        alert("Please enter a valid percentile between 0 and 100.");
        return;
    }
    typingIndicator.style.display = "block";
    
    const response = await fetch(`/predict?percentile=${percentile}`);
    const data = await response.json();
    
    typingIndicator.style.display = "none";
    alert(data.result);
}
