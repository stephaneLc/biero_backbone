/*
 * Modèle de vu d'une bière
 * @author Stéphane Leclerc
 * 
 * @référence tutoriel: https://addyosmani.com/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app
 * 
 */



var app = app || {};


/*
 * création de la vue d'une bière
 */

app.BiereVu = Backbone.View.extend({
    
    /*
     * On fait le template du contenu d'une bière
     * 
     * On fait le html avec le tagName qui est la :<div>
     * On fait la class avec le className qui est class="contenuUneBiere"
     * 
     * Le tout donne ceci:  <div class="contenuUneBiere"></div>
     */
    
 
             tagName: "div",
             className:"contenuUneBiere",
 
 /*
  * On crée le template qu'on va mettre entre les balises faites si haut.
  * 
  * Il va chercher le template fait dans le html qui se nomme biereTemplate. 
  * 
  * @c'est le bind qu'on fait avec les données qui s'y trouve. 
  */
            template:_.template($("#biereTemplate").html()),
 
 
 /*
  * évènement fait selon le click demandé qui appelle la fonction en lien avec.
  */
          events:{
           
           //supprime une bière
           "click .supprimerBiere":"supprimerUneBiere"
         
          },
 
 
            /*
            * fait le rendu du template du haut.
            */
 
            render: function()
            {
             
             /*
              * $el c'est ce qui est défini dans le tagName qu'on va utiliser pour avoir accès à la fonction html de  jQuerry
              */
             
             this.$el.html(this.template(this.model.attributes));
            
             return this;
            },
 
 
 
            /*
            * Fonction pour effacer une bière
            * Elle est appelé lorsque l'évènement click .supprimerBiere est activé.
            */

            supprimerUneBiere:function()
            {
            //efface le modèle 
            this.model.destroy();
             // console.log("effface la bière");
            //efface la vue
            this.remove();
           }
});