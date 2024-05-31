import BandSiteApi from "./band-site-api.js";

const API_KEY = "421b5fd9-4528-42d7-a52b-1946075ad7f2";
const bandSiteAPI = new BandSiteApi(API_KEY);

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

  const date = new Date(comment.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  commentDateEl.textContent = date;

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

const loadComments = async () => {
  const comments = await bandSiteAPI.getComments();
  renderAllComments(comments);
};

loadComments();

const addCommentForm = document.getElementById("addCommentForm");

addCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const commentName = event.target.name.value;
  const commentText = event.target.comment.value;
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

  const postComment = async () => {
    const comment = {
      name: commentName,
      comment: commentText,
    };

    await bandSiteAPI.postComment(comment);

    const loadAllComments = async () => {
      const commentsList = await bandSiteAPI.getComments();
      renderAllComments(commentsList);
    };

    loadAllComments();
  };

  postComment();

  addCommentForm.reset();
});
