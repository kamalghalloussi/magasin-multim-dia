//Tableau simple

//let tableau1 = ["mic", 15, 25.65, true];

//Recup de la liste ul avec l'attribut id="tableau"
//let listeUL = document.getElementById("tableau1");

/*
for(datas of tableau1){
    //Creer un noeud de type element dans le dom
    let listeItemLI = document.createElement("li");
    listeItemLI.className = "classeLI";
    listeItemLI.id = `id-${tableau1}`

    listeItemLI.innerHTML = datas

    listeUL.appendChild(listeItemLI)


}

 */

/*
let i;

for(i = 0; i < tableau1.length; i++){
    //Creer un noeud de type element dans le dom
    let listeItemLI = document.createElement("li");
    listeItemLI.className = "classeLI";

    listeItemLI.innerHTML = tableau1[i]
    console.log(tableau1[i])

    listeUL.appendChild(listeItemLI)
}

let chien = {
    id:1,
    nom:"polux",
    age:4,
    estVacciner: true
}

let listeItemLI = document.createElement("li");
listeItemLI.className = "classeLI";

listeItemLI.innerHTML = chien.nom


listeUL.appendChild(listeItemLI)
*/


let produits = [
    {
        id: 1,
        nomProduit: "Chaise",
        image: "data:image/jpeg;base64,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",
        prixHT: 25.25,
        tva: 0.2,
        prixTTC: 0
    },
    {
        id: 2,
        nomProduit: "Table",
        image: "https://www.cocktail-scandinave.fr/Vbeta2018/wp-content/uploads/2018/02/RGATA180AL.jpg",
        prixHT: 2556.25,
        tva: 0.2,
        prixTTC: 0
    },

    {
        id: 3,
        nomProduit: "Armoire ",
        image: "https://media.conforama.fr/m/export/Medias/600000/50000/3000/100/10/G_653117_A.jpg",
        prixHT: 257.99,
        tva: 0.2,
        prixTTC: 0
    },


]

//Tableau vide
let panier = [];

function afficherProduit() {
    let listeUL = document.getElementById("tableau1")

    produits.forEach((donnee) => {
        console.log(donnee)
        let listeItemLI = document.createElement("li");
        listeItemLI.className = "classeLI";
        listeItemLI.id = `monIdUnique-${donnee.id}`



        listeItemLI.innerHTML =
            `
        <p>Nom du produit ${donnee.nomProduit}</p>
        <img src="${donnee.image}" alt="${donnee.nomProduit}" title="${donnee.nomProduit}" width="15%">
      
     
        <p>PRIX HT : ${donnee.prixHT} €</p>
        <p>TAUX DE TVA : 20%</p>
        
        `

        //Ajouter les <li> au parent <ul>
        listeUL.appendChild(listeItemLI);

        //Click sur chaque <li>
        listeItemLI.addEventListener("click", () => {
            //Au clic on ajoute l'objet concerné aau tableau apnier
            panier.push(donnee)
            //On cache le produit du tableau produit avec du css
            listeItemLI.style.display = "none"

            console.log("Le tableau panier sous forme d'onjet " + panier);
            //On appel la fonction affciherPanier qui boucle sur le tableau panier
            afficherPanier();
        });
    });
}

/*
function getTVA(prixHT, tauxTVA){
    console.log(prixHT * tauxTVA)
}

getTVA(200, 1.2)
*/
function afficherPanier() {
    //Recup le <ul> html

    let produitPanier = "";

    panier.forEach(produit => {
        let prixTTC = `${produit.prixHT} * ${produit.tva}`

        produitPanier +=
            `
            <li class="classeLI" id="panier-produit-${produit.id}">
                <p style="color: red">Nom du produit ${produit.nomProduit}</p>
                <img src="${produit.image}" alt="${produit.nomProduit}" title="${produit.nomProduit}" width="15%">
                  <select id="selectQuantites-${produit.id}">
                    <option selected>Choisir les quantitées</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>+ 10</option>
                </select>
                <p>Prix Hors Taxe: ${produit.prixHT} €</p>
                <p id="total-${produit.id}">TOTAL</p>
            </li>
            `
    });
    //Recupd de <ul id="panier" et ajour du li + HTML
    document.getElementById("panier").innerHTML = produitPanier

    //Supprimer un produit du tableau panier
    panier.forEach(supprimer => {
        //Recup des produits caché (display none) du teableru de produit
        let produitTableau1 = document.getElementById(`monIdUnique-${supprimer.id}`)
        let produitsSupprimer = document.getElementById(`panier-produit-${supprimer.id}`);

        //On creer un bouton pour les produits ajouter au panier panier
        let btnSupprimer = document.createElement("button");
        //Ajout d'un id unique a chaque bouton
        btnSupprimer.id = `btn-supprimer${supprimer.id}`;
        //Ajout d'une classe au bouton supprimer
        btnSupprimer.className = "btn-download";

        //Ajout de texte au bouton
        btnSupprimer.innerHTML = " X ";
        //On ajoute le bouton a chaque <li> des produits dans le tableau panier
        produitsSupprimer.appendChild(btnSupprimer);

        //Au clic sur le btouton supprimer
        btnSupprimer.addEventListener("click", function () {
            //alert("test de clic")
            //On fait reapparaitre le produits dans le tableau de produit avec css
            produitTableau1.style.display = "block";
            //On recupère l'index du produit dans le tableau panier
            let panierIndex = panier.indexOf(supprimer);
            console.log("Index du tableau panier " + panierIndex);
            //recup de l'index du tableau pannier et suppression d'un element
            /*La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux
             éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.*/
            panier.splice(panierIndex, 1);
            console.log(panier);
            //On supprimer le noeud de type element <li> du DOM
            produitsSupprimer.remove()

        });
        //Recupération de id de chaque select quantité de chaque produit
        let selectQuantitees = document.getElementById(`selectQuantites-${supprimer.id}`);
        //Quand l'utilisateur modifie la quantité => on appel une fonction anonyme (callBack)
        selectQuantitees.addEventListener("change", () => {
            //Récupération de l'index de chaque <select><option>
            let indexQuantite = selectQuantitees.selectedIndex;
            //Debug
            console.log("INDEX DE LA FENETRE DEROULANTE " + indexQuantite);
            //On multiplie le prix HT par la quantité
            let testPrixQuantite = indexQuantite * `${supprimer.prixHT}`;
            //Debug
            console.log(testPrixQuantite);
            document.getElementById(`total-${supprimer.id}`).innerHTML = "Prix HT X Quantitées = " + testPrixQuantite + "€"

        })


    });

    //Afficher les quantité de chaque produits



}



afficherProduit();




