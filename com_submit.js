document.getElementById("submit-comment").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;
    const commentList = document.getElementById("comment-list");

    if (name && commentText) {
        // Create a new comment element
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `<strong>${name}:</strong> ${commentText}`;

        // Append the comment element to the comment list
        commentList.appendChild(commentElement);

        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    }
});