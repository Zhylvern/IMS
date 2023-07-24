const express = require('express');
// const cors = require('cors');
const apiRoutes = require('./server/routes/api.routes')
const app = express();
// require('dotenv').config()

require('./server/config/db')


// app.use(cors());

app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});