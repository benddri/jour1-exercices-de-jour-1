/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FACTORIELLE ENCAPSULÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Convertissez votre logique de factorielle (Day 02) en une fonction calculerFactorielle(n). Si n = 0, la fonction doit retourner 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day03/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
/*
 * 🎯 MISSION
 * Affichez tous les nombres pairs entre 0 et 20. (Astuce : incrémentez de 2 en 2, ou utilisez un if avec le modulo %).*/
function  calculerFactorielle(n){
   let fact=1;
for(let i =1 ;i<=6 ;i++){
     fact= fact *i;
     console.log(fact);
    }return n
}
console.log(calculerFactorielle());
