const form = document.getElementById('delivery-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const formData = new FormData(form);
    const orderDetails = {};
    
    formData.forEach((value, key) => {
        orderDetails[key] = value;
    });

    alert('Delivery order submitted successfully!');
    console.log(orderDetails); // For debugging, logs all form data
});
