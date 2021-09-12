class Rectangle {
    constructor( width, height )
    {
        this.width = width;
        this.height = height;
    }

    setWidth( width )
    {
        this.width = width;
    }

    setHeight( height )
    {
        this.height = height;
    }

    area()
    {
        return this.width * this.height;
    }

}

class Square extends Rectangle {

    setWidth( width )
    {
        this.width = width;
        this.height = width;
    }
    setHeight( height )
    {
        this.height = height;
        this.width = height;
    }

}

function increaseRectangleWidth( rectangle )
{
    rectangle.setWidth( rectangle.width + 1 );
}

const rectangle1 = new Rectangle( 10, 2 );
const square = new Square( 5, 5 ); 

increaseRectangleWidth( rectangle1 );
increaseRectangleWidth( square );

console.log( rectangle1.area() );
console.log( square.area() );

//square can't be substituted for rectangle hence failing liskov substitution priniciple


//ex : 2

class Bird{
    fly()
    {
        console.log( 'I can fly' );
    }
}

class Duck extends Bird {
    quack()
    {
        console.log( 'I can quack' );
    }
}

class Penguin extends Bird {
    fly()
    {
        throw new Error( 'Cannot fly' );
    }

    swim()
    {
        console.log( 'I can swim' );
    }
}

//according to liskov principle, every subclass of class must be able to work this function properly. 
//But for penguin, it threw error. So Liskov principle failed.
function makeBirdFly( bird )
{
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly( duck );
makeBirdFly( penguin );