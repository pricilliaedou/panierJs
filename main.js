document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const addToCartBtn = product.querySelector(".add-to-cart");
    const btnDiv = product.querySelector(".btn");
    const incrementBtn = btnDiv.querySelector(".increment");
    const decrementBtn = btnDiv.querySelector(".decrement");
    const counter = btnDiv.querySelector(".counter");

    addToCartBtn.addEventListener("click", function () {
      // Hide "Add to Cart" button and show increment/decrement buttons
      addToCartBtn.parentElement.style.display = "none";
      btnDiv.style.display = "flex";
      // Initialize counter to 1
      counter.textContent = "1";
    });

    incrementBtn.addEventListener("click", function () {
      // Increase the counter
      let count = parseInt(counter.textContent);
      count += 1;
      counter.textContent = count;
    });

    decrementBtn.addEventListener("click", function () {
      // Decrease the counter
      let count = parseInt(counter.textContent);
      if (count > 1) {
        count -= 1;
        counter.textContent = count;
      } else {
        // If counter is 1, hide the increment/decrement buttons and show "Add to Cart" button
        addToCartBtn.parentElement.style.display = "flex";
        btnDiv.style.display = "none";
        counter.textContent = "0";
      }
    });
  });
});
