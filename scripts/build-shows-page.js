const showsList = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
];

const showsListEl = document.querySelector(".shows__list");

function createShowsLayout(show) {
  const showElOne = document.createElement("article");
  showElOne.classList.add("show");
  showElOne.classList.add("show--big-screen");

  const headingElOne = document.createElement("h5");
  headingElOne.classList.add("show__header");
  headingElOne.textContent = "DATE";

  const headingElTwo = document.createElement("h5");
  headingElTwo.classList.add("show__header");
  headingElTwo.textContent = "VENUE";

  const headingElThree = document.createElement("h5");
  headingElThree.classList.add("show__header");
  headingElThree.textContent = "LOCATION";

  const headingElFour = document.createElement("h5");
  headingElFour.classList.add("show__header");
  headingElFour.textContent = "";

  showElOne.appendChild(headingElOne);
  showElOne.appendChild(headingElTwo);
  showElOne.appendChild(headingElThree);
  showElOne.appendChild(headingElFour);

  showsListEl.appendChild(showElOne);

  const showElTwo = document.createElement("article");
  showElTwo.classList.add("show");

  const showRowElOne = document.createElement("div");
  showRowElOne.classList.add("show__row");

  const showHeaderElOne = document.createElement("h5");
  showHeaderElOne.classList.add("show__header");
  showHeaderElOne.textContent = "DATE";

  const showValueElOne = document.createElement("h3");
  showValueElOne.classList.add("show__value");
  showValueElOne.textContent = show.date;

  showRowElOne.appendChild(showHeaderElOne);
  showRowElOne.appendChild(showValueElOne);

  const showRowElTwo = document.createElement("div");
  showRowElTwo.classList.add("show__row");

  const showHeaderElTwo = document.createElement("h5");
  showHeaderElTwo.classList.add("show__header");
  showHeaderElTwo.textContent = "VENUE";

  const showValueElTwo = document.createElement("p");
  showValueElTwo.classList.add("show__value");
  showValueElTwo.textContent = show.venue;

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

  const buttonOne = document.createElement("button");
  buttonOne.classList.add("button");
  buttonOne.classList.add("button--buy-tickets");
  buttonOne.textContent = "BUY TICKETS";
  showRowElFour.appendChild(buttonOne);

  showElTwo.appendChild(showRowElOne);
  showElTwo.appendChild(showRowElTwo);
  showElTwo.appendChild(showRowElThree);
  showElTwo.appendChild(showRowElFour);

  showsListEl.appendChild(showElTwo);

  const showsDivider = document.createElement("hr");
  showsDivider.classList.add("shows__divider");

  showsListEl.appendChild(showsDivider);
}

function renderAllShows(allShows) {
  showsListEl.innerHTML = "";

  allShows.forEach((show) => {
    createShowsLayout(show);
  });
}

renderAllShows(showsList);
