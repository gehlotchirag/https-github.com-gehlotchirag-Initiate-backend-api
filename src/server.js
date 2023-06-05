const express = require('express')
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors")
var app     = express()

connectDatabase();
app.use(express.json());
app.use(cors())
const port = 5000;
//route imports
app.get('/', (req, res) => {
  res.send('Server Up & running');
});
const item = require("./routes/itemRoutes");

app.use("/api/v1", item);

//Launch listening server on port 5000
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});
// app.listen(500, function () {
//     console.log(`Running in the environment ${process.env.NODE_ENV}`)
//     console.log('App listening on port 3000!')
// })
