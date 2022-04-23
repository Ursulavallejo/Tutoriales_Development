
[TypeScript Tutorial](https://www.youtube.com/watch?v=BCg4U1FzODs)


Notes:

#Typescript language:
> Is an open source language and is a superset of JavaScript
> additional features to JS including static types
> Compiles down to regular JS
> Can be used for front-end JS as well as backend with NOde.js
> includes classes, arrow functions etc
> Types from 3rd party libraries can be added with type definitions



## Dynamic vs Static Typing:

In dynamically typed languages, the types are associated with run-time values and not named explicitly in your code.
Examples: JS, Python, Ruby, PHP

In statically typed languages, you explicitly assign types to variables, function parameters, return values, etc.
Examples: Java, C. C++, Rust, Go

## Pros vs Cons TS:

-Pros:
More Robust
Easily spot bugs
predictability
readability
popular

-Cons:
More code to write
More to learn
Required Compilation
Not true static typing


## Compiling Typescript :

- The tsconfig.json file is used to configure how TypeScript works.

-TypeScript Compiler > compile .ts files down to JS

```shell
tsc main.ts
tsc.cmd main.ts
```

## How to install :

- Go to terminal and install globally in our machine:

```shell
npm install -g typescript
If Mac > sudo npm install -g typescript

tsc --version  / tsc.cmd -v
tsc.cmd --init
```

- To compile the file TS to JS (terminal): typescript compiler
```shell

tsc index.ts
tsc.cmd index.ts

ls  / to see the files in that folder

```

- Instead of compile we can only watch / open watch mode and changes you do are viewed in terminal
```shell
tsc --watch index
tsc.cmd --watch index

```

- Set configuration file  / create a tsconfig file 
```shell
tsc --init
tsc.cmd --init 
> once we have created the tsconfig file make sure   "target": "es2016".
tsc.cmd   / to compile what is on teh files and will change var to let in the JS file.
```
 -changes on create a tsconfig file
```shell
"outDir": "./dist",      
 "rootDir": "./src",  
```

-To run node in the Js file
```shell
 cd dist
node index
```

-REACT > TS
```shell
npx create-react-app . --template typescript
```


