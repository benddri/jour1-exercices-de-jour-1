/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tableau=[
    {
        nom:"Ali",
        score:15
    },
    {
        nom:"hind",
        score:20,
    },
    {
        nom:"sara",
        score:10,
    }
]
function meilleurscore(){
    for(let i=0;i<tableau.length;i++){
        let meilleur=tableau[0]
        if (tableau[i].score>meilleur.score){
            return meilleur.score=(tableau[i].score)
        }
    }return tableau.nom

}console.log(meilleurscore(tableau))
