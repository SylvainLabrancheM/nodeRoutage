const express = require("express");

const HttpErreur = require("../modeles/http-erreur");
const router = express.Router();

const PLACES = [
  {
    id: "p1",
    titre: "Empire State Building",
    description: "Grosse bâtisse!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    adresse: "20 W 34th St, New York, NY 10001",
    createur: "u1",
  },
];

router.get("/:placeId", (requete, reponse, next) => {
  console.log(2);
  const placeId = requete.params.placeId;
  const place = PLACES.find((place) => {
    return place.id === placeId;
  });

  if (!place) {
    return next(HttpErreur("Aucune place trouvé pour l'id fourni", 404));
  }

  reponse.json({ place }); //Revient à {place:place}
});

router.get("/utilisateur/:utilisateurId", (requete, reponse, next) => {
  const utilisateurId = requete.params.utilisateurId;

  const places = PLACES.find((place) => {
    return place.createur === utilisateurId;
  });

  if (!places) {
    const errreur = new HttpErreur(
      "Aucune place trouvée pour l'utilisateur fourni",
      404
    );
    throw errreur;
  }

  reponse.json({ places });
});

module.exports = router;
