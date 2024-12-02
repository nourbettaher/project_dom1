document.addEventListener('DOMContentLoaded', function() {
    // Get all the product elements
    const products = document.querySelectorAll('.card');
    
    // Function to calculate and update the total price
    function updateTotalPrice() {
      let totalPrice = 0;
  
      products.forEach(product => {
        const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace(' $', ''));
        const quantity = parseInt(product.querySelector('.quantity').textContent);
        totalPrice += unitPrice * quantity;
      });
  
      // Update the total price displayed in the UI
      document.querySelector('.total').textContent = `${totalPrice} $`;
    }
  
    // Handle quantity adjustments (increase and decrease)
    products.forEach(product => {
      const increaseButton = product.querySelector('.fa-plus-circle');
      const decreaseButton = product.querySelector('.fa-minus-circle');
      const quantityDisplay = product.querySelector('.quantity');
      
      increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityDisplay.textContent);
        quantity++;
        quantityDisplay.textContent = quantity;
        updateTotalPrice();
      });
  
      decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity > 0) {
          quantity--;
          quantityDisplay.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Handle item deletion
    products.forEach(product => {
      const deleteButton = product.querySelector('.fa-trash-alt');
  
      deleteButton.addEventListener('click', () => {
        product.remove(); // Remove the entire product card from the DOM
        updateTotalPrice(); // Recalculate the total price
      });
    });
  
    // Handle "like" functionality (heart icon)
    products.forEach(product => {
      const heartButton = product.querySelector('.fa-heart');
  
      heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('liked'); // Toggle the "liked" class
      });
    });
  });
  
  