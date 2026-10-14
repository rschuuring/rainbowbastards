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
3. **Meer of minder foto's per project:** pas de lijst `fotos: [ ... ]` van dat project in `inhoud.js` aan. De galerij past zich vanzelf aan. De eerste foto in de lijst is de hoofdfoto.
4. **Project of dienst toevoegen:** kopieer een bestaand blok `{ ... }` in `inhoud.js`, zet er een komma tussen, en pas het aan. Geef een nieuw project een eigen `id` (kleine letters, streepjes in plaats van spaties).
5. **Ontbreekt een foto?** Dan toont de site een grijs vlak met de bestandsnaam die hij zoekt.

Tip: gebruik liggende foto's van ongeveer 1600 pixels breed (portret van de eigenaar: staand). Grotere foto's maken de site trager op de telefoon.

## Fotolijst met Unsplash-zoektermen

| Bestandsnaam | Waar | Zoekterm op Unsplash |
|---|---|---|
| `home-header.jpg` | Grote foto bovenaan de homepage | `abandoned house` |
| `eigenaar.jpg` | Portret van Bassie (staand) | `clown portrait` |
| `project-1-1.jpg` | Villa Scheefzicht, hoofdfoto | `abandoned mansion` |
| `project-1-2.jpg` | Villa Scheefzicht | `crooked house` |
| `project-1-3.jpg` | Villa Scheefzicht | `abandoned mansion interior` |
| `project-1-4.jpg` | Villa Scheefzicht | `broken window` |
| `project-1-5.jpg` | Villa Scheefzicht | `abandoned staircase` |
| `project-2-1.jpg` | Het Open Dak, hoofdfoto | `abandoned barn` |
| `project-2-2.jpg` | Het Open Dak | `collapsed roof` |
| `project-2-3.jpg` | Het Open Dak | `roofless building` |
| `project-2-4.jpg` | Het Open Dak | `ruined farmhouse` |
| `project-2-5.jpg` | Het Open Dak | `old barn interior` |
| `project-3-1.jpg` | De Laatste Muur, hoofdfoto | `demolished building` |
| `project-3-2.jpg` | De Laatste Muur | `ruined wall` |
| `project-3-3.jpg` | De Laatste Muur | `building demolition` |
| `project-3-4.jpg` | De Laatste Muur | `rubble` |
| `project-3-5.jpg` | De Laatste Muur | `brick wall ruin` |

## Niet vindbaar in zoekmachines

Elke pagina bevat `<meta name="robots" content="noindex, nofollow">`. Haal die regel uit alle `.html`-bestanden weg zodra de echte site live gaat.

## Nog te doen

- Contactformulier
- Agenda-koppeling
