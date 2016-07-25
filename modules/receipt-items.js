class ReceiptItem {

    constructor(cartItem, saved = 0, subtotal = 0) {
        this.cartItem = cartItem;
        this.saved = saved;
        this.subtotal = subtotal;
    }

    getBarcode() {
        return this.cartItem.getBarcode();
    }

    getName() {
        return this.cartItem.getName();
    }

    getUnit() {
        return this.cartItem.getUnit();
    }

    getPrice() {
        return this.cartItem.getPrice();
    }

    getCount() {
        return this.cartItem.count;
    }

    static buildReceiptItems(cartItems, allPromotions) {
        return cartItems.map(cartItem => {

            const findPromotionType = (barcode, promotions)=> {

                const promotion = promotions.find(promotion => promotion.barcodes.some(b => b === barcode));

                return promotion ? promotion.type : undefined;
            };
            const promotionType = findPromotionType(cartItem.getBarcode(), allPromotions);

            const discount = (cartItem, promotionType)=> {

                let subtotal = cartItem.getSubtotal();
                let saved = 0;

                if (promotionType === 'BUY_TWO_GET_ONE_FREE') {
                    saved = cartItem.getSaved();
                }

                subtotal -= saved;

                return {saved, subtotal};
            };
            const {saved, subtotal} = discount(cartItem, promotionType);


            return new ReceiptItem(cartItem, saved, subtotal);
        });
    }


}

module.exports = ReceiptItem;