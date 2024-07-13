"use strict";

let selected = 0;
let selectedSeats = [];

const createSeats = () => {
  const seatsContainers = document.getElementsByClassName("seats-containers");

  for (let i = 0; i < seatsContainers.length; i++) {
    for (let j = 1; j <= 30; j++) {
      const button = document.createElement("button");
      button.classList.add("seat");
      button.classList.add("available-seat");
      button.setAttribute("role", "button representing seat");
      button.setAttribute("name", "available-seat: " + j + "-" + i);
      button.textContent = "seat";
      button.id = j + "-" + i;

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
    oneSeatToOccupy.removeAttribute("name", "available-seat");
    oneSeatToOccupy.setAttribute(
      "name",
      "occupied-seat: " + oneSeatToOccupy.id
    );
    oneSeatToOccupy.disabled = true;

    occupiedSeats.push(oneSeatToOccupy);
  }
};

const selectSeat = (seat) => {
  seat.classList.remove("available-seat");
  seat.classList.add("seat-selected");
  seat.removeAttribute("name", "available-seat");
  seat.setAttribute("name", "selected-seat: " + seat.id);
  selectedSeats.push(seat);

  return selected++;
};

const deselectSeat = (seat) => {
  seat.classList.remove("seat-selected");
  seat.classList.add("available-seat");
  seat.removeAttribute("name", "selected-seat");
  seat.setAttribute("name", "available-seat:" + seat.id);

  let seatId = seat.id;

  let idToRemove = selectedSeats.findIndex((seat) => seat.id == seatId);

  selectedSeats.splice(idToRemove, 1);

  console.log(selectedSeats);

  return selected--;
};

const showConfirmation = () => {
  const selectionDisplay = document.getElementById("showSelectedSeats");
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirmation-button");
  confirmButton.textContent = "Confirm seat selection";
  confirmButton.setAttribute("id", "confirm");

  if (selected == 0) {
    selectionDisplay.style.display = "none";
  } else {
    selectionDisplay.style.display = "block";
    selectionDisplay.innerHTML = "You have selected " + selected + " seat(s).";
  }
  selectionDisplay.appendChild(confirmButton);
  confirmSelected(selected);
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

const confirmSelected = () => {
  const confirmButton = document.getElementById("confirm");

  confirmButton.addEventListener("click", () => {
    let seats = document.getElementsByClassName("seat-selected");
    for (let i = 0; i < seats.length; i++) {
      let seat = seats[i];

      seat.classList.remove("available-seat");
      seat.classList.add("confirmed-seat");
    }

    console.log(selectedSeats);
  });
};

createSeats();
toggleSelection();
