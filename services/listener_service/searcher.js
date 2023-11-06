import { AtamekenService } from "../remote_service/atameken_service.js";

$(document).ready(function () {
  initListeners();
});

const initListeners = () => {
  $("#searchbtn").click(function () {
    $("#exampleModal").modal("show");
  });

  $("#searcherinput").on("input", async function () {
    var inputValue = $(this).val();
    const suggestions = await AtamekenService.getAnimeByName(inputValue);
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    const suggestionsContainer = $("#suggestions");
    suggestionsContainer.empty();
    filteredSuggestions.forEach((suggestion) => {
      suggestionsContainer.append(
        `<div class="suggestion">${suggestion}</div>`
      );
    });
  });
};
