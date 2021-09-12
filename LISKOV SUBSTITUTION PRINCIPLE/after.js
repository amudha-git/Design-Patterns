class FlyingBird{
    fly()
    {
        console.log( 'I can fly' );
    }
}
class SwimmingBird{
    swim()
    {
        console.log( 'I can swim' );
    }
}

class Duck extends FlyingBird {
    quack()
    {
        console.log( 'I can quack' );
    }
}

class Penguin extends SwimmingBird {

}

//liskov principle - success :) 
//every subclass of flying bird, able to work properly without error
function makeFlyingBirdFly( bird )
{
    bird.fly();
}

//liskov principle - success :) 
//every subclass of swimming bird, able to work properly without error
function makeSwimmingBirdSwim( bird )
{
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly( duck );
makeSwimmingBirdSwim( penguin );

//but it has some prblem. Because duck can fly and swim. But it can't extend two classes. So we need to add composition over inheritance. That we will see later
//But this is liskov principle achieved

//All you need to know is, for Liskov substitution principle,
//If a function accepts a class, every subclass of class must be able to enter the function and work properly