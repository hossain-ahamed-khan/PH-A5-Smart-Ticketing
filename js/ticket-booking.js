
let selectedSeats = 0;
let remainingSeats = 40;
let totalTicketPrice = 0;
let ticketGrandTotal = 0;

const fifteenPercentCoupon = "NEW15";
const twentyPercentCoupon = "Couple 20";

function getSeatNumber() {
    const seatNumber = document.getElementById("A1");
    const seat = seatNumber.innerText;

    // below code will be common 

    seatNumber.style.backgroundColor = "#1DD100";

    const numberOfSelectedSeats = document.getElementById("increment-counter");
    selectedSeats += 1;
    numberOfSelectedSeats.innerText = selectedSeats;

    const numberOfRemainingSeats = document.getElementById("total-seats");
    remainingSeats -= 1;
    numberOfRemainingSeats.innerText = remainingSeats;

    const ticketDetails = document.getElementById("ticket-details");
    const newTicketDetails = document.createElement("tr");
    newTicketDetails.innerHTML = `
                            <td>${seat}</td>
                            <td>Economy</td>
                            <td>550</td> `

    ticketDetails.appendChild(newTicketDetails);

    const totalPrice = document.getElementById("total-price");
    totalTicketPrice += 550;
    totalPrice.innerText = totalTicketPrice;

    const grandTotal = document.getElementById("grand-total");
    ticketGrandTotal += 550;
    grandTotal.innerText = ticketGrandTotal;

    seatNumber.disabled = true;

    return totalTicketPrice;

}


function applyCopuonDiscount() {
    const copuonText = document.getElementById("copuon-text").value;

    if (copuonText === fifteenPercentCoupon || copuonText === twentyPercentCoupon) {
        if (copuonText === fifteenPercentCoupon) {

            const discountPrice = 550 - (550 * 0.15);

            const total = document.getElementById("grand-total");
            total.innerText = discountPrice;

            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");
        }
        else {
            const discountPrice = 550 - (550 * 0.20);

            const total = document.getElementById("grand-total");
            total.innerText = discountPrice;

            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");
        }
    }
    else {
        alert("invalid coupon");
    }
}


document.getElementById("phone-number").addEventListener("keyup", function () {

    const nextButton = document.getElementById("next-btn");
    nextButton.disabled = false;

})

