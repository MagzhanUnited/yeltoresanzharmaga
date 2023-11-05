
const myButton = document.getElementById("myButtonHelp");

// Function to add the rotate class on hover
function addRotateClass() {
myButton.classList.add("rotate");
}

// Function to remove the rotate class when the mouse leaves
function removeRotateClass() {
myButton.classList.remove("rotate");
}

// Add a mouseover event listener to trigger the rotation
myButton.addEventListener("mouseover", addRotateClass);

// Add a mouseout event listener to stop the rotation
myButton.addEventListener("mouseout", removeRotateClass);

// Add a click event listener to the button
myButton.addEventListener("click", function () {
// Redirect to another HTML page (change "other-page.html" to the desired page)
window.location.href = "help.html";
});
