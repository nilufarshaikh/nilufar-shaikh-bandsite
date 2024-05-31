import BandSiteApi from "./band-site-api.js";

const API_KEY = "421b5fd9-4528-42d7-a52b-1946075ad7f2";
const bandSiteAPI = new BandSiteApi(API_KEY);

const toggleShowItem = (event) => {
  const selectedShowEl = document.querySelector(".show--selected");
  const clickedShowEl = event.target.closest(".show");

  if (selectedShowEl && clickedShowEl !== selectedShowEl) {
    selectedShowEl.classList.remove("show--selected");
  }

  clickedShowEl.classList.add("show--selected");
};

const showsListEl = document.querySelector(".shows__list");

const createExtraHeaderLayout = () => {
  const showElOne = document.createElement("article");
  showElOne.classList.add("show");
  showElOne.classList.add("show--extra");

  const showRowEl1 = document.createElement("div");
  showRowEl1.classList.add("show__row");

  const headingElOne = document.createElement("h5");
  headingElOne.classList.add("show__header");
  headingElOne.classList.add("show__header--extra");
  headingElOne.textContent = "DATE";

  showRowEl1.appendChild(headingElOne);

  const showRowEl2 = document.createElement("div");
  showRowEl2.classList.add("show__row");

  const headingElTwo = document.createElement("h5");
  headingElTwo.classList.add("show__header");
  headingElTwo.classList.add("show__header--extra");
  headingElTwo.textContent = "VENUE";

  showRowEl2.appendChild(headingElTwo);

  const showRowEl3 = document.createElement("div");
  showRowEl3.classList.add("show__row");

  const headingElThree = document.createElement("h5");
  headingElThree.classList.add("show__header");
  headingElThree.classList.add("show__header--extra");
  headingElThree.textContent = "LOCATION";

  showRowEl3.appendChild(headingElThree);

  const showRowEl4 = document.createElement("div");
  showRowEl4.classList.add("show__row");

  const headingElFour = document.createElement("h5");
  headingElFour.classList.add("show__header");
  headingElFour.classList.add("show__header--extra");
  headingElFour.textContent = "";

  showRowEl4.appendChild(headingElFour);

  showElOne.appendChild(showRowEl1);
  showElOne.appendChild(showRowEl2);
  showElOne.appendChild(showRowEl3);
  showElOne.appendChild(showRowEl4);
  showsListEl.appendChild(showElOne);
};

const createShowsLayout = (show) => {
  const showEl = document.createElement("article");
  showEl.classList.add("show");
  showEl.addEventListener("click", toggleShowItem);

  const showRowElOne = document.createElement("div");
  showRowElOne.classList.add("show__row");
  showRowElOne.classList.add("show__row--top");

  const showHeaderElOne = document.createElement("h5");
  showHeaderElOne.classList.add("show__header");
  showHeaderElOne.textContent = "DATE";

  const showValueElOne = document.createElement("h3");
  showValueElOne.classList.add("show__value");

  const date = new Date(show.date).toDateString();
  showValueElOne.textContent = date;

  showRowElOne.appendChild(showHeaderElOne);
  showRowElOne.appendChild(showValueElOne);

  const showRowElTwo = document.createElement("div");
  showRowElTwo.classList.add("show__row");

  const showHeaderElTwo = document.createElement("h5");
  showHeaderElTwo.classList.add("show__header");
  showHeaderElTwo.textContent = "VENUE";

  const showValueElTwo = document.createElement("p");
  showValueElTwo.classList.add("show__value");
  showValueElTwo.textContent = show.place;

  showRowElTwo.appendChild(showHeaderElTwo);
  showRowElTwo.appendChild(showValueElTwo);

  const showRowElThree = document.createElement("div");
  showRowElThree.classList.add("show__row");

  const showHeaderElThree = document.createElement("h5");
  showHeaderElThree.classList.add("show__header");
  showHeaderElThree.textContent = "LOCATION";

  const showValueElThree = document.createElement("p");
  showValueElThree.classList.add("show__value");
  showValueElThree.textContent = show.location;

  showRowElThree.appendChild(showHeaderElThree);
  showRowElThree.appendChild(showValueElThree);

  const showRowElFour = document.createElement("div");
  showRowElFour.classList.add("show__row");
  showRowElFour.classList.add("show__row--btn");

  const buttonOne = document.createElement("button");
  buttonOne.classList.add("button");
  buttonOne.classList.add("button--buy-tickets");
  buttonOne.textContent = "BUY TICKETS";

  const buttonLinkOne = document.createElement("a");
  buttonLinkOne.classList.add("show__button");
  buttonLinkOne.setAttribute("href", "#");

  buttonLinkOne.appendChild(buttonOne);
  showRowElFour.appendChild(buttonLinkOne);

  showEl.appendChild(showRowElOne);
  showEl.appendChild(showRowElTwo);
  showEl.appendChild(showRowElThree);
  showEl.appendChild(showRowElFour);
  showsListEl.appendChild(showEl);

  const showsDivider = document.createElement("hr");
  showsDivider.classList.add("shows__divider");

  showsListEl.appendChild(showsDivider);
};

const renderAllShows = (allShows) => {
  showsListEl.innerHTML = "";

  createExtraHeaderLayout();

  allShows.forEach((show) => {
    createShowsLayout(show);
  });
};

const getShowsResponse = async () => {
  const showsList = await bandSiteAPI.getShows();
  renderAllShows(showsList);
};

getShowsResponse();
