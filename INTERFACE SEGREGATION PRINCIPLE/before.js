//interface segregaation principle
//whenever you are having an interface, you need everything that implements interface
//to use every single portion of interface

class Entity{
    constructor( name, attackDamage, health )
    {
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move()
    {
        console.log( `${this.name} moved`);
    }

    attack( targetEntity)
    {
        console.log( `${this.name} attacked ${ targetEntity.name } for
        ${this.attackDamage} damage`);

        targetEntity.takeDamage( this.attackDamage );
    }

    takeDamage( amount )
    {
        this.health -= amount;
        console.log( `${this.name} has  ${this.health} health remanining`)
    }
}

class Character extends Entity{

}

class Wall  extends Entity{
    constructor( name, health )
    {
        super( name, 0, health );
    }

    move()
    {
        return null;
    }

    attack()
    {
        return null;
    }
}