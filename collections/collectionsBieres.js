/*
 * Collection  des bières (c'est un ensemble de modèle)
 * @author Stéphane Leclerc
 * 
 * @référence tutoriel: https://addyosmani.com/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app
 * 
 */




var app = app||{};

//création de la librairie des Bières

app.CaisseBieres = Backbone.Collection.extend({
    
    //le model pour faire la libraire qu'il va chercher
    
    model: app.Biere,
     url:"http://127.0.0.1:8000/webservice/php/biere"
});