let first = Number(prompt("Please Enter the first number ", 10))
let second = Number(prompt("Please Enter the Second number ", 10))
let operator = prompt("Please Enter the operator ","+")
alert(`${first} ${operator} ${second} = ${eval(`${first} ${operator} ${second}`)}`)