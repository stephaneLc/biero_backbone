/*
 * Modèle de bière
 * @author Stéphane Leclerc
 * 
 * @référence tutoriel: https://addyosmani.com/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app
 * 
 * Ce modèle de bière a été utilsé pour des tests dans la console. 
 * 
 */



var Biere = Backbone.Model.extend({


    /*
     * valeur par défault 
     */

    defaults:{
        nom:"",
        description:"",
        complete:false
    },

    /*
     * fait la validation des attributs
     */
    validate:function(attributes)
    {
        if(attributes.nom ===undefined)
        {
            return "ceci n'est pas valide";
        }
        console.log("validate");
    },//fin validate: function(valeurs)

    /*
     * initialisation du modèle
     */

    initialize:function()
    {
        console.log("entre dans initialize");

        this.on("invalid", function(model, error){
            console.log(error);
        });



    },//fin initialize:function()


});//fin var Biere = Backbone.Model.extend


/*************
 * tous les tests pour vérifier si chaque élément(model, defaults, validate, GET, SET et initialize) est fonctionnelle.
 * Le résultat est fait à l'aide de console.log pour l'affichage du résultat dans la console. 
 */

/*
     * test pour le modèle
     */
////création d'une nouvelle instance d'une bière.
//        var uneBiere = new Biere({
//            nom:"Charme",description:"un bière avec du charme", complete:true
//        });
////vérification du résultat
//console.log(JSON.stringify(uneBiere));


/*****
 * test pour le default
 */

//var uneBiere = new Biere({
//    nom:"une nouvelle bière"
//});
//
//console.log(JSON.stringify(uneBiere));
//
///*
// * test pour le GET
// */
//console.log(uneBiere.get("nom"));

//        test d'un Get d'une autre façon sans le GET
//            var uneBiere = new Biere({
//                nom:"voici un test",
//                description:"une bière d'un test",
//                complete:true
//            });
////            var uneBiereValeurs = uneBiere.toJSON();
////            console.log(uneBiereValeurs);
//
///*
// * test pour le SET
// */

//var uneBiere = new Biere({
//                    nom:"on change de bière",
//                    description:"ce n'est plus la même description",
//                });

//console.log(uneBiere.get("nom"));
//console.log(uneBiere.get("description"));

/*
 * test du validator
 */
//var uneBiere = new Biere();
//uneBiere.set("completed",true,{validate:true});
//console.log("completed"+ uneBiere.get("completed"));

//var uneBiere = new Biere(null,{validate:true});
//console.log(uneBiere.validationError);