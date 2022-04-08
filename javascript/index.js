const menuParent = document.getElementById("myTopnav");
menuParent.innerHTML =
    `
    <a class="liens" onclick="ouvrirMenuGauche()">
        <i  id="toggleIcon1" class="fa fa-home fa-2x"></i>
    </a>
    <a class="liens" onclick="darkLightMode()">
        <i id="toggleIcon" class="fa fa-toggle-on fa-2x" aria-hidden="true"></i>
    </a>
    <a href="index.html" class="liens">Acceuil</a>
    <a href="taches.html" class="liens">Tâches à faire</a>
    <a href="Brickbrokers.html" class="liens">Brickbrokers</a>
    <a href="produits.html" class="liens">Produits</a>
    <a href="produits copy.html" class="liens">Produits 2</a>

    <a href="#" class="icon" onclick="showHideMenu()">
        <i class="fa fa-bars fa-2x"></i>
    </a>
    `
function showHideMenu() {
    let open = document.getElementById("myTopnav");
    if (open.className === "topnav") {
        open.className += " responsive";
    } else {
        open.className = "topnav";
    }
}

const menuGauche = document.getElementById("menuGaucheID");

menuGauche.innerHTML =
    `
    <a href="javascript:void(0)" class="fermerBtn" onclick="femerMenuGauche()">&times;</a>
    <a href="index.html" class="liens">Acceuil</a>
    <a href="taches.html">Les tâches à faire </a>
    <a href="Brickbrokers.html">Brickbrokers</a>
    <a href="produits.html">Les produits</a>
    <a href="produits copy.html" class="liens">Produits 2</a>

    
    `

function ouvrirMenuGauche() {
    document.getElementById("menuGaucheID").style.width = "20%";
}


function femerMenuGauche() {
    document.getElementById("menuGaucheID").style.width = "0"
}

function darkLightMode() {

    let btnLightDark = document.body;
    btnLightDark.classList.toggle("dark-mode");
    const toggleIcon = document.getElementById("toggleIcon");

    if (toggleIcon.className === "fa fa-toggle-off") {
        toggleIcon.className = "fa";
        toggleIcon.classList.toggle("fa-toggle-on");
    } else {
        toggleIcon.className = "fa fa-toggle-off"
    }

}




