// Get all "Watch" buttons with the class "btn-watch"
var watchButtons = document.querySelectorAll(".btn-watch");

// Add a click event listener to each "Watch" button
watchButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    // Scroll to the video player section smoothly
    document
      .getElementById("videoPlayerSection")
      .scrollIntoView({ behavior: "smooth" });
  });
});
function playVideo(videoSource) {
  var video = document.getElementById("animeVideo");
  video.src = videoSource;
  video.load(); // Load the new video source
  video.play(); // Play the video
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}