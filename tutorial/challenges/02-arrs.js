const calculateTotal = (subTotal, tax) => {
  return subTotal + tax;
};

let order1 = calculateTotal(5, 3);
let order2 = calculateTotal(5, 9);
let order3 = calculateTotal(2, 7);

console.log(order1, order2, order3);
