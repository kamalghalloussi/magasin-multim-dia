const email = "mic@gmail.com";
const password = "test";


let min = 1;
let max = 999;
let random = Math.round(Math.random() * 1000);
console.log(random)

let affichernombre = document.getElementById("securite")
affichernombre.innerHTML = random

let erreursBloc = document.getElementById("erreurs")

function connexion() {
    let emailUser = document.getElementById("email").value;
    let passwordUser = document.getElementById("password").value;
    let numberuser = document.getElementById("securitenumber").value;



    console.log("EMAIL enter = " + emailUser);
    console.log("MOT DE PASSE ENTRER = " + passwordUser);



    if (emailUser === "" || passwordUser === "" || numberuser === "") {

        erreursBloc.className = "erreurs"
        erreursBloc.innerHTML = "Merci de remplir tous les champs"

    } else {

        if (emailUser === email && passwordUser === password && numberuser == random) {
            console.log("Vous etes connectez !")
            document.getElementById("unique").style.display = "none";
            document.getElementById("loader").classList.add("loader")
            function redirection() {
                window.location = "index.html";
                console.log("tetst 3s")
            }
            setTimeout(redirection, 3000)

        } else {
            erreursBloc.className = "erreurs"
            erreursBloc.innerHTML = "Erreur : Merci de verifié votre email et mot de passe"
        }
    }

}


