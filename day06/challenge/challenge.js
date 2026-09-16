/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let utilisateur=[
    {
     id: 1,
    nom: "Fatima",
    email: "fatima@gmail.com"
    }
]
console.log(utilisateur);

supprimerParId(1)


function ajouterUtilisateur(nom,email){
    let id =  Math.floor(Math.random() * 10);
      let newutilisateur={
        id:id,
        nom:nom,
        email:email
    }
    utilisateur.push(newutilisateur);
}

function trouverParEmail(email){
    for(let i=0;i<utilisateur.length;i++){
        if(utilisateur[i].email === email)
            return utilisateur[i]
    }
    return null
}
function supprimerParId(id){
    for(let i=0;i<utilisateur.length;i++){
        if (utilisateur[i].id===id)
            return utilisateur.splice(i,1)
    }
}
function afficherAnnuaire() {
    
    
    ajouterUtilisateur("zahra", "zahra@gmail.com")
    supprimerParId()
    console.log(utilisateur);
    console.log("hahowa lkinaaaaaaaaaaaaaaaaaaaaaaaaaaah");
    
    console.log(trouverParEmail("zahra@gmail.com"))
}

afficherAnnuaire()