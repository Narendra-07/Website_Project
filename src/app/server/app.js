"use strict"

const express = require('express');
const bodyParser = require('body-parser')
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
const uri="mongodb://localhost/websiteDb";
const ctrlcontact=require('../server/controller/contactController')


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   }).then(res => {
    console.log("DB Connected!")
  }).catch(err => {
    console.log(Error, err.message);
  })

  const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
  }
  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post('/contact',ctrlcontact.Contact)

  app.listen(8000, '127.0.0.1', function () {
    console.log("server listen on port 3000");
  });
  
  