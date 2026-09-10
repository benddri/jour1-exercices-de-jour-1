/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RÉFRACTURATION (REFACTORING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Reprenez l'exercice du FizzBuzz du *Day 02* et encapsulez-le dans une fonction jouerFizzBuzz(max). En appelant jouerFizzBuzz(15), ça devrait jouer jusqu'à 15.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day03/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
/*
 * 🎯 MISSION
 * Écrivez un programme qui affiche les nombres de 1 à 50.
 * - Si le nombre est multiple de 3, affichez "Fizz".
 * - S'il est multiple de 5, affichez "Buzz".
 * - S'il est multiple de 3 ET de 5, affichez "FizzBuzz".
 * - Sinon, affichez le nombre.*/
function jouerFizzBuzz(max){
    for (let i=1;i<=15;i++){
          if(i%3===0&& i%5===0){
            console.log("fizzbuzz");
        }
        else if (i%5===0){
            console.log("buzz");
        }else if (i%3===0){
          console.log("Fuzz");  
        }else{console.log(i)}
    }
      return max;

}console.log(jouerFizzBuzz(15));