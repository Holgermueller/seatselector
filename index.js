"use strict";

let occupied = [];
let available = [];
let selected = [];

const createSeats = () => {
  const seatsContainers = document.getElementsByClassName("seats-containers");

  for (let i = 0; i < seatsContainers.length; i++) {
    console.log(seatsContainers);

    for (let j = 1; j <= 30; j++) {
      const button = document.createElement("button");
      button.classList.add("seat");
      seatsContainers[i].appendChild(button);
    }
  }
};

const selectSeat = () => {};

createSeats();
