const commentsList = [
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "11/02/2023",
  },
  {
    name: "Christina Cabrera",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
  },
  {
    name: "Isaac Tadesse",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    date: "10/20/2023",
  },
];

const commentBoxEl = document.querySelector(".comment-box");

const createCommentLayout = (comment) => {
  const commentEl = document.createElement("article");
  commentEl.classList.add("comment");

  const avatarEl = document.createElement("div");
  avatarEl.classList.add("avatar");

  const commentContentEl = document.createElement("div");
  commentContentEl.classList.add("comment__content");

  const commentHeaderEl = document.createElement("div");
  commentHeaderEl.classList.add("comment__header");

  const commentAuthorEl = document.createElement("h3");
  commentAuthorEl.classList.add("comment__author");
  commentAuthorEl.textContent = comment.name;

  const commentDateEl = document.createElement("h3");
  commentDateEl.classList.add("comment__date");
  commentDateEl.textContent = comment.date;

  const commentBodyEl = document.createElement("p");
  commentBodyEl.classList.add("comment__body");
  commentBodyEl.textContent = comment.comment;

  const dividerEl = document.createElement("hr");
  dividerEl.classList.add("divider");

  commentHeaderEl.appendChild(commentAuthorEl);
  commentHeaderEl.appendChild(commentDateEl);
  commentContentEl.appendChild(commentHeaderEl);
  commentContentEl.appendChild(commentBodyEl);
  commentEl.appendChild(avatarEl);
  commentEl.appendChild(commentContentEl);
  commentBoxEl.appendChild(commentEl);
  commentBoxEl.appendChild(dividerEl);
};

const renderAllComments = (allComments) => {
  commentBoxEl.innerHTML = "";

  allComments.forEach((comment) => {
    createCommentLayout(comment);
  });
};

renderAllComments(commentsList);

const addCommentForm = document.getElementById("addCommentForm");

addCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const commentName = event.target.name.value;
  const commentText = event.target.comment.value;
  const commentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const nameInput = document.querySelector(".comments-form__input--name");
  const textInput = document.querySelector(".comments-form__input--comment");

  let hasError = false;

  if (commentName.length === 0) {
    nameInput.classList.add("error");
    hasError = true;
  } else {
    nameInput.classList.remove("error");
  }

  if (commentText.length === 0) {
    textInput.classList.add("error");
    hasError = true;
  } else {
    textInput.classList.remove("error");
  }

  if (hasError) {
    return;
  }

  const comment = {
    name: commentName,
    comment: commentText,
    date: commentDate,
  };

  commentsList.unshift(comment);
  renderAllComments(commentsList);

  addCommentForm.reset();
});
