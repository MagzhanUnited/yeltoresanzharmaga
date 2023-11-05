document.addEventListener('DOMContentLoaded', () => {
    const animes = document.querySelectorAll('.anime');
    const characters = document.querySelectorAll('.character');

    animes.forEach(anime => {
        anime.addEventListener('dragstart', drag);
    });

    characters.forEach(character => {
        character.addEventListener('dragover', allowDrop);
        character.addEventListener('drop', drop);
    });
});

document.getElementById("redirectButton").addEventListener("click", function() {
    // Перенаправление на другую страницу
    window.location.href = "/yeltoresanzharmaga/index.html";
});

function drag(e) {
    e.dataTransfer.setData("text", e.target.innerText);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const draggedAnime = document.querySelector('.anime:is(:hover)');

    if (draggedAnime && e.target.getAttribute("data-anime") === draggedAnime.innerText) {
        e.target.appendChild(draggedAnime);
        draggedAnime.classList.add("correct");
        setTimeout(() => {
            draggedAnime.classList.remove("correct");
        }, 1500);
    } else {
        draggedAnime.classList.add("incorrect");
        setTimeout(() => {
            draggedAnime.classList.remove("incorrect");
        }, 1500);
    }
}
