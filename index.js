// //create web server object 
//importing file

// const helpers=require("./helper")
//importing package 
const express=require('express')
// const http =require('http');
const app =express()
 let port =5001

//Creating server using http 

// http.createServer(function (req,res){
//     //write responce from server to the user
//     res.write("<h1>Welcome to this server Updated </h1>")

//     //ending the responce 
//     res.end()

// }).listen(port)

// Using express
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Node  Server using express</h1>')
})

// app.listen(port)
// const fs = require('fs')
// const fileName = 'target.txt'


//fs.watch(fileName,()=>console.log("File Changed"))
//read file with error handling 

//Writing handler for distribute responses 

// const errHandler = err => console.log(err)

// const dataHandler = data => {
//     console.log(data.toString())
// }

//asynchronous codes

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })


// fs.readFile(fileName, (err, data) => {
//     if (err) errHandler(err)
//     dataHandler(data)

// })

//synchronous codes 
// const data =fs.readFileSync(fileName)
// console.log(data.toString())

console.log("Node js Srevre running on port: "+port)






// console.log("jds",process)

// const total =helpers.sum(3,6)
// console.log(total)