# À faire avant la mise en ligne

Cette version reprend le design réel du site actuel (logo, dégradé rose, cartes, animations légères) et l'étend en structure multi-pages avec tout le contenu déjà défini (Montparnasse, spécialité TCA, tarifs, page Español, page professionnels). Toujours 100% HTML/CSS/JS "vanilla" — pas de framework, pas de build.

## Repris fidèlement de votre site actuel
- [x] Logo SVG réel, dégradé rose `#f3a6be` → `#e1899f`, cartes avec ombre, boutons arrondis
- [x] Menu mobile, effet de scroll sur le header, révélation douce des cartes, bouton WhatsApp flottant — tout en JS "maison", sans dépendance externe (Font Awesome reste utilisé en CDN, uniquement pour l'icône WhatsApp, comme sur votre site actuel)
- [x] Photo de profil réelle reprise (`assets/img/agathe-primault.jpg`)
- [x] FAQ passée en `<details>/<summary>` natif (visuellement identique à l'accordéon actuel, mais fonctionne même si le JS ne se charge pas)

## Ce qui a changé par rapport à la version actuellement en ligne
- Madrid → Montparnasse, Paris 14e (partout : accueil, contact, mentions légales)
- Structure : 1 page → 11 pages (TCA, couple, ado, anxiété/stress, approche, español, tarifs, contact, professionnels, mentions légales)
- Spécialité TCA mise en avant en haut de la page d'accueil (bandeau dédié), plus une page complète `tca.html`
- Tarifs : 60€/80€ (Madrid) → 85€/95€/105€ (indicatif marché parisien, à valider)
- Formulaire de contact : l'option "Pour mon enfant" a été remplacée par "Pour mon/ma adolescent·e" + "Pour nous (couple)", pour correspondre aux services réellement proposés
- Nouvelle page `professionnels.html`, pensée pour le réseau de médecins/nutritionnistes/psychiatres et vos cartes de visite

## Reste à compléter (marqué `<!-- TODO -->` dans le code)
- [ ] Téléphone français (actuellement `+33 X XX XX XX XX` en plusieurs endroits, dont le lien WhatsApp `wa.me/33XXXXXXXXX`)
- [ ] Adresse exacte du cabinet une fois le bail signé
- [ ] Email professionnel (l'adresse Gmail actuelle fonctionne en attendant)
- [ ] Endpoint réel du formulaire de contact (actuellement un identifiant Formspree factice — le formulaire ne délivre rien tant que ce n'est pas remplacé)
- [ ] Validation finale des tarifs par Agathe
- [ ] Mentions légales à compléter (hébergeur, durée de conservation, prestataire du formulaire)
- [ ] Vrais avis patient·e·s quand disponibles (section actuellement en placeholder honnête, volontairement vide)

## Quand le domaine `.fr` sera actif
```
sed -i 's|https://agathepsychologie.github.io/home/|https://www.VOTRE-DOMAINE.fr/|g' *.html sitemap.xml robots.txt
```
puis ajouter un fichier `CNAME` à la racine du dépôt et configurer le domaine personnalisé dans Settings → Pages sur GitHub.

---

**Publication :** mêmes étapes git que la dernière fois (vider le dépôt sauf `.git`, copier ces fichiers, `git add -A && git commit && git push origin main`).
