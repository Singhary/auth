const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//middleware 
app.use(express.json());
