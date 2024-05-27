document.addEventListener("DOMContentLoaded", () => {
    const roomCountEl = document.getElementById("room-count");
    const priceEl = document.getElementById("price");
    const thankYouEl = document.getElementById("thank-you");
    let roomCount = 1;
    const pricePerRoom = 199;

    document.getElementById("plus").addEventListener("click", () => {
        roomCount++;
        updateDisplay();
    });

    document.getElementById("minus").addEventListener("click", () => {
        if (roomCount > 1) {
            roomCount--;
            updateDisplay();
        }
    });

    document.getElementById("sign-up").addEventListener("click", () => {
        thankYouEl.textContent = `Thank you for choosing ${roomCount} room${roomCount > 1 ? 's' : ''}`;
        thankYouEl.style.display = "block";
    });

    document.getElementById("contact-form").addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("All fields are required!");
            event.preventDefault();
        }
    });

    function updateDisplay() {
        roomCountEl.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        priceEl.textContent = `$${roomCount * pricePerRoom}`;
    }
});
