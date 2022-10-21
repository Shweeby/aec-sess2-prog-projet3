let nbpizza = Number(prompt("Donner un nombre de pizza !"));
let choix = Number(prompt("Qu'est-ce que tu veux  ? Fromage : Tapez 1, Poivron : Tapez 2, Végétarienne : Tapez 3"));
//Le choix des pizzas ainsi que le prix associé à ces dernières.
let detailPizza = {
    1 : 15, //Fromage
    2 : 16, //Poivron
    3 : 14  //Végétarienne
};

let livraison = prompt("Donner lieu de livraison. Choix 1 : StJean, Choix 2 : Montcalm, Choix 3 : Limoilou");
let domicile = {
    StJean : "St Jean",
    Montcalm : "Montcalm",
    Limoilou : "Limoilou"
};

let anniversaire = Number(prompt("Est-ce votre anniversaire ? (Oui tapez 1; Non tapez 2)"));
let tarifLivraison;
//Si anniversaire ou si domicile à St-Jean livraison offerte, sinon 5$
if (anniversaire === 1 || livraison === domicile.StJean) {
    tarifLivraison = 0;
}else{
    tarifLivraison = 5;
}

//Rabais de 20%
let rabais = 0.20;
//calcul pizza sans livraison et rabais
let prixPizza = nbpizza * detailPizza[choix]; 
let totalRabais = prixPizza * rabais;

let taxes = 0.14975;
let totalSansTaxes;

//Si le prix des pizzas est supérieur à 31$ alors on applique le rabais
if (prixPizza > 31){
    totalSansTaxes = prixPizza - totalRabais;
}else{ 
    totalSansTaxes = prixPizza;
    totalRabais = 0;
}

//Le prix total avec livraison
let totalLivraison = totalSansTaxes + tarifLivraison;
//Le prix total avec les taxes
let totalAvecTaxes = totalLivraison + (totalLivraison * 0.14975);

document.getElementById("app").innerHTML = "Nombre de pizza : " + nbpizza + "<br>"
document.getElementById("app").innerHTML += "Prix des pizzas : " + totalSansTaxes.toFixed(2) + "$" + " (réduction de " + totalRabais.toFixed(2) + "$)<br>"
document.getElementById("app").innerHTML += "Prix livraison : " + tarifLivraison.toFixed(2) + "$<br>"
document.getElementById("app").innerHTML += "Prix total : " + totalLivraison.toFixed(2) + "$<br>"
document.getElementById("app").innerHTML += "Prix total avec taxes : " + totalAvecTaxes.toFixed(2) + "$"