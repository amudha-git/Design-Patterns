class Store{
    constructor( paymentProcessor ){
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike( quantity )
    {
        this.paymentProcessor.pay( 200 * quantity );
    }

    purchaseHelmet( quantity )
    {
        this.paymentProcessor.pay( 15 * quantity );
    }
}

class  Stripe
{
    constructor( user )
    {
        this.user = user;
    }
    makePayment( amountInCents )
    {
        console.log( `${this.user} made payment of $${amountInCents/100} with stripe`)
    }
}

class Paypal
{
    constructor()
    {

    }
    makePayment( user, amountInCents )
    {
        console.log( `${user} made payment of $${amountInCents/100} with paypal`)
    }
}

class StripePaymentProcessor{
    constructor( user )
    {
        this.stripe = new Stripe( user );
    }

    pay( amountInDollars )
    {
        this.stripe.makePayment( amountInDollars * 100 );
    }

}
class PaypalPaymentProcessor{
    constructor( user )
    {
        this.paypal = new Paypal();
        this.user = user;
    }

    pay( amountInDollars )
    {
        this.stripe.makePayment( this.user, amountInDollars );
    }

}

const store = new Store( new StripePaymentProcessor( "John" ) );
store.purchaseBike( 2 );
store.purchaseHelmet( 2 );

//by this,  we dont need to moify anything in store.  Store object 
//wont be polluted

