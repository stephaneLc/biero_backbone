/*
 * Modèle de vu d'une caisse de bière.
 * @author Stéphane Leclerc
 * 
 * @référence tutoriel: https://addyosmani.com/backbone-fundamentals/#restful-persistence
 * 
 */

var app = app || {};

app.CaisseVu = Backbone.View.extend({
 
 
//on li le id qui représente le contenu du formulaire pour ajouté une bière. 
      el: "#bieres",
 
 
 
         /*
          * appelle de l'évènement selon le clic.
          */
          events:{
                    //ajoute une bière 
                    "click #ajouterNouvelleBiere":"ajouterBiere",
                  
          },
 
 
  
           /*
            * fonction qui passe tous les inputs pour ajoutés la valeurs entrée.
            * Dans le cas contraire, la valeur par défault est ajouté à l'objet.
            */
 
              ajouterBiere:function(evenement)
              {
                  //console.log("entre fonction ajouterNouvelleBiere");
                 //c'est l'appelle de jQuerry avec cette méthode qui permet d'arrêter l'action
                evenement.preventDefault();
               
                /*
                 * variable vide pour un nouvelle objet
                 * ref:https://api.jquery.com/event.preventdefault/
                 */
                var formulaireDonnees={};
               
               /*
                * fonction qui va chercher toutes les nouvelles données dans les inputs de la page index.html
                * 
                * Explication détailliers
                * 
                * $ = appelle de jQuerry
                *  #ajouterBiere div = va chercher le id ajouterBiere dans une div
                * .children("input").each = avec chacun des ses enfants qui sont des inputs
                * (function(i,el)) = la function tu va l'attacher avec chaque éléement au id biere(el)
                */
               
               $("#ajouterBiere div").children("input").each(function(i,el)
               {
                /*
                 * .val() c'est une méthode de jQuerry qui va chercher la valeur actuel et le match à l'élément.
                 * réf: http://api.jquery.com/val/
                 * 
                 * Explication: si la valeur de l'id biere(el) n'est pas vide fait la fonction.
                 * 
                 */  
               // console.log("entrer jquery ajouterBiere");
                if($(el).val()!="")
                   {
                     formulaireDonnees[el.id]=$(el).val();
                    //console.log(formulaireDonnees[el.id]);
                   }
               });
               
               /*
                * Ajoute une bière
                * crée une nouvelle bière selon les données que tu mets dans la caisseBieres.
                * 
                * *****************
                * *******
                * ATTENTION: add = méthode de Backbone dans la collection qui permet d'ajouter et faire le update
                * ref:http://backbonejs.org/#Collection-add
                */
               this.collection.add(new app.Biere(formulaireDonnees));
                   //console.log(this.collection);
              },
        /*
         * initialisation du  modèle en créant une nouvelle instance qui appelle le render()
         */
 
         initialize: function(initailLesBieres)
          {
           this.collection = new app.CaisseBieres(initailLesBieres);
           this.render();
           //console.log(initailLesBieres);
           
           //écouteur qui permet d'appeller l'ajout bière lorsque qu'il y a une action
           this.listenTo(this.collection, "add", this.renderBiere);
          },

 
         /*
          * rendu de chaque bière dans la collection qui appelle la fonction renduBiere pour afficher cette nouvelle biere
          */
 
           render: function()
           {
             this.collection.each(function(item){
              this.renderBiere(item);
            
             }, this);
            //console.log(this);
           },
 
          /*
           * fonction qui permet d'aller cherche chaque attributs du model biere
           * en créant une nouvelle instance de la vue d'Une bière. 
           */
            renderBiere: function(item)
             {
               var vuUneBiere = new app.BiereVu({
                model:item
      
               });
              //console.log(item);
              this.$el.append(vuUneBiere.render().el);
              //console.log((vuUneBiere.render().el));
              //console.log(this.$el);
             }

});
