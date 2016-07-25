class Promotions {

    constructor(type, barcode = []) {
        this.type = type;
        type.barcode = barcode;
    }
}

module.exports = Promotions;