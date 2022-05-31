const functions = require('firebase-functions');

const express = require ("express");

const cors = require ("cors");

const stripe = require("stripe")('sk_test_51L38szSCvfsdzw7sERUqMQVghyTB3pZD7CrLX2bzAbavO4AXhmMYgXPi3RMTb8MEMnmQSyxOOIQZYMYHyGryGLMX00NjXi12Sh')

//API

// - App Config
const app = express();

//Middlewears 
app.use(cors({ original : true}));
app.use(express.json());

//API routes
app.get('/', (request, response)=> response.status(200).send('hello world'))
app.get('/preeti', (request, response)=> response.status(200).send('how are you'))
app.post('/payments/create', async(requset, response)=>{
    const total =requset.query.total;

    console.log('Payment Request Received Boom!! for this amount>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    //OK - created
    response.status(201).send({
        clinetSecret: paymentIntent.client_secret,
    })
})

//Listen Command
exports.api = functions.https.onRequest(app)