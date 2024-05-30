// Code for Packages section

document.addEventListener("DOMContentLoaded", () => {
    const roomCounts = {
        basic: 1,
        pro: 1
    };
    const prices = {
        basic: 199,
        pro: 249
    };

    function updateDisplay(type) {
        const roomCountEl = document.getElementById(`room-count-${type}`);
        const priceEl = document.getElementById(`price-${type}`);
        
        roomCountEl.textContent = `${roomCounts[type]} room${roomCounts[type] > 1 ? 's' : ''}`;
        priceEl.textContent = `$${roomCounts[type] * prices[type]}`;
    }

    document.getElementById("plus-basic").addEventListener("click", () => {
        roomCounts.basic++;
        updateDisplay("basic");
    });

    document.getElementById("minus-basic").addEventListener("click", () => {
        if (roomCounts.basic > 1) {
            roomCounts.basic--;
            updateDisplay("basic");
        }
    });

    document.getElementById("plus-pro").addEventListener("click", () => {
        roomCounts.pro++;
        updateDisplay("pro");
    });

    document.getElementById("minus-pro").addEventListener("click", () => {
        if (roomCounts.pro > 1) {
            roomCounts.pro--;
            updateDisplay("pro");
        }
    });

    document.getElementById("sign-up-basic").addEventListener("click", () => {
        const thankYouEl = document.getElementById("thank-you-basic").children[0];
        thankYouEl.textContent = `Thank you for choosing ${roomCounts.basic} room${roomCounts.basic > 1 ? 's' : ''}`;
        document.getElementById("thank-you-basic").style.display = "table-row";
    });
    
    document.getElementById("sign-up-pro").addEventListener("click", () => {
        const thankYouEl = document.getElementById("thank-you-pro").children[0];
        thankYouEl.textContent = `Thank you for choosing ${roomCounts.pro} room${roomCounts.pro > 1 ? 's' : ''}`;
        document.getElementById("thank-you-pro").style.display = "table-row";
    });
});

    // Code for Contact form
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
    
        if (!name || !email || !message) {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById("contact-form").reset();
            event.preventDefault(); // Prevent default form submission
        }
    });