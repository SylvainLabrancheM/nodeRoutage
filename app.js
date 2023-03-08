const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require("./routes/places-routes")

const app = express();

function shouldParse(req){
    console.log("shouldParse invoked. Before parsing: body: ", req.body);
    //return req.get("content-type") === "application/json";
  }

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

app.use((error, requete, reponse,next) => {
    if(reponse.headerSent){
        return next(error);
    }
    reponse.status(error.code || 500);
    reponse.json({message: error.message || "Une erreur inconnue est survenue" });
})



app.listen(5000);