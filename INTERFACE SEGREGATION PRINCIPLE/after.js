class Entity {
    constructor( name ){
        this.name = name;
    }
}

const mover  ={
    move : function()
    {
        console.log( `${this.name} moved`);
    }
}

const attacker = {
    attack : function( targetEntity )
    {
        console.log( `${this.name} attacked ${ targetEntity.name } for
        ${this.attackDamage} damage`);

        targetEntity.takeDamage( this.attackDamage );
    }
}

const hasHealth = 
{
    takeDamage : function( amount )
    {
        this.health -= amount;
        console.log( `${this.name} has  ${this.health} health remanining`)
    }
}

class Character extends Entity {
    constructor(name, attackDamage,health)
    {
        super( name );
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign( Character.prototype, mover );
Object.assign( Character.prototype, attacker );
Object.assign( Character.prototype, hasHealth );



class Wall extends Entity {
    constructor( name, health ){
        super( name );
        this.health = hasHealth;
    }
}

Object.assign( Wall.prototype, hasHealth );

class Turret extends Entity {
    constructor( name, attackDamage )
    {
        super( name );
        this.attackDamage = attackDamage;
    }
}

Object.assign( Turret.prototype, attacker );

const turret = new Turret( 'Turret', 5 );
const  character = new Character( 'Character', 3, 100 );
const wall = new Wall( 'Wall', 200 );

turret.attack( character );
character.move();
character.attack( wall );