class Receipt {

    constructor(receiptItems = [], total = 0, savedTotal = 0) {
        this.receiptItems = receiptItems;
        this.total = total;
        this.savedTotal = savedTotal;
    }

    buildReceiptText(receipt) {

        const formatMoney = (money) => {
            return money.toFixed(2);
        };
        let receiptItemsText = this.receiptItems
            .map(receiptItem => {
                const cartItem = receiptItem.cartItem;
                return `名称：${receiptItem.getName()}，\
数量：${receiptItem.getCount()}${receiptItem.getUnit()}，\
单价：${formatMoney(receiptItem.getPrice())}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
            })
            .join('\n');

        return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(receipt.total)}(元)
节省：${formatMoney(receipt.savedTotal)}(元)
**********************`;
    }

    static buildReceipt(receiptItems) {

        let total = 0;
        let savedTotal = 0;

        for (const receiptItem of receiptItems) {
            total += receiptItem.subtotal;
            savedTotal += receiptItem.saved;
        }

        return new Receipt(receiptItems, total, savedTotal);
    }
}

module.exports = Receipt;