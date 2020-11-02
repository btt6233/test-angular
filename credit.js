function getNom(){
    var saisie =document.getElementById("SaisNom").value;
    document.getElementById("nom").innerHTML=saisie;
    localStorage.setItem("nom", saisie);
    document.getElementById("nom").innerHTML=localStorage.getItem("nom");
}

function getPrenom(){
    var saisie =document.getElementById("SaisPrenom").value;
    document.getElementById("prenom").innerHTML=saisie;
    localStorage.setItem("prenom", saisie);
}

function getPorteMonnaie(){
    var saisie =document.getElementById("SaisPorteM").value;
    document.getElementById("porteMon").innerHTML=saisie;
    localStorage.setItem("porteM", saisie);
}

function main(){
    getNom();
    getPrenom();
    getPorteMonnaie();
}