let tickets = document.querySelectorAll('.input-ticket');
let cuponBtn = document.getElementById('cupon-btn');
let btnNext = document.getElementById('btn-next');
let amount = document.getElementById('amount').innerText;
let totalPrice = 0;
tickets.forEach((ticket) => {
   ticket.addEventListener('change', function (e) {
      let totalSeats = document.querySelector('.total-seats').innerHTML;
      let seatCount = document.getElementById('seat-count').innerText;
      totalSeats = Number(totalSeats);
      seatCount = Number(seatCount);
      amount = Number(amount);

      if (ticket.checked) {
         totalSeats -= 1;
         seatCount += 1;
         amount += 550;
         let levelText = e.target.parentNode.childNodes[3].innerText;
         let seatDetails = document.getElementById('seat-details');
         let seat1 = document.createElement('div');
         seat1.setAttribute('class', 'flex justify-between')
         seat1.setAttribute('id', 'seat-details-count');
         let p1 = document.createElement('p');
         p1.innerText = levelText;
         seat1.appendChild(p1);
         let p2 = document.createElement('p');
         p2.innerText = 'Economy';
         seat1.appendChild(p2);
         let p3 = document.createElement('p');
         p3.innerText = 550;
         seat1.appendChild(p3);
         seatDetails.appendChild(seat1);
      }
      else {
         totalSeats += 1;
         seatCount -= 1;
         amount -= 550;
         let seatDetails = document.getElementById('seat-details');
         let removeSeats = seatDetails.lastChild;
         removeSeats.remove();
         document.getElementById('discount-head').setAttribute('class', 'hidden');
         document.getElementById('discount-head1').setAttribute('class', 'hidden');
         document.getElementById('cupon-area').removeAttribute('class', 'hidden');
         document.getElementById('cupon-area').setAttribute('class', 'bg-white my-3 py-2 rounded-2xl flex');
      }
      if (seatCount > 4) {
         alert('Sorry you are reach the maximum of ticket buying');
         ticket.checked = false;
         totalSeats += 1;
         seatCount -= 1;
         amount -= 550;
         let seatDetails = document.getElementById('seat-details');
         let removeSeats = seatDetails.lastChild;
         removeSeats.remove();
         return;
      }
      document.querySelector('.total-seats').innerHTML = totalSeats;
      document.getElementById('seat-count').innerText = seatCount;
      totalPrice = amount;
      document.getElementById('amount').innerText = totalPrice;
      document.getElementById('grand-total').innerText = totalPrice;

      if (seatCount === 4) {
         cuponBtn.disabled = false;
      }
      else {
         cuponBtn.disabled = true;
      }

      keyUpHandler()
   })
})

const cuponInput = document.getElementById('cupon-input');
cuponBtn.addEventListener('click', function () {
   let discountPrice = document.getElementById('discount-price').innerText;
   discountPrice = Number(discountPrice);
   if (cuponInput.value === 'NEW15') {
      discountPrice = ((totalPrice * 15) / 100);
      let grandTotal = totalPrice - discountPrice;
      document.getElementById('grand-total').innerText = grandTotal;
      document.getElementById('discount-price').innerText = discountPrice;
   }
   else if (cuponInput.value === 'couple20') {
      discountPrice = ((totalPrice * 20) / 100);
      let grandTotal = totalPrice - discountPrice;
      document.getElementById('grand-total').innerText = grandTotal;
      document.getElementById('discount-price').innerText = discountPrice;
   }
   else {
      alert('sorry you type the wrong cupon');
      return;
   }

   document.getElementById('discount-head').removeAttribute('class', 'hidden');
   document.getElementById('discount-head1').removeAttribute('class', 'hidden');
   document.getElementById('cupon-area').setAttribute('class', 'hidden');
})


let phoneInput = document.getElementById('phone-number');
phoneInput.addEventListener('keyup', function keyUpHandler() {
   let phoneInputValue = Number(phoneInput);
   if (typeof (phoneInputValue) === 'number') {
      btnNext.disabled = false;
   }
   else {
      btnNext.disabled = true;
   }
})