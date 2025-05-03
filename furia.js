function toggleLike(button) {
    var liked = button.getAttribute("data-liked") === "true";

    if (liked) {
        button.setAttribute("data-liked", "false");
        button.querySelector(".heart-icon").textContent = "🖤";
    } else {
        button.setAttribute("data-liked", "true");
        button.querySelector(".heart-icon").textContent = "❤️";
    }
}

function submitComment() {
    var commentText = document.getElementById("comment-input").value;

    if (commentText.trim() !== "") {
        var commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        var commentAuthor = document.createElement("div");
        commentAuthor.classList.add("comment-author");

        var authorPhoto = document.createElement("img");
        authorPhoto.src = "https://i.pinimg.com/736x/b5/8d/57/b58d57ce78f623ae294288dadc293a6a.jpg"; // Imagem de exemplo
        authorPhoto.alt = "Fã";
        authorPhoto.classList.add("comment-author-photo");

        var authorNameTime = document.createElement("p");
        authorNameTime.innerHTML = "<strong>Fã</strong> <span class='comment-time'>há 1 segundo</span>";

        commentAuthor.appendChild(authorPhoto);
        commentAuthor.appendChild(authorNameTime);

        var commentTextElem = document.createElement("p");
        commentTextElem.classList.add("comment-text");
        commentTextElem.textContent = commentText;

        commentCard.appendChild(commentAuthor);
        commentCard.appendChild(commentTextElem);

        var commentsList = document.querySelector(".comments-list");
        commentsList.appendChild(commentCard);

        document.getElementById("comment-input").value = "";
    } else {
        alert("Por favor, digite um comentário!");
    }
}