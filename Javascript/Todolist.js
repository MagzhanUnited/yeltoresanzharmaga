// Get references to the input and list elements
      const animeInput = document.getElementById("animeInput");
      const animeList = document.getElementById("animeList");
  
      // Add anime to the list
      document.getElementById("addAnime").addEventListener("click", () => {
          const animeName = animeInput.value.trim();
          if (animeName) {
              const listItem = document.createElement("li");
              listItem.className = "list-group-item";
              listItem.innerHTML = `
                  ${animeName}
                  <button class="btn btn-danger btn-sm float-right delete">Delete</button>
                  <button class="btn btn-success btn-sm float-right complete">Mark as Completed</button>
              `;
              animeList.appendChild(listItem);
              animeInput.value = ""; // Clear the input field
          }
      });
  
      // Handle delete and mark as completed actions
      animeList.addEventListener("click", (e) => {
          const target = e.target;
          if (target.classList.contains("delete")) {
              // Smoothly fade out the anime name
              const listItem = target.parentElement;
              listItem.style.opacity = "0";
              setTimeout(() => {
                  listItem.remove();
              }, 500); // Adjust the delay to match the transition duration
          } else if (target.classList.contains("complete")) {
              target.parentElement.classList.toggle("completed");
          }
      });