class User{
    constructor( name, phone, address, age )
    {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.age = age;
    }
}

//lot of unknown undefined. No idea what each undefined points to.
let user = new User( "Bob", undefined, undefined, 18 );