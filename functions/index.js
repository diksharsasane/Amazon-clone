const functions=require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { default: Stripe } = require("stripe");
const stripe=require("stripe")('sk_test_51Nj3UISJIcMicnHB4uj6q3zkX0Xs6S8WQaIF3gPBvIZKmtgg4T0abVhOZ9TUcKhsBwVkDb45t967FVtiJCNFuXkv00HMP3rqa0')

//  api

// App config
const app=express();

// middel ware
app.use(cors({ origin: true }));
app.use(express.json());

// API route
app.get( '/', (request, responce)=> responce.status(200).send("hello workd"));

app.get( '/dik', (request, responce)=> responce.status(200).send("hello workd"))

app.post('/payments/create', async ( express.request,express.response)=>{
    const total= express.request.query.total;

    console.console.log('payment request recieve boom!! fo these amount >>>>',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    //ok create
    express.response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// listen commond
exports.api=functions.https.onRequest(app);

// http://127.0.0.1:5001/amezon-challenge-84474/us-central1/api  ;