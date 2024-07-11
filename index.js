"use strict";

let occupied = [];
let available = [];
let selected = [];

const createSeats = () => {
  const seatsContainers = document.getElementsByClassName("seats-containers");

  for (let i = 0; i < seatsContainers.length; i++) {
    for (let j = 1; j <= 30; j++) {
      const button = document.createElement("button");
      button.classList.add("seat");
      button.classList.add("available-seat");
      button.id = i + "-" + j;

      seatsContainers[i].appendChild(button);
    }
  }
};

const selectSeat = () => {
  const seats = document.getElementsByClassName("seat");

  for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", (event) => {
      console.log(event.target.id);
    });
  }
};

createSeats();
selectSeat();
