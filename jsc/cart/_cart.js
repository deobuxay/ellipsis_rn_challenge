export var cart = [];

export function addToCart(_product) {
  cart = [_product, ...cart];
}

export function getCart() {
  return cart;
}