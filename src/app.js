const Item = require('../modules/items');
const Promotion = require('../modules/promotions');

const CartItem = require('../modules/cart-items');
const ReceiptItem = require('../modules/receipt-items');
const Receipt = require('../modules/receipt');

function printReceipt(tags) {

    const cartItems = CartItem.buildCartItems(tags, Item.all());

    const receiptItems = ReceiptItem.buildReceiptItems(cartItems, Promotion.all());

    const receipt = Receipt.buildReceipt(receiptItems);

    const receiptText = receipt.buildReceiptText(receipt);

    console.log(receiptText);
}

exports.printReceipt = printReceipt;
