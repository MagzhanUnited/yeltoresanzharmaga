document.getElementById("popupButton").addEventListener("click", showPopup);
  
function showPopup() {
    alert("Your localhost number is 63342.");
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("The form was submitted successfully.");
    }
});

function validateForm() {
    const emailInput = document.getElementById("emailInput");
    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

tippy("#myElement", {
    content: "This is the button to submit data",
    placement: "top",
});

document.getElementById("notificationButton").addEventListener("click", function() {
    showNotification("This is an important notice!");
});

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}