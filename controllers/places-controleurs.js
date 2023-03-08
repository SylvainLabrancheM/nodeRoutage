const HttpErreur = require("../models/http-erreur");

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

const getPlaceById = (requete, reponse, next) => {
    console.log(2);
    const placeId = requete.params.placeId;
    const place = PLACES.find((place) => {
      return place.id === placeId;
    });
  
    if (!place) {
      return next(new HttpErreur("Aucune place trouvé pour l'id fourni", 404));
    }
  
    reponse.json({ place }); //Revient à {place:place}
  };

const getPlacesByUserId = (requete, reponse, next) => {
    const utilisateurId = requete.params.utilisateurId;
  
    const places = PLACES.find((place) => {
      return place.createur === utilisateurId;
    });
  
    if (!places) {
      return next(new HttpErreur("Aucune place trouvé pour l'utilisateur fourni", 404));
    }
  
    reponse.json({ places });
  };
  

  exports.getPlaceById = getPlaceById;
  exports.getPlacesByUserId = getPlacesByUserId;