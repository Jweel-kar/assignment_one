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

// document.addEventListener("DOMContentLoaded", () => {
//     const roomCounts = {
//         basic: 1,
//         pro: 1
//     };
//     const prices = {
//         basic: 199,
//         pro: 249
//     };

//     function updateDisplay(type) {
//         const roomCountEl = document.querySelector(`.room-count[data-type=${type}]`);
//         const priceEl = document.querySelector(`.price[data-type=${type}]`);

//         roomCountEl.textContent = `${roomCounts[type]} room${roomCounts[type] > 1 ? 's' : ''}`;
//         priceEl.textContent = `$${roomCounts[type] * prices[type]}`;
//     }

//     document.querySelectorAll(".plus").forEach(button => {
//         button.addEventListener("click", () => {
//             const type = button.getAttribute("data-type");
//             roomCounts[type]++;
//             updateDisplay(type);
//         });
//     });

//     document.querySelectorAll(".minus").forEach(button => {
//         button.addEventListener("click", () => {
//             const type = button.getAttribute("data-type");
//             if (roomCounts[type] > 1) {
//                 roomCounts[type]--;
//                 updateDisplay(type);
//             }
//         });
//     });

//     document.querySelectorAll(".signup-button").forEach(button => {
//         button.addEventListener("click", () => {
//             const type = button.getAttribute("data-type");
//             const thankYouEl = document.getElementById("thank-you");
//             thankYouEl.textContent = `Thank you for choosing ${roomCounts[type]} room${roomCounts[type] > 1 ? 's' : ''} (${type})`;
//             thankYouEl.style.display = "block";
//         });
//     });
// });

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
    

    function updateDisplay() {
        roomCountEl.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        priceEl.textContent = `$${roomCount * pricePerRoom}`;
    }
});
