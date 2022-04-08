//Tableau d'objet des produits
let tableauProduits = [
    {
        id: 1,
        nomProduits: "Enceintes KrK",
        imageProduit: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/322608/14633221_800.jpg",
        descriptionProduits: "Des enceintes de pro pour du son superbe",
        prixProduit: 125.25,
        produitQuantite: 1,
        produitTTC: 0
    },
    {
        id: 2,
        nomProduits: "Iphone Apple",
        imageProduit: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
        descriptionProduits: "Telephone Apple dernier cris, reconditionner",
        prixProduit: 789.25,
        produitQuantite: 1,
        produitTTC: 0
    },
    {
        id: 3,
        nomProduits: "SNES MINI",
        imageProduit: "https://fr.shopping.rakuten.com/photo/nintendo-classic-mini-super-nintendo-1127221450_ML.jpg",
        descriptionProduits: "Version minifier de la Super Nintendo",
        prixProduit: 325.25,
        produitQuantite: 1,
        produitTTC: 0
    },
    {
        id: 4,
        nomProduits: "Playstation 5",
        imageProduit: "https://fr.shopping.rakuten.com/photo/1963184024.jpg",
        descriptionProduits: "Console Sony PlayStation 5 Edition Standard",
        prixProduit: 789.25,
        produitQuantite: 1,
        produitTTC: 0

    },



];
//recup de la iste HTML <ul>
let carteProduits = document.getElementById("produits");
//Creation d'un tableau vide panier=[""]
let panier = [];

//Fonction afficher les produits du tableau d'objet produits
function afficherProduit() {
    //La méthode forEach() est une boucle qui permet d'exécuter une fonction donnée sur chaque élément d'un tableau.

    tableauProduits.forEach((produit) => {
        //generation d'un noeud element <li>
        let produitElement = document.createElement("li");
        //Ajout d'une classe
        produitElement.className = "produit-card";
        //Ajout d'un id dynamique
        produitElement.id = `produit${produit.id}`;
        //Ajout de contenu HTML avec la concatenation ES6
        //Acces aux données d'objet avec alias (produits).element de l'objet
        //ex : produit.nomProduit
        produitElement.innerHTML =
            `
        <h3 class="titre-produit">${produit.nomProduits}</h3>
        <img class="image-produit" src="${produit.imageProduit}" alt="${produit.nomProduits}" title="${produit.nomProduits}">
        <p>Description : </p>
        <p>${produit.descriptionProduits}</p>
        <p>Prix HT : ${produit.prixProduit} Euros</p> 
        `
        //Ajout des <li> a  <ul>
        carteProduits.appendChild(produitElement)
        //Au clic sur chaque <li> on ajoute l'objet cliquer au tableau vide panier
        produitElement.addEventListener("click", () => {
            panier.push(produit);
            //On cache l'element cliqué du tableau paroduits
            produitElement.style.display = "none"
            //On appel la fonction affciher le panier
            afficherPanier()
        });
    });
}


function afficherPanier() {

    //On creer une variable vide
    let produitPanier = "";
    //On recup le tableau ingredients choisis rempli par les click sur les ingredients
    panier.forEach(produit => {
        //On ajoute les elements de la boucle a notre variable
        produitPanier +=
            `
            <li class="produit-card-panier" id="produitAjouter${produit.id}">
                <div id="btn-supprimer${produit.id}" class="supprimer-produit">&times;</div>
                <img class="image-produit" src="${produit.imageProduit}" alt="${produit.nomProduits}" title="${produit.nomProduits}">     
                <h3 class="titre-produit">${produit.nomProduits}</h3>
                                                
                <select class="select-quantite" id="selectQuantite${produit.id}">
                    <option selected>Quantite(s)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>                  
                </select>   
                <p class="prix-para">Prix HT :<br /> ${produit.prixProduit} Euros</p>    
            </li>
            `
    });

    document.getElementById("panier").innerHTML = produitPanier;

    //supprimer un produit du panier
    panier.forEach(produitSupprimer => {

        let produit = document.getElementById(`produit${produitSupprimer.id}`);
        let produitAjouter = document.getElementById(`produitAjouter${produitSupprimer.id}`);
        let btnSupprimer = document.getElementById(`btn-supprimer${produitSupprimer.id}`);

        btnSupprimer.addEventListener("click", () => {
            produit.style.display = "block";
            //produitAjouter.style.display = "none"
            let produitIndex = panier.indexOf(produitSupprimer);
            //On retire l'ingredient du tableau grace a son index
            panier.splice(produitIndex, 1);
            //On supprime l'ingredient de l'affichage
            produitAjouter.remove();
            document.getElementById(`totalHT${produitSupprimer.id}`).innerHTML = "";
            document.getElementById(`totalTTC${produitSupprimer.id}`).innerHTML = "";
            document.getElementById("totalTTC").innerHTML = ""

        });

        //Les conteneurs
        let prixHTConteneur = document.getElementById("totalHTConteneur");
        let prixTTConteneur = document.getElementById("totalTTConteneur")

        //Recup quantiter depuis le select
        let selectQuantite = document.getElementById(`selectQuantite${produitSupprimer.id}`);

        let prixHT = document.createElement("div");
        prixHT.id = `totalHT${produitSupprimer.id}`

        prixHTConteneur.appendChild(prixHT)

        let prixTTC = document.createElement("div");
        prixTTC.id = `totalTTC${produitSupprimer.id}`
        prixTTConteneur.appendChild(prixTTC)

        selectQuantite.addEventListener("change", () => {
            let index = selectQuantite.selectedIndex;
            console.log(index)
            //Afficher prix HT
            let prixHT = document.getElementById(`totalHT${produitSupprimer.id}`);
            let prixDynamiqueHt = index * produitSupprimer.prixProduit;

            //TTC
            let prixTTCConteneur = document.getElementById(`totalTTC${produitSupprimer.id}`);
            let prixTva = Math.round(prixDynamiqueHt * 0.2);

            let prixTTC = prixDynamiqueHt + prixTva;

            produitSupprimer.produitTTC = prixTTC
            let tableauTTC = [];

            tableauProduits.forEach(alias => {
                let sum = 0
                tableauTTC.push(alias.produitTTC)
                console.log(tableauTTC)
                for (let i = 0; i < tableauTTC.length; i++) {
                    sum += tableauTTC[i];
                    console.log(sum)
                    let afficherTTC = document.getElementById("totalTTC");
                    afficherTTC.innerHTML = "<p class='nom'>TOTAL TTC : </p>" + "<b class='nom'>" + sum + "</b>" + "EUROS"
                }
            })

            prixHT.innerHTML = `<br /><span class="nom">${produitSupprimer.nomProduits} X Quantite(s) : ${index} = ${prixDynamiqueHt} Euros</span><br />`;
            prixTTCConteneur.innerHTML = `<br /><span class="quantite">Prix HT: ${prixDynamiqueHt} Euros + TAUX 20% : ${prixTva}  Euros = ${produitSupprimer.produitTTC} Euros</span><br />`;


            afficherPanier();
        })


    })
}

afficherProduit();



// JavaScript code
function search_produits() {
    let input = document.getElementById('searchbar').value
    console.log(input)
    input = input.toLowerCase();
    let x = document.getElementsByClassName('tableauProduits');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}

search_produits();


