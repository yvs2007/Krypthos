function World() {
    // Get a reference to the submit button element
    var submitButton = document.querySelector(".SubmitButton");
    // Check if the button exists before adding the event listener
    if (submitButton) {
        // Add a click event listener to the submit button
        submitButton.addEventListener("click", function () {
            // Get the value from the input field
            var userInput = document.getElementById("UserMessage").value;
            // Now you can do something with the user input
            alert("User input: " + userInput);
        });
    }
}
