function getUsers()
{
    return getFetch('https:jsonplaceholder.typicode.com/users');
}

function getUsersPosts( userId )
{
    return getFetch(`https:jsonplaceholder.typicode.com/posts`,{
            userId : userId
    });
}


//FACADE PATTERN
// function getFetch( url , params = {} )
// {
//     let queryString = Object.entries( params ).map( param => {
//         return `${param[0]}=${param[1]}`;
//     }).join( "&" );

//     //if later we want to change the fetch method to axios, we cann just change in single place. Advantage of Facade :)
//     return fetch( `${url}?${queryString}`,{
//         method : "GET",
//         headers : { "Content-Type" : "application/json" }
//     }).then( res => res.json() )
// }

//FACADE PATTERN - changed the fetch to axios in single place. It wont affect in other place :) Good for refactoring
function getFetch( url, params = {} )
{
    return axios({
        url : url,
        method : "GET",
        params : params
    }).then( res => res.data );
}

getUsers().then( users => {
    users.forEach( user => {
        getUsersPosts( user.id ).then( posts => {
            console.log( user.name );
            console.log( posts.length );
        })
    })
})