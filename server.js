const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 8080
const routes = require('./routes')
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api",routes)




app.listen(port,()=>{
    console.log(`server linstenign on http://localhost:${port}`)
})
