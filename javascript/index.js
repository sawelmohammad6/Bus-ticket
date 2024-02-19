const seats = document.querySelectorAll('.kbd');
const selectedSeatsDisplay = document.getElementById('zero');
const totalPriceDisplay = document.querySelector('span:nth-child(2)');
const grandTotalDisplay = document.querySelector('span:nth-child(3)');
const seatPrice = 500; 

let selectedSeats = [];
let totalPrice = 0;

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (selectedSeats.length >= 4) {
      alert('You can only select a maximum of 4 seats.');
      return;
    }

    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      selectedSeats.splice(selectedSeats.indexOf(seat), 1);
      totalPrice -= seatPrice;
    } else {
      seat.classList.add('selected');
      selectedSeats.push(seat);
      totalPrice += seatPrice;
    }

    selectedSeatsDisplay.textContent = selectedSeats.length;
    totalPriceDisplay.textContent = totalPrice;
    grandTotalDisplay.textContent = totalPrice;
  });
});

const couponInput = document.querySelector('input[type="text"]');
const applyButton = document.querySelector('button');

applyButton.addEventListener('click', () => {
  const couponCode = couponInput.value.trim();

  if (couponCode === 'couple15') {
    if (selectedSeats.length !== 2) {
      alert('This coupon code is only valid for 2 seats.');
      return;
    }

    const discount = totalPrice * 0.15;
    totalPrice -= discount;
    grandTotalDisplay.textContent = totalPrice;
    alert(`Coupon code applied! You received a discount of BDT ${discount.toFixed(2)}`);
  } else if (couponCode === 'new20') {
    const discount = totalPrice * 0.2;
    totalPrice -= discount;
    grandTotalDisplay.textContent = totalPrice;
    alert(`Coupon code applied! You received a discount of BDT ${discount.toFixed(2)}`);
  } else {
    alert('Invalid coupon code.');
  }

  couponInput.value = '';
});
