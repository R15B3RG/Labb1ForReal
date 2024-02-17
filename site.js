class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
  }
}

const products = [
  new Product("CB1000R Black Edition", 85000),
  new Product("CMX500 Rebel", 65000),
  new Product("CRF1100L Africa Twin", 150000),
  new Product("CRF300L", 30000),
  new Product("Goldwing Tour DCT", 380000),
  new Product("NT1100", 190000)
];

function addToCart(button) {
  const productDiv = button.parentElement.parentElement;
  const productName = productDiv.querySelector("img").getAttribute("data-name");
  const productPrice = parseInt(productDiv.querySelector("img").getAttribute("data-price"));
  const productIndex = products.findIndex(product => product.name === productName);
  const quantitySpan = productDiv.querySelector(".quantity");

  products[productIndex].quantity++;
  quantitySpan.textContent = products[productIndex].quantity;

  updateTotal(productPrice);
}

function removeFromCart(button) {
  const productDiv = button.parentElement.parentElement;
  const productName = productDiv.querySelector("img").getAttribute("data-name");
  const productPrice = parseInt(productDiv.querySelector("img").getAttribute("data-price"));
  const productIndex = products.findIndex(product => product.name === productName);
  const quantitySpan = productDiv.querySelector(".quantity");

  if (products[productIndex].quantity > 0) {
    products[productIndex].quantity--;
    quantitySpan.textContent = products[productIndex].quantity;

    updateTotal(-productPrice);
  }
}

function updateTotal(priceChange) {
  const totalPriceElement = document.getElementById("total-price");
  const currentTotal = parseInt(totalPriceElement.textContent);
  const newTotal = currentTotal + priceChange;

  totalPriceElement.textContent = newTotal;
}
