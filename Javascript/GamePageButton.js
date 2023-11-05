const button = document.getElementById("animeButton");

    button.addEventListener("click", () => {
        // Add CSS animation class to the button
        button.style.animation = "scale 2.0s";
        
        // Play a sound (replace 'sound.mp3' with the actual sound file)
        const audio = new Audio("assets/him.mp3");
        audio.play();
        // Redirect to another HTML page (replace 'otherpage.html' with the actual URL)
        setTimeout(() => {
            window.location.href = "game.html";
        }, 7000);
    });