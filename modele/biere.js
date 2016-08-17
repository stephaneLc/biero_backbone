/*
 * Modèle de bière
 * @author Stéphane Leclerc
 * 
 * @référence tutoriel: https://addyosmani.com/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app
 * 
 */



var app = app || {};

app.Biere = Backbone.Model.extend({
    
    //valeur par défaut de la bière qui contient un nom et une description pour le moment.
    defaults:{
        
        nom: "pas nom",
        description: "pas description"
      
    },
 
     
 

});/*fin de app.Biere*/