const express = require('express')
const Blogroute = require('./routes/Blogroute')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 3000;

app.use(cors())
app.use('/v1', Blogroute)

app.listen(port, ()=>{
    console.log('server is running on port on server ', port)
})