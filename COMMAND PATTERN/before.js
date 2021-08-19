class Calculator{
    constructor()
    {
        this.value = 0;
    }

    add( valueToAdd )
    {
        this.value = this.value + valueToAdd;
    }

    subtract( valueToSubtract )
    {
        this.value = this.value - valueToSubtract;
    }

    multiply( valueToMultiply )
    {
        this.value = this.value * valueToMultiply;
    }

    divide( valueToDivide )
    {
        this.value = this.value / valueToDivide;
    }
}

const calculator = new Calculator();
calculator.add(2);
console.log( calculator.value );
calculator.multiply(2);
console.log( calculator.value );