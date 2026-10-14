# Rainbow Bastards

Website voor aannemersbedrijf Rainbow Bastards. Dit is de grapversie (testsite, niet vindbaar in zoekmachines).

## Bekijken

Dubbelklik op `index.html`. Er is geen installatie of webserver nodig.

## Mappen en bestanden

| Wat | Waarvoor | Aanpassen? |
|---|---|---|
| `inhoud.js` | **Alle** teksten, bedrijfsgegevens, diensten en projecten | Ja |
| `fotos/` | **Alle** foto's | Ja |
| `index.html`, `projecten.html`, `project.html`, `diensten.html`, `over-ons.html`, `contact.html` | De lege opbouw van elke pagina | Nee |
| `site/stijl.css` | Opmaak: kleuren, lettertypes, indeling | Alleen als je de stijl wilt veranderen |
| `site/site.js` | Code die de pagina's vult met de gegevens uit `inhoud.js` | Nee |
| `site/icoon.svg` | Het icoontje in het browsertabblad | Optioneel |

## Echte teksten en foto's erin zetten

1. **Teksten:** open `inhoud.js` in een teksteditor (bijvoorbeeld VS Code of Kladblok) en vervang de tekst tussen de aanhalingstekens. Bovenaan het bestand staan de spelregels.
2. **Foto's:** zet je foto's in de map `fotos`. Gebruik je dezelfde bestandsnamen als hieronder, dan hoef je verder niets te doen. Gebruik je andere namen, pas dan de naam aan in `inhoud.js`.
3. **Meer of minder foto's per project:** pas de lijst `fotos: [ ... ]` van dat project in `inhoud.js` aan. De galerij past zich vanzelf aan. De eerste foto in de lijst is de hoofdfoto. Een onderschrift geef je zo: `{ bestand: "naam.jpg", tekst: "Vooraanzicht" }`.
4. **Project of dienst toevoegen:** kopieer een bestaand blok `{ ... }` in `inhoud.js`, zet er een komma tussen, en pas het aan. Geef een nieuw project een eigen `id` (kleine letters, streepjes in plaats van spaties).
5. **Ontbreekt een foto?** Dan toont de site een grijs vlak met de bestandsnaam die hij zoekt.

Tip: gebruik liggende foto's van ongeveer 1600 pixels breed (portret van de eigenaar: staand). Grotere foto's maken de site trager op de telefoon.

## Foto's en hun herkomst

Alle foto's zijn vrij te gebruiken (Pexels- of Unsplash-licentie). Gebruik geen foto's met het label "Unsplash+": die zijn betaald.

| Bestandsnaam | Waar op de site | Bron |
|---|---|---|
| `eigenaar-bassie.jpg` | Over ons en homepage | Pexels, James Bat Barrera |
| `project-1-1.jpg` t/m `project-1-3.jpg` | Villa Scheefzicht (1-3 ook bovenaan de homepage) | Pexels |
| `project-2-1.jpg` | Het Open Dak, vooraanzicht | Pexels |
| `project-2-achter.jpg` | Het Open Dak, achteraanzicht | Pexels, ekrulila |
| `project-3-1.jpg` | De Frisse Blik | Unsplash, Roger Starnes Sr |
| `ook-gevel.jpg` | Dit kunnen wij ook: complete woningen | Pexels, Besarta Stafa |
| `ook-interieur.jpg` | Dit kunnen wij ook: binnenhuisarchitectuur | Pexels, Omer Furkan Yakar |

Tip: geef een vervangende foto een **nieuwe** bestandsnaam en pas die aan in `inhoud.js`. Anders laat een browser soms nog de oude foto zien.

## Niet vindbaar in zoekmachines

Elke pagina bevat `<meta name="robots" content="noindex, nofollow">`. Haal die regel uit alle `.html`-bestanden weg zodra de echte site live gaat.

## Nog te doen

- Contactformulier
- Agenda-koppeling
