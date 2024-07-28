const express = require('express');
const dotenv = require("dotenv");
const { configureMiddleware } = require("./middleware");
const { connectDatabase } = require("./config/database");
const { setupRoutes } = require("./routes");

const app = express();
dotenv.config();


configureMiddleware(app);
connectDatabase();
setupRoutes(app);

const port = 4000
app.listen(port,()=>{
    console.log(`the server work on localhost:${port}`)
})

