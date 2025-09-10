let cartQuantity = 0;
const buttons = document.querySelectorAll("button");
const cartDisplay = document.getElementById("cartDisplay");

buttons[0].onclick = function () {
  cartDisplay.textContent = "Cart Quantity: " + cartQuantity;
};

buttons[1].onclick = function () {
  cartQuantity += 1;
  cartDisplay.textContent = "Added 1 item → Total: " + cartQuantity;
};

buttons[2].onclick = function () {
  cartQuantity += 2;
  cartDisplay.textContent = "Added 2 items → Total: " + cartQuantity;
};

buttons[3].onclick = function () {
  cartQuantity += 3;
  cartDisplay.textContent = "Added 3 items → Total: " + cartQuantity;
};

buttons[4].onclick = function () {
  cartQuantity = 0;
  cartDisplay.textContent = "Cart reset → Total: " + cartQuantity;
};