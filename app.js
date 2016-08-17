var app = app || {};

/*
 * c'est la fonction qui ajoute des bières mais de façon statique
 */



$(function(){
    var bieres = [
        
        {
            nom: "Grand nord", description:"une bière du nord"
        },
//        {
//            nom: "test biere", description:"un test d'une description"
//        },
//        {
//            nom: "st=jean", description:"sur la fête"
//        },
//        {
//            nom: "toto", description:"la plus magique"
//        },
//        {
//            nom: "Québec", description:"celle du nord"
//        },
    ];
    new app.CaisseVu(bieres);
    //console.log(bieres);
    
});