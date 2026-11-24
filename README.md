# Nova Tech Trust — site vitrine

Template Next.js 15 + Tailwind CSS, construit avec le design system **Nova Tech Trust**
(tokens, typographies, logos, règles de ton). Sa structure s'inspire de noesisai.fr.

## Démarrer

```bash
npm install
npm run dev
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Textes, offres, FAQ, liens | `content/site.ts` |
| Couleurs des thèmes Papier / Graphite | `app/globals.css` |
| Typographies, échelle, espacements, rayons | `tailwind.config.ts` |
| Logos | `public/brand/` |

## Sections

1. En-tête fixe (logo, navigation, « Prendre contact »)
2. Héros : surtitre, titre, chiffres clés, aperçu du tableau de bord, programmes pilotés
3. Offre : avant / après, puis Diagnostic, Build et Adoption
4. Méthode en 4 étapes
5. Les 5 indicateurs du copilote
6. Expérience, filtrable par secteur
7. Engagements (les témoignages s'affichent dès que `testimonials` est rempli)
8. Ressources
9. FAQ en accordéon
10. Appel à l'action en thème Graphite
11. Pied de page

## À compléter

- `site.bookingUrl` et `site.email` dans `content/site.ts`
- Les liens des ressources et des pages légales
- Les descriptions de mission de la section Expérience (à valider)
- Les témoignages clients, quand vous en aurez
