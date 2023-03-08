const express = require('express');

const router = express.Router();

const PLACES = [
    {
      id: 'p1',
      titre: 'Empire State Building',
      description: 'Grosse bâtisse!',
      location: {
        lat: 40.7484474,
        lng: -73.9871516
      },
      adresse: '20 W 34th St, New York, NY 10001',
      createur: 'u1'
    }
  ];


router.get('/:placeId', (requete, reponse, next) => {
    const placeId = requete.params.placeId;
    const place = PLACES.find(place => {
        return place.id === placeId;
    })
    console.log("Requête GET /:placeId")
    reponse.json({place}); //Revient à {place:place}
});

router.get('/utilisateur/:utilisateurId', (requete, reponse, next) => {
    const utilisateurId = requete.params.utilisateurId;
    const places = PLACES.find(place => {
        return place.createur === utilisateurId;
    })
    console.log("Requête GET /utilisateur/:utilisateurId")
    reponse.json({places});
});

module.exports = router;