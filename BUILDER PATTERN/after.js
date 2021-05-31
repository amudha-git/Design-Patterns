//Traditional way

class User{
    constructor( name )
    {
        this.name = name;
    }
}

class UserBuilder{
    constructor( name )
    {
        this.user = new User( name );
    }
    setAge( age )
    {
        this.user.age = age;
        return this;      
    }
    setAddress( address )
    {
        this.user.address = address;
        return this;
    }
    setPhone( phone )
    {
        this.user.phone = phone;
        return this;
    }
    build()
    {
        return this.user;
    }
}

let user = new UserBuilder( "Bob" ).setAge( 10 ).build();


//JS way. No need for User Builder class

class User{
    constructor( name,{ age, address, phone = '12345' } = {} )
    {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }

}

let user = new User( "Bob", { age : 10 } );