// Given Code:
// function fetchUser(callback) {
//     setTimeout(() => {
//         const user = null; // Should fetch a valid user object
//         callback(user.name); // Bug: Cannot read property 'name'
//     }, 1000);
// }

// fetchUser((name) => console.log(name));


// Corrected Code:
function fetchUser(callback) {
    setTimeout(() => {
        const user = null;
        if (user) {
            callback(user.name);
        } else {
            callback('user not find');
        }
    }, 1000);
}
fetchUser((name) => console.log(name));


// Another Corrected Code:
function fetchData(callback) {
    setTimeout(() => {
        const user = {name:'Rajesh'}
        callback(user.name);
    },1000);
}
fetchData((name)=>console.log(name));