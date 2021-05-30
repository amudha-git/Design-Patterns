class User {
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

const users = [
    new User( 1, 'Bob' ),
    new User( 2, 'John' )
]

function getUser( id )
{
    return users.find( ( user )=> user.id == id );
}

function printUser( id )
{

    const user = getUser( id );

    let name = user == null ? "guest" : user.name;

    console.log( `Hi ${name}` );

    if(  user != null && user.hasAccess() )
    {
        console.log( "You have access" );
    }
    else
    {
        console.log( "You are not allowed here" );
    }
 
}