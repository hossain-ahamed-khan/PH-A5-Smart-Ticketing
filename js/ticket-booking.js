// -----------get id of the selected seat------------ 

const seatCollections = document.querySelectorAll("#seat-collections button");

const buttonPressed = e => {
    const selectedSeat = e.target.id;
    viewSeatDetails(selectedSeat);
}

for (let seat of seatCollections) {
    seat.addEventListener("click", buttonPressed);
}

// --------next button enable/disable functionality-------------- 

function invokingOnKeyUpEvent() {
    const ticketDetails = document.getElementById("ticket-details");
    const countTicket = (ticketDetails.childNodes.length) - 2;
    const numValue = event.target.value;
    console.log(typeof numValue);

    if (numValue.length > 0 && countTicket > 0) {
        nextBtn = document.getElementById("next-btn");
        nextBtn.disabled = false;
    }
}


// ---------common function to insert selected seat details to the table------------ 

function viewSeatDetails(seatNum) {
    const seatElement = document.getElementById(seatNum);
    const seat = seatElement.innerText;

    seatElement.style.backgroundColor = "#1DD100";
    seatElement.style.color = "#FFFFFF";

    const ticketDetails = document.getElementById("ticket-details");
    const newTicketDetails = document.createElement("tr");
    newTicketDetails.innerHTML = `
                            <td>${seat}</td>
                            <td>Economy</td>
                            <td>550</td> `
    ticketDetails.appendChild(newTicketDetails);

    const countTicket = (ticketDetails.childNodes.length) - 2;

    const numberOfSelectedSeats = document.getElementById("increment-counter");
    numberOfSelectedSeats.innerText = countTicket;

    const numberOfRemainingSeats = document.getElementById("total-seats");
    const remainingSeats = 40 - countTicket;
    numberOfRemainingSeats.innerText = remainingSeats;

    const totalPrice = document.getElementById("total-price");
    const totalTicketPrice = 550 * countTicket;
    totalPrice.innerText = totalTicketPrice;

    const grandTotal = document.getElementById("grand-total");
    const ticketGrandTotal = totalTicketPrice;
    grandTotal.innerText = ticketGrandTotal;

    if (countTicket == 4) {

        const applyCopunBtn = document.getElementById("copuon-btn");
        applyCopunBtn.disabled = false;
        applyCopunBtn.style.backgroundColor = "#1DD100";
        applyCopunBtn.style.color = "#FFFFFF";

        setTimeout(() => { alert("You reached maximum number of tickets"); }, 1000);
        const seatCollections = document.querySelectorAll("#seat-collections button");
        for (let seat of seatCollections) {
            seat.disabled = true;
        }
    }

    seatElement.disabled = true;
}


// ---------coupon discount function----------- 

function applyCopuonDiscount() {
    const fifteenPercentCoupon = "NEW15";
    const twentyPercentCoupon = "Couple 20";

    const ticketDetails = document.getElementById("ticket-details");
    const countTicket = (ticketDetails.childNodes.length) - 2;
    const totalTicketPrice = 550 * countTicket;

    const copuonText = document.getElementById("copuon-text").value;

    if (copuonText === fifteenPercentCoupon || copuonText === twentyPercentCoupon) {
        if (copuonText === fifteenPercentCoupon) {

            const discount = totalTicketPrice * 0.15;
            const discountPrice = totalTicketPrice - discount;

            const total = document.getElementById("grand-total");
            total.innerText = discountPrice;

            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");

            const prices = document.getElementById("prices");
            const disPrice = document.createElement("div");
            disPrice.innerHTML = `
            <div class="text-[#030712] text-base font-medium flex justify-between">
                            <p class="pt-4">Discount</p>
                            <p class="pt-4 pr-6">BDT ${discount}</p>
                        </div>`
            prices.appendChild(disPrice);
        }
        else {
            const discount = totalTicketPrice * 0.20;
            const discountPrice = totalTicketPrice - discount;

            const total = document.getElementById("grand-total");
            total.innerText = discountPrice;

            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");

            const prices = document.getElementById("prices");
            const disPrice = document.createElement("div");
            disPrice.innerHTML = `
            <div class="text-[#030712] text-base font-medium flex justify-between">
                            <p class="pt-4">Discount</p>
                            <p class="pt-4 pr-6">BDT ${discount}</p>
                        </div>`
            prices.appendChild(disPrice);
        }
    }
    else {
        alert("invalid coupon");
    }
}

