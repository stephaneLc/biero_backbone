/*
 * C'est le router pour faire les routes
 * @author Stéphane Leclerc
 * 
 * Tutoriel pour la connection entre Backbone et php mysqul:
 * @référence tutoriel: https://www.kai23.fr/backbonejs-mysql-et-php-un-tutoriel-pour-les-faire-marcher-ensemble-1/
 * @rérérence tutoriel: https://github.com/foysal-mamun/php-backbone/blob/master/js/example_2.js
 * @référence tutoriel: https://foysalmamun.wordpress.com/2013/10/27/practice-backbone-js-with-php-example-2-2/
 * 
 */



var routeBiere = Backbone.Router.extend({
   
 el: "#bieres",
 
 /*
 * création des routes
 */    
    
    
routes:{
    
    /*
     * il ne faut pas utilisé les / pour les routes parce qu'il ne comprend pas. Il faut utilisé juste un nom. 
     * Par exemple au lieu "", tu met toto, il va aller à la page accueil. Mais si tu fait toto/
     * Il ne le reconnait pas. 
     */
    
    "":"accueil",
    }
});

/*
 * instanciation de la nouvelle route.
 */
var route = new routeBiere();


/*
 * la route est un objet qui est bind avec le on.
 * on: c'est une fonction pour un objet.
 */
route.on("route:accueil", function(){
    
    //console.log("je suis dans l'accueil");
 var vuAccueil = new app.CaisseVu({
  
 
  });

 /*
  * Connection avec la BD et l'affichage.
  */ 
 
 
 /*
  * ceci est l'extension de la collection CaisseBieres qui reconnait l'URL
  * Il reconnait aussi le defaults avec les valeurs dedans. 
  * 
  */
 
 var caisse = new app.CaisseBieres();
 //console.log(caisse);
 
 /*
  * Il reconnait tout les éléments de la collections avec le id et selector 
  * qui lit le tout avec l'index.html
  */
 var voieLesBieres = new app.CaisseVu({model:caisse});
 console.log(voieLesBieres);
           caisse.fetch({
              success:function()
                          {
                         //console.log(caisse); 
//                           $("#bieres").html(voieLesBieres.render().el);
                           $("#bieres").html(voieLesBieres.render());
                           
                           //console.log(voieLesBieres.render());
                          
                          }
           });
});/*fin de fonction route.on*/


Backbone.history.start();

