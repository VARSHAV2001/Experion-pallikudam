// const languages = ['c', 'c++', 'Java', 'Python'];
// languages.forEach(lang => {
//     console.log(lang);
// });


// write in single line
// const languages = ['c', 'c++', 'Java', 'Python'];
// languages.forEach(lang => console.log(lang));



// index
// const languages = ['c', 'c++', 'Java', 'Python'];
// languages.forEach((item, index) => {
//    console.log(index, item);
// });




// // object
// const person = {
//     name: 'John Doe',
//     age: 20

// };
// console.log(person);



// //just want only on thing
// const person = {
//     name: 'John Doe',
//     age: 20
// };
// person.name = 'New Name';
// console.log(person.name);


// // to display the details
// const person = {
//     name: 'John Doe',
//     age: 20,
//     email: null
// };
// person.name = 'New Name';
// person.email = 'user@example.com';
// console.log(person);


// //call the data in different methods
// const person = {
//         name: 'John Doe',
//         age: 20,
//         email: null
//     };
//     person.name = 'New Name';
//     person.email = 'user@example.com';
//     console.log(person);
//     console.log(person.name);
//     console.log(person['name']);




// //to give multiple values
// const person = {
//     name: 'John Doe',
//     age: 20,
//     experience: [
//         {
//             company: 'Company ABC',
//             Year: 2
//         },
//         {
//             company: 'Company XYZ',
//             years: 3
//         }
//     ]
// };
// console.log(person.experience[0].company);
// console.log(person);



// // to display all experience details
// const person = {
//     name: 'John Doe',
//     age: 20,
//     experience: [
//         {
//             company: 'Company ABC',
//             Year: 2
//         },
//         {
//             company: 'Company XYZ',
//             years: 3
//         }
//     ]
// };
// person.experience.forEach(exp=>console.log(exp.company));



// metrics
// const m1 = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(m1);



// // to give the time delay to work
// setTimeout(()=>{
//     console.log('Code worked');
// }, 5000);



// // to give the time intervel
// setInterval(()=>{
//     console.log('Code worked');
// }, 5000);




// // 
// setInterval(()=>{
//     console.log('Code worked');
// }, 5000);

// console.log('COMPLETED');


// garbage collector used for clear unused data





// Objects and Functions

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         console.log(this.mark1 + this.mark2);
//     }
// };

// student.total();



// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         const extraMark = 5;
//         console.log(this.mark1 + this.mark2 + extraMark);
//     }
// };

// student.total();


// // to copy the data
// const student = {
//         name: 'Student 1',
//         mark1: 40,
//         mark2: 50
// };

// const copy = Object.assign({}, student);
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);



//to copy it can add extra property like that

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50
// };

// const copy = Object.assign({age: 15}, student);
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);



//properties give to functions
// const student = {
//     name: 'Student 1',
    
// };
// const marks = {
//     mark1: 40,
//     mark2: 50
// }

// const copy = Object.assign({}, student, marks);
// console.log(copy);



//destructure
// const student = {
//         fullName: 'Student 1',
//         mark1: 40,
//         mark2: 50
//     };

//     const {fullName, mark1} = student;
//     console.log(fullName);


// important   
// it used to display each value of object

// const student = {
//     fullName: 'Student 1',
//     mark1: 40,
//     mark2: 50
// };

// const keys = Object.keys(student);
// keys.forEach(key=>{
//     console.log(student[key]);
// });



// to display the values
const student = {
    fullName: 'Student 1',
    mark1: 40,
    mark2: 50
};

const values = Object.values(student);
values.forEach(value=>{
    console.log(value);
});