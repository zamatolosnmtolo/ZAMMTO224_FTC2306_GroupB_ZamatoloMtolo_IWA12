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

// Helper function to update book elements based on their ID
function updateBookStatus(bookId, status) {
    const bookElement = document.getElementById(bookId);

    // Update status indicator text color
    const statusIndicator = bookElement.querySelector('.status');
    statusIndicator.style.color = STATUS_MAP[status].color;

    // Enable or disable buttons based on STATUS_MAP properties
    const reserveButton = bookElement.querySelector('.reserve');
    const checkoutButton = bookElement.querySelector('.checkout');
    const checkinButton = bookElement.querySelector('.checkin');

    reserveButton.disabled = !STATUS_MAP[status].canReserve;
    checkoutButton.disabled = !STATUS_MAP[status].canCheckout;
    checkinButton.disabled = !STATUS_MAP[status].canCheckIn;

    // Set button colors to grayscale
    reserveButton.style.color = 'black';
    checkoutButton.style.color = 'black';
    checkinButton.style.color = 'black';
}

// Call updateBookStatus for each book element
updateBookStatus('book1', 'overdue');
updateBookStatus('book2', 'reserved');
updateBookStatus('book3', 'shelf');
