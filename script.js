function generateResponse() {

    let text = document.querySelector("textarea").value;

    let output = document.querySelector(".output");

    if(text === ""){

        output.innerHTML =
        "Please enter a workplace task.";

    } else {

        output.innerHTML =
        "AI Assistant Response:<br><br>" +
        "You entered: " + text +
        "<br><br>Suggested professional response generated successfully.";
    }
}
