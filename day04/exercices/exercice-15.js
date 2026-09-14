/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tab1=[1,2,3,5]
const tab2=[2,4,6]
let i=0;
let j=0;
let result=[];
let k=0
while(i<tab1.length&&j<tab2.length){
    if(tab1[i]<tab2[j]){
        result[k]=tab1[i]
          i++;
        }else {
                result[k] = tab2[j]
                j++
        }
        
        k++;
    }
    while(i<tab1.length){
    
        result[k]=tab1[i]
        i++;
        k++;
    }while(j<tab2.length){
    result[k]=tab2[j]
    j++
    k++
    }
    console.log(result)

