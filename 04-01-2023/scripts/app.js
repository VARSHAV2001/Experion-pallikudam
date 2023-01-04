
//  Callback

// function doThisLongRunningTask(callback){
//     //   A long task
//     setTimeout(() => {
//         const name = 'JavaScript';
//         callback(name);
//     }, 5000);
// }

// function showResult(res){
//     console.log(res);
// }

// doThisLongRunningTask(showResult);
// console.log('I am done');



// Promise

// const p = new Promise((resolve, reject) => {
//     // Kick off some async work
//     const name = 'JavaSript';
//     resolve(name);
// });

// p.then(res=>console.log(res));




// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(data => console.log(data));



// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(data => {
//     console.log(data.data)
// });



// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(result => {
//     console.log(result.data)
// });




// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(result => result.data.forEach(element => {
//     console.log(element.email)
// })
//     );


const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users?page=1')
.then(response => response.json())
.then(result => {
    const users = result.data;
    users.forEach(user=>{
        const row = `
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="${user.avatar}" height="50">
            </td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
        </tr>
        `;
        tbody.innerHTML += row;
    });

});