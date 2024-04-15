let tickets = document.querySelectorAll('.input-ticket');
let cuponBtn = document.getElementById('cupon-btn');
let btnNext = document.getElementById('btn-next');
let phoneInput = document.getElementById('phone-number');
let amount = document.getElementById('amount').innerText;
let totalPrice = 0;
tickets.forEach((ticket) => {
   ticket.addEventListener('change', function () {
      let totalSeats = document.querySelector('.total-seats').innerHTML;
      let seatCount = document.getElementById('seat-count').innerText;
      totalSeats = Number(totalSeats);
      seatCount = Number(seatCount);
      amount = Number(amount);

      if (ticket.checked) {
         totalSeats -= 1;
         seatCount += 1;
         amount += 550;
      }
      else {
         totalSeats += 1;
         seatCount -= 1;
         amount -= 550;
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
      
      if(phoneInput.value <= 0 ){
         btnNext.disabled = false;
      }
      else{
         btnNext.disabled = true;
      }
   })
   
})

const cuponInput = document.getElementById('cupon-input');
   cuponBtn.addEventListener('click', function () {
         if (cuponInput.value === 'NEW15') {
            let grandTotal = totalPrice - ((totalPrice * 15) / 100);
            document.getElementById('grand-total').innerText = grandTotal;
       }
         if (cuponInput.value === 'couple20') {
            let grandTotal = totalPrice - ((totalPrice * 20) / 100);
            document.getElementById('grand-total').innerText = grandTotal;
       }
})