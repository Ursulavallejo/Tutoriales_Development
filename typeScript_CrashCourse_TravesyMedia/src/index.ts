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

//-------------------------------
// Type Assertion : tell the compiler to treat an entity as a different type

let cid: any = 1
// let customerId =<number> cid
// customerId = true  // give error as is a boleen
let customerId = cid as number

// Functions

function addNum(x: number,y: number): number {
    return x + y
}

console.log(addNum(1,2))


// Void
function log(message:string| number): void{
    console.log(message)
}
log(2)

//-------------------------------
// Interfaces: You cant use interface with unions or primitives

interface IUser {
    readonly id: number,
    name: string,
    age?: number
}

const  user1: IUser = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y

const sub: MathFunc = (x:number, y:number): number => x - y


interface IPerson {
    id: number,
    name: string,
    register (): string
}

// Classes:   acces modifiers: Id / name can be public ( by default), private ( acces within the class), protected (you can acces from the class or extenden ones).

class Person implements IPerson{
    id: number
    name: string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }
    register(){
       return`${this.name} is now registered`
    }
}

const brad = new Person(1,'Brad Traversy')
const mike = new Person(2,'Mike Jordan')

console.log(brad.register())
// console.log(brad, mike)

// Extending Classes
// Subclasses

class Employee extends Person {
    position: string

    constructor(id:number, name:string, position:string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.name)
console.log(emp.register())

//-------------------------------
// Generics: reusable components

// we will use thi as a base and transfor it to generics.

// function getArray(items:any[]):any[] {
//     return new Array().concat(items)
// }
//
// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['Laura','Bob','Max','Liz'])
//
// numArray.push('hello')

//after implementatton:

function getArray<T>(items:T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Laura','Bob','Max','Liz'])

numArray.push('hello') // now gives error ,expect a number

//Typescript REACT

// create other folder and install react: npx create-react-app . --template typescript










