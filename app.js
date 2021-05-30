// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
const line = '<---------------------------------------------------------------------->'

x = 'John'
y = 'Doe'
console.log(`${x} <> ${y}`) //ex.22) Create an object with properties such name, surname, email
console.log(line)
//----------------------------------------------------------------------//

let person= {
    name:'John',
    surname:'Doe',
    email: 'Johndoe@gmail.com'
}
console.log(person)  //ex.23) Delete Email from the previously created object
console.log(line)
//----------------------------------------------------------------------//


delete person.email
console.log(person) //ex.24) Create an array with 10 strings in it
console.log(line)
//----------------------------------------------------------------------//

const array = ['1','2','3','4','5','6','7','8','9','10'] //ex.25) Print in the console every string in the previous array
console.log(array)   //ex.26) Create an array with 100 random numbers in it
console.log(line)
//----------------------------------------------------------------------//

console.log(Math.max(...array)) //ex.27) Wrote a function to get the MAX and the MIN from the previously created array
console.log(line)
//----------------------------------------------------------------------//


let array1 = [1,5,8,3,2,7,2,43,7,6]
let array2= [2,8,5,3,33,7,8,90,0,3] //ex.28) Create an array of arrays, in which every array has 10 random numbers
console.log(line)
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

console.log(longestArray(arrayOne,arrayTwo)) // ex.29) Create a function that gets 2 arrays and returns the longest one
console.log(line)
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
console.log(higherSum(arrayOne,arrayTwo)) //ex.30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log(line)

//----------------------------------------------------------------------//
//----------------------------------------------------------------------//
//----------------------------------------------------------------------//




document.addEventListener('DOMContentLoaded',()=>{

    // DOM 



// 31) Get element with ID "container" from the page
document.getElementById('container')

//----------------------------------------------------------------------//
// 32) Get every "td" from the page
const td = document.querySelectorAll('td')

//----------------------------------------------------------------------//
// 33) Create a cycle that prints the text inside every td of the page
// td.forEach((td)=>{
//     td.innerText = 'changed'
// })

//----------------------------------------------------------------------//
// 34) Write a function to change the heading of the page
function changeHeading(){
const h1 = document.querySelector('h1')
h1.innerText = "I have been changed :)"
}
changeHeading()

//----------------------------------------------------------------------//
// 35) Write a function to add an extra row to the table
function addRow(){
    const table = document.querySelector('table')
    const tr = document.createElement('tr')
    for(let i=0;i<5;i++){
        const td = document.createElement('td')
        td.innerText = i + 1
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
addRow()

//----------------------------------------------------------------------//
// 36) Write a function to add the class "test" to each row in the table
function addClassRow(){
 const rows = document.querySelectorAll('tr')
 rows.forEach((tr)=>{
     tr.classList.add('test')
 })
}
addClassRow()
//----------------------------------------------------------------------//
// 37) Write a function to add a red background to every link in the page
function linkRed(){
const aRed = document.querySelectorAll('a')
aRed.forEach((a)=>{
 a.classList.add('.border_bottom')
})
}
linkRed()
//----------------------------------------------------------------------//
// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function(){
    console.log('page loaded')
}
//----------------------------------------------------------------------//
// 39) Write a function to add new items to a UL
function addUl(){
const ul= document.querySelector('ul')
const li = document.createElement('li')
li.innerText = 'added unordered list'
ul.append(li)
}
addUl()
//----------------------------------------------------------------------//
// 40) Write a function to empty a list

//----------------------------------------------------------------------//

})






console.log(`${'--'*10}`)