const seatSystem = [
  {
    name: "A",
    seats: [
      {
        seatNumber: 1,
        booked: false,
      },
      {
        seatNumber: 2,
        booked: false,
      },
      {
        seatNumber: 3,
        booked: false,
      },
      {
        seatNumber: 4,
        booked: false,
      },
    ],
  },
  {
    name: "B",
    seats: [
      {
        seatNumber: 1,
        booked: false,
      },
      {
        seatNumber: 2,
        booked: false,
      },
      {
        seatNumber: 3,
        booked: false,
      },
      {
        seatNumber: 4,
        booked: false,
      },
    ],
  },
  {
    name: "C",
    seats: [
      {
        seatNumber: 1,
        booked: false,
      },
      {
        seatNumber: 2,
        booked: false,
      },
      {
        seatNumber: 3,
        booked: false,
      },
      {
        seatNumber: 4,
        booked: false,
      },
    ],
  },
];

const viewBox = document.querySelector(".seat-system");

function renderSeats(seatSystem) {
  for (let i = 0; i < seatSystem.length; i++) {
    const seatRow = `<div class="seat-row items-center w-full flex flex-nowrap gap-6 justify-center">

            <div class='px-4 py-2.5'>${seatSystem[i].name}</div>

            <button class="px-4 py-2.5 rounded-lg not-booked [&.not-booked]:bg-gray-100 [&.booked]:bg-green-500 [&.booked]:text-white" id='${seatSystem[i].name}${seatSystem[i].seats[0].seatNumber}${seatSystem[i].seats[0].booked}'>
                ${seatSystem[i].name}
                ${seatSystem[i].seats[0].seatNumber}
            </button>

            <button class="px-4 py-2.5 rounded-lg not-booked [&.not-booked]:bg-gray-100 [&.booked]:bg-green-500 [&.booked]:text-white me-12" id='${seatSystem[i].name}${seatSystem[i].seats[1].seatNumber}${seatSystem[i].seats[1].booked}'>
                ${seatSystem[i].name}
                ${seatSystem[i].seats[1].seatNumber}
            </button>

            <button class="px-4 py-2.5 rounded-lg not-booked [&.not-booked]:bg-gray-100 [&.booked]:bg-green-500 [&.booked]:text-white" id='${seatSystem[i].name}${seatSystem[i].seats[2].seatNumber}${seatSystem[i].seats[2].booked}'>
                ${seatSystem[i].name}
                ${seatSystem[i].seats[2].seatNumber}
            </button>

            <button class="px-4 py-2.5 rounded-lg not-booked [&.not-booked]:bg-gray-100 [&.booked]:bg-green-500 [&.booked]:text-white" id='${seatSystem[i].name}${seatSystem[i].seats[3].seatNumber}${seatSystem[i].seats[3].booked}'>
                ${seatSystem[i].name}
                ${seatSystem[i].seats[3].seatNumber}
            </button>

    </div>`;

    viewBox.innerHTML += seatRow;
  }

  addClickEventToButton();
}

renderSeats(seatSystem);

let bookedTotal = 0;

function addClickEventToButton() {
  const buttons = document.querySelectorAll(".seat-system button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let bookedSeats = document.querySelectorAll(".seat-system .booked").length + 1;

      if (button.classList.contains("not-booked")) {
        if (bookedSeats > 4) {
          return;
        }
        button.classList.remove("not-booked");
        button.classList.add("booked");
      } else {
        button.classList.remove("booked");
        button.classList.add("not-booked");
      }

      renderSelectedSeatList();
    });
  });
}

const selectedSeatList = document.querySelector(".booked-seats-list");
const totalPrice = document.querySelector(".total-price");

function renderSelectedSeatList() {
  const bookedSeats = document.querySelectorAll(".seat-system .booked");

  selectedSeatList.innerHTML = "";
  totalPrice.innerHTML = "";

  for (let i = 0; i < bookedSeats.length; i++) {
    const listItem = `<li class='flex items-center justify-between gap-4'>

          <span>${bookedSeats[i].textContent}</span>

          <span>Economy</span>

          <span>550</span>

          </li>`;
    selectedSeatList.innerHTML += listItem;
  }
  bookedTotal = bookedSeats.length * 550;
  totalPrice.innerHTML = `BDT: ${bookedSeats.length * 550}`;
}

const couponForm = document.querySelector(".coupon-form");
const grandTotal = document.querySelector(".grand-total-price");
const couponCodes = ["new15", "couple20"];

couponForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const couponCode = couponForm.querySelector("input[type=text]").value;

  if (!couponCodes.includes(couponCode)) {
    console.log("coupon code is not valid");
  } else {
    getGrandTotal(couponCode);
  }
});

function getGrandTotal(couponCode) {
  let newTotal = 0;

  if (couponCode == "new15") {
    newTotal = bookedTotal - (bookedTotal * 15) / 100;
  } else if (couponCode == "couple20") {
    newTotal = bookedTotal - (bookedTotal * 20) / 100;
  }
  grandTotal.innerHTML = `BDT: ${Math.ceil(newTotal)}`;
}

const infoForm = document.querySelector(".info-form");

infoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = infoForm.querySelector("input[type=text]");
  const phone = infoForm.querySelector("input[type=number]");
  const email = infoForm.querySelector("input[type=email]");

  if (name.value == "") {
    name.parentElement.classList.add("error");
  } else {
    name.parentElement.classList.remove("error");
  }

  if (phone.value == "") {
    phone.parentElement.classList.add("error");
  } else {
    phone.parentElement.classList.remove("error");
  }

  if (name.value && phone.value) {
    console.log("Your information is submitted successfully");
  }
});
