// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete Email from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string in the previous array
//         26) Create an array with 100 random numbers in it
//         27) Wrote a function to get the MAX and the MIN from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays and returns the longest one
//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values





x = 'John'
y = 'Doe'
console.log(`${x} <> ${y}`) //ex.22
//----------------------------------------------------------------------//

let person= {
    name:'John',
    surname:'Doe',
    email: 'Johndoe@gmail.com'
}
console.log(person)  //ex.23

//----------------------------------------------------------------------//


delete person.email
console.log(person) //ex.24

//----------------------------------------------------------------------//

const array = ['1','2','3','4','5','6','7','8','9','10'] //ex.25
console.log(array)   //ex.26

//----------------------------------------------------------------------//

console.log(Math.max(...array)) //ex.27

//----------------------------------------------------------------------//


let array1 = [1,5,8,3,2,7,2,43,7,6]
let array2= [2,8,5,3,33,7,8,90,0,3] //ex.28

//----------------------------------------------------------------------//
const arrayOne = [1,5,8,3,2,7,2,43,]
const arrayTwo=  [1,5,8,3,2,9,2,43,7,6]
function longestArray(x,y){

    if( x.length > y.length){
        return x
    }else if (x.length < y.length ){
        return y
    }else{
        console.log('they are equal')
    }
}

console.log(longestArray(arrayOne,arrayTwo)) // ex.29
//----------------------------------------------------------------------//

function higherSum(x,y){
    let a = arrayOne.reduce((a,b)=>a+b,0)
    let b = arrayTwo.reduce((a,b)=>a+b,0)
    if(a > b){
        a
    }else{
        return b
    }

}
console.log(higherSum(arrayOne,arrayTwo)) //ex.30


//----------------------------------------------------------------------//

