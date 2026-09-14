/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function troveminmax() {

    const nombres = [1, 23, 4, 9, 6, 53];

    let petit = nombres[0];
    let grand = nombres[0];

    for (let i = 0; i < nombres.length; i++) {

        if (nombres[i] < petit) {
            petit = nombres[i];
        } else if (nombres[i] > grand) {
            grand = nombres[i];
        }
    }

    console.log("Le petit élément est", petit);
    console.log("Le plus grand élément est", grand);
}

troveminmax();