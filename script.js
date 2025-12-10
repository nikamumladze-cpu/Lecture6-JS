const cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

function calculateTotalPrice(currentCart) {
  return currentCart.reduce((accumulator, item) => {
    const itemTotal = item.price * item.quantity;
    return accumulator + itemTotal;
  }, 0);
}

const total = calculateTotalPrice(cart);
console.log(`საერთო ფასი: $${total}`);

function addProduct(product, currentCart) {
  return [...currentCart, product];
}

const newProduct = { name: "Keyboard", price: 150, quantity: 1 };
const updatedCartAfterAdd = addProduct(newProduct, cart);
console.log("განახლებული კალათა დამატების შემდეგ:", updatedCartAfterAdd);

function updateQuantity(productName, newQty, currentCart) {
  return currentCart.map((item) => {
    const { name, quantity } = item;

    if (name === productName) {
      return { ...item, quantity: newQty };
    }
    return item;
  });
}

const updatedCartAfterQtyChange = updateQuantity(
  "Mouse",
  5,
  updatedCartAfterAdd
);
console.log(
  "განახლებული კალათა რაოდენობის შეცვლის შემდეგ:",
  updatedCartAfterQtyChange
);
