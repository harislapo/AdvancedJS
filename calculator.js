function Kalkulator(a, b) {
    this.operand1 = a;
    this.operand2 = b;

    this.saberi = function () {
        return this.operand1 + this.operand2;
    }

    this.oduzmi = function () {
        return this.operand1 - this.operand2;
    }
};
