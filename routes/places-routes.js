const express = require('express');

const router = express.Router();

router.get('/', (requete, reponse, next) => {
    console.log("Requête GET dans places-routes")
    reponse.json({message: "Ça fonctionne!"});
});

module.exports = router;