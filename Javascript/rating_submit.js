// Add an event listener to the "Submit Rating" button
document.getElementById("submitRating").addEventListener("click", function () {
    // Get the selected rating
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    
    if (selectedRating) {
        const ratingValue = parseInt(selectedRating.value);
        
        // Update the average rating
        const averageRating = parseFloat(document.getElementById("averageRating").textContent);
        const newAverageRating = (averageRating + ratingValue) / 2;
        
        document.getElementById("averageRating").textContent = newAverageRating.toFixed(1);
        
        // Reset the rating selection
        selectedRating.checked = false;
    } else {
        alert("Please select a rating before submitting.");
    }
});