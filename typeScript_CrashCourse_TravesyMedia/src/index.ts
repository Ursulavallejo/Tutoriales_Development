// Basic Types

let id:number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number
age = 30

let ids: number[] = [1,2,3,4,5]
// ids.push('helo') will give error

let arr: any[] = [1, true, 'Hello']

console.log('ID:',id)
//-------------------------------
//Tuple  / you specify the type ( expect in the particular order we declare it)

let person: [number,string,boolean] = [1,'Brad',true]

//Tuple array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [2, 'Jill'],
]
//-------------------------------
//Union

let pid: string | number = 22

pid = '22'

//-------------------------------
//Enum  ( enumerated type)

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)
console.log(Direction1.Left)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Left)

//-------------------------------
//Objects:

type User = {
    id: number,
    name: string
}

const  user: User = {
    id: 1,
    name: 'John'
}




