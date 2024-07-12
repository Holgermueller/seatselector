"use strict";

let occupied = [];
let available = [];
let selected = 0;

const createSeats = () => {
  const seatsContainers = document.getElementsByClassName("seats-containers");

  for (let i = 0; i < seatsContainers.length; i++) {
    for (let j = 1; j <= 30; j++) {
      const button = document.createElement("button");
      button.classList.add("seat");
      button.classList.add("available-seat");
      button.id = i + "-" + j;
      button.setAttribute("Name", "Seat " + i + "-" + j);

      seatsContainers[i].appendChild(button);
    }
  }
  randomlyOccupySeats();
};

const randomlyOccupySeats = () => {
  const seats = document.getElementsByClassName("seat");
  let occupiedSeats = [];

  let keys = Object.keys(seats);

  let oneSeatToOccupy = seats[keys[(keys.length * Math.random()) << 0]];

  oneSeatToOccupy.classList.remove("available-seat");
  oneSeatToOccupy.classList.add("seat-occupied");

  occupiedSeats.push(oneSeatToOccupy);

  console.log(occupiedSeats);
};

const selectSeat = () => {
  const seats = document.getElementsByClassName("seat");
  const selectionDisplay = document.getElementById("showSelectedSeats");
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirmation-button");
  confirmButton.textContent = "Confirm seat selection";

  for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", () => {
      seats[i].classList.add("seat-selected");
      selected += 1;
      console.log(selected);

      if (selected == 0) {
        selectionDisplay.style.display = "none";
      } else {
        selectionDisplay.style.display = "block";
        selectionDisplay.innerHTML =
          "You have selected " + selected + " seat(s).";
      }
      selectionDisplay.appendChild(confirmButton);
    });
  }
};

createSeats();
selectSeat();
