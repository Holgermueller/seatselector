"use strict";

let selected = 0;

const createSeats = () => {
  const seatsContainers = document.getElementsByClassName("seats-containers");

  for (let i = 0; i < seatsContainers.length; i++) {
    for (let j = 1; j <= 30; j++) {
      const button = document.createElement("button");
      button.classList.add("seat");
      button.classList.add("available-seat");

      seatsContainers[i].appendChild(button);
    }
  }
  randomlyOccupySeats();
};

const randomlyOccupySeats = () => {
  const seats = document.getElementsByClassName("seat");
  let occupiedSeats = [];

  let keys = Object.keys(seats);

  for (let i = 0; i < 50; i++) {
    let oneSeatToOccupy = seats[keys[(keys.length * Math.random()) >> 0]];

    oneSeatToOccupy.classList.remove("available-seat");
    oneSeatToOccupy.classList.add("seat-occupied");
    oneSeatToOccupy.disabled = true;

    occupiedSeats.push(oneSeatToOccupy);
  }
};

const selectSeat = (seat) => {
  seat.classList.remove("available-seat");
  seat.classList.add("seat-selected");
  return selected++;
};

const deselectSeat = (seat) => {
  seat.classList.remove("seat-selected");
  seat.classList.add("available-seat");
  return selected--;
};

const showConfirmation = () => {
  const selectionDisplay = document.getElementById("showSelectedSeats");
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirmation-button");
  confirmButton.textContent = "Confirm seat selection";
  console.log(selected);

  if (selected == 0) {
    selectionDisplay.style.display = "none";
  } else {
    selectionDisplay.style.display = "block";
    selectionDisplay.innerHTML = "You have selected " + selected + " seat(s).";
  }
  selectionDisplay.appendChild(confirmButton);
};

const toggleSelection = () => {
  const seats = document.getElementsByClassName("seat");

  for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", () => {
      let seat = seats[i];
      if (seats[i].classList.contains("available-seat")) {
        selectSeat(seat);
      } else {
        deselectSeat(seat);
      }
      showConfirmation();
    });
  }
};

createSeats();
toggleSelection();
