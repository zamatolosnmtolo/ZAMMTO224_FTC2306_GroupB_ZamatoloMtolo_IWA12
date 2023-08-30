// Create a map that links different book statuses to their colors and abilities
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Find and group elements on the webpage by their class names
const statusElements = document.getElementsByClassName("status");
const reserveButtons = document.getElementsByClassName("reserve");
const checkoutButtons = document.getElementsByClassName("checkout");
const checkinButtons = document.getElementsByClassName("checkin");

// Go through each book's status on the webpage and make changes
for (let i = 0; i < statusElements.length; i++) {
    // Get the book's status and prepare it for use
    const statusText = statusElements[i].textContent.trim().toLowerCase();
    
    // Find out what the status means from the STATUS_MAP
    const statusInfo = STATUS_MAP[statusText];

    // Change the color of the book's status text
    statusElements[i].style.color = statusInfo.color;

    // Set if buttons can be clicked based on the status map
    reserveButtons[i].disabled = !statusInfo.canReserve;
    checkoutButtons[i].disabled = !statusInfo.canCheckout;
    checkinButtons[i].disabled = !statusInfo.canCheckIn;

    // Make buttons look faded if they can't be clicked
    if (!statusInfo.canReserve) {
        reserveButtons[i].style.filter = "grayscale(100%)";
    }
    if (!statusInfo.canCheckout) {
        checkoutButtons[i].style.filter = "grayscale(100%)";
    }
    if (!statusInfo.canCheckIn) {
        checkinButtons[i].style.filter = "grayscale(100%)";
        checkinButtons[i].style.color = "green"; // Change the text color of the "Check In" button to green
    }
}

// Update individual books' status display
// For book1
const book1Status = document.querySelector('#book1 .status').textContent.trim().toLowerCase();
const book1StatusInfo = STATUS_MAP[book1Status];
document.querySelector('#book1 .status').style.color = book1StatusInfo.color;

// For book2
const book2Status = document.querySelector('#book2 .status').textContent.trim().toLowerCase();
const book2StatusInfo = STATUS_MAP[book2Status];
document.querySelector('#book2 .status').style.color = book2StatusInfo.color;

// For book3
const book3Status = document.querySelector('#book3 .status').textContent.trim().toLowerCase();
const book3StatusInfo = STATUS_MAP[book3Status];
document.querySelector('#book3 .status').style.color = book3StatusInfo.color;