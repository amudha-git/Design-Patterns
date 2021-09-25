class Store
{
    constructor( user )
    {
        // this.stripe =  new Stripe( user );
        this.paypal = new Paypal();
        this.user = user;

    }

    purchaseBike( quantity )
    {   
        // this.stripe.makePayment( 200 * quantity * 100 );
        this.paypal.makePayment( this.user, 200 * quantity * 100  );
    }

    purchaseHelmet( quantity )
    {
        // this.stripe.makePayment( 15 * quantity * 100 );
        this.paypal.makePayment( this.user, 15 * quantity * 100  );
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

const  store = new Store( "John" );
store.purchaseBike( 2 );
store.purchaseHelmet( 2 );

// Store object is polluted
