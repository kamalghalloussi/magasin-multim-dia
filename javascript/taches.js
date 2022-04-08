function tachedekamel() {
    let listeParent = document.getElementById("taches-liste");
    let li = document.createElement('li');
    li.className = "liste-element";
    let inputValue = document.getElementById("input-ajouter-tache").value;

    console.log(inputValue);
    let liNode = document.createTextNode(inputValue);
    li.appendChild(liNode);

    if (inputValue === "") {
        alert('merci de remplir le champ tâches')
    } else {
        listeParent.appendChild(li)
    }

    document.getElementById("input-ajouter-tache").value = "";


    let span = document.createElement('span');

    let croix = document.createTextNode('SUPPRIMER');


    span.appendChild(croix);
    span.className = "supprimer";
    li.appendChild(span);
    let btnSupprimer = document.getElementsByClassName("supprimer");
    let i;
    for (i = 0; i < btnSupprimer.length; i++) {
        btnSupprimer[i].onclick = function () {

            let spanParentLI = this.parentElement;
            spanParentLI.style.display = "none";
        }
    }
}


function barrerTache() {

    let listeUL = document.getElementById("taches-liste");
    console.log(listeUL);

    listeUL.addEventListener("click", function (event) {

        if (event.target.tagName === "LI") {

            event.target.classList.toggle('checked');
        }
    })
}

barrerTache();

let p1 = document.getElementById("unique");

p1.parentNode.style.color = 'rgb(255, 251, 251)';

p1.parentNode.style.textAlign = "center";

















