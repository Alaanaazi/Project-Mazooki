const express = require('express');
const cors = require('cors');
//mongo db
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongo db config
//uri contains the location of the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

//Once the cloud db is connected to the db it will display the below msg
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database established successfully');
});

//controllers | importing & using
const surveyRouter = require('./routes/survey');
//const userRouter = require('./routes/users');

//when some goes to /exercises path it will load exercise router
app.use('/surveys', surveyRouter);
//app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});


