function toggleChat() {
          var chatPopup = document.getElementById("myChat");
          chatPopup.style.display = (chatPopup.style.display === "none" || chatPopup.style.display === "") ? "block" : "none";
        }

        function sendMessage() {
          // Add your code to handle the message submission
          // For now, let's just close the chat
          toggleChat();
        }