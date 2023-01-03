// const express = require('express')
// const app = express()

// app.use('*', (req,res)=>{
//     res.send('Welcome to isreal blog')
// })

// app.listen(3001, ()=> {
//     console.log('Running on port 127.0.0.1/3001')
// })


const express = require('express')

const appp = express()

appp.use('*', (req, res) => {
    res.send('This my first start in the node application')
})

appp.listen(3002, ()=> {
    console.log('Running on port 3002')
})