
# Asynchronous Function Calls:
- Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. 
- Once that task has finished, your program is presented with the result.
- Don't wait for the function to finish, it is non-blocking.

- Your JS thread doesn't have to access everything immediately.
- There are some tasks you need to wait for e.g. Reading a file, Sending a network request, A deliberate timeout.


# Promises
- Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.


# What is ECMAScript?
- ECMAScript is a scripting language specification on which JS is based. 
- JS is an interpreted language.

# What is JS?
- JS is a scripting language that conforms to the ECMAScript specification. Its the most widely known and used implementation of ECMAScript. 
- JS includes additional features that are not part of the ECMAScript specification, like the DOM manipulation, setTimeOut() and readFile(), etc. 
- Two most powerful compilers for JS are: V8 (used by Google Chrome and Chromium) and SpiderMonkey (used by Firefox C + Rust). 

# What is Node.js?
NodeJs is a runtime while JS is a language. Some smart people took out the V8 engine added some backend things on top to create a new runtime to compete with backend lanugages like Java. JS was never meant to run in the backend. Eventually it became very popular and is a popular choice of runtime on the backend. 

# What to do when you have to do a bunch of pre-checks in every route ?
In express, you add middlewares to do that. 