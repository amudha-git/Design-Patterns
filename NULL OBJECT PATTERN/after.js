class User{
    constructor( id, name )
    {
        this.id = id;
        this.name = name;
    }

    hasAccess()
    {
        return true;
    }
}

class NullUser{
    constructor()
    {
        this.name = "Guest";
    }

    hasAccess()
    {
        return false;
    }
}

const users = [
    new User( 1, 'Bob' ),
    new User( 2, 'John' )
]

function getUser( id )
{
    const user = users.find( (user)=> user.id == id );

    //Null Object pattern
    if( user == null ) {
        return new NullUser();
    } else {
        return user;
    }

}

function printUser( id )
{

    const user = getUser( id );

    console.log( `Hi ${user.name}`);

    if( user.hasAccess() )
    {
        console.log( "You have access" );
    }
    else
    {
        console.log( "you are not allowed here" );
    }
}