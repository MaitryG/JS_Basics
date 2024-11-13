
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
