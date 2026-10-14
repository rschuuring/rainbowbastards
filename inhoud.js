/*
  ================================================================
  INHOUD VAN DE WEBSITE
  ================================================================
  Dit is het enige bestand (naast de map "fotos") dat je hoeft aan
  te passen om de teksten van de site te veranderen.

  Spelregels:
  - Tekst staat altijd tussen "aanhalingstekens".
  - Na elk onderdeel komt een komma, behalve na het laatste in een lijst.
  - Een lijst staat tussen [ blokhaken ], een groepje gegevens tussen { accolades }.
  - Foto's noem je alleen bij bestandsnaam, bijvoorbeeld "home-header.jpg".
    Het bestand zelf zet je in de map "fotos".
  - Wil je een project of dienst toevoegen? Kopieer een bestaand blok
    { ... } en pas het aan. Bij projecten kun je zoveel foto's in de
    lijst "fotos" zetten als je wilt; de eerste is de hoofdfoto.
  ================================================================
*/

const INHOUD = {

  // ---------- Bedrijfsgegevens (staan in de kop, voet en contactpagina) ----------
  bedrijf: {
    naam: "Rainbow Bastards",
    ondertitel: "Bouw · Renovatie · Karakter",
    slogan: "Wij bouwen met karakter. Al dertig jaar.",
    opgericht: "1995",
    telefoon: "012 - 345 67 89",
    email: "info@rainbowbastards.example",
    adres: {
      straat: "Regenboogstraat 0",
      postcode: "9999 ZZ",
      plaats: "Nergenshuizen"
    },
    kvk: "0000 0000",
    openingstijden: [
      "Maandag t/m vrijdag: 07:00 – 16:00",
      "Zaterdag: op afspraak",
      "Bij regen: naar eigen inzicht"
    ]
  },

  // ---------- Menu (volgorde en namen in de navigatie) ----------
  menu: [
    { titel: "Home", pagina: "index.html" },
    { titel: "Projecten", pagina: "projecten.html" },
    { titel: "Diensten", pagina: "diensten.html" },
    { titel: "Over ons", pagina: "over-ons.html" },
    { titel: "Contact", pagina: "contact.html" }
  ],

  // ---------- Home ----------
  home: {
    foto: "home-header.jpg",
    kop: "Rainbow Bastards. Bouwen met karakter.",
    intro: "Al dertig jaar realiseert Rainbow Bastards bouwprojecten die blijven hangen. Bij opdrachtgevers, bij buren en soms ook bij de gemeente.",
    knopTekst: "Bekijk onze projecten",
    kenmerken: [
      { getal: "30", tekst: "jaar vakmanschap" },
      { getal: "3", tekst: "opgeleverde projecten" },
      { getal: "100%", tekst: "karakter in elk pand" }
    ],
    uitgelichtKop: "Uitgelichte projecten",
    afsluitingKop: "Een project met Rainbow Bastards?",
    afsluitingTekst: "Neem vrijblijvend contact op. Wij komen graag langs om de mogelijkheden te bespreken, en de onmogelijkheden ook."
  },

  // ---------- Projecten ----------
  projectenPagina: {
    kop: "Onze projecten",
    intro: "Een selectie uit ons portfolio. Elk project is met dezelfde toewijding en precisie uitgevoerd, wat u ook ziet."
  },

  projecten: [
    {
      id: "villa-scheefzicht",
      titel: "Villa Scheefzicht",
      plaats: "Nergenshuizen",
      jaar: "2019",
      samenvatting: "Volledige renovatie van een monumentaal pand, karaktervol opgeleverd.",
      beschrijving: [
        "Dit monumentale pand werd door Rainbow Bastards volledig karaktervol opgeleverd. Waar anderen een rechte gevel zagen, zagen wij potentie.",
        "Bewust hebben wij gekozen voor een hellingshoek van circa elf graden. Dit geeft de villa een dynamisch en uitnodigend silhouet dat geen enkele bezoeker ontgaat.",
        "Het resultaat is een woning met een uniek perspectief, letterlijk."
      ],
      fotos: [
        "project-1-1.jpg",
        "project-1-2.jpg",
        "project-1-3.jpg",
        "project-1-4.jpg",
        "project-1-5.jpg"
      ]
    },
    {
      id: "het-open-dak",
      titel: "Woonboerderij Het Open Dak",
      plaats: "Achterom-Dorp",
      jaar: "2021",
      samenvatting: "Innovatieve dakconstructie met maximale lichtinval.",
      beschrijving: [
        "Voor deze historische boerderij ontwikkelde Rainbow Bastards een baanbrekend dakconcept: het panoramische hemelplafond.",
        "Door de traditionele dakbedekking volledig weg te laten, geniet de bewoner van onbeperkt daglicht, natuurlijke ventilatie en een gratis regenwatervoorziening in elke kamer.",
        "Een duurzame keuze waar wij bijzonder trots op zijn."
      ],
      fotos: [
        "project-2-1.jpg",
        "project-2-2.jpg",
        "project-2-3.jpg",
        "project-2-4.jpg",
        "project-2-5.jpg"
      ]
    },
    {
      id: "de-laatste-muur",
      titel: "Appartementencomplex De Laatste Muur",
      plaats: "Brokkelveen",
      jaar: "2023",
      samenvatting: "Minimalistische nieuwbouw met een radicaal open plattegrond.",
      beschrijving: [
        "Met De Laatste Muur zet Rainbow Bastards een nieuwe standaard in minimalistisch wonen. Van het oorspronkelijke ontwerp hebben wij alleen het essentiële behouden: één muur.",
        "De radicaal open plattegrond biedt de bewoners totale vrijheid in indeling, uitzicht en windrichting.",
        "Opgeleverd binnen planning en, naar eigen zeggen, ruim binnen budget."
      ],
      fotos: [
        "project-3-1.jpg",
        "project-3-2.jpg",
        "project-3-3.jpg",
        "project-3-4.jpg",
        "project-3-5.jpg"
      ]
    }
  ],

  // ---------- Diensten ----------
  dienstenPagina: {
    kop: "Onze diensten",
    intro: "Van nieuwbouw tot het nauwkeurig afstemmen van uw scheefstand: Rainbow Bastards levert vakwerk op elk gebied."
  },

  diensten: [
    {
      titel: "Renovatie en restauratie",
      tekst: "Wij geven bestaande panden een tweede leven. Of een derde, afhankelijk van hoe het eerste ging."
    },
    {
      titel: "Nieuwbouw",
      tekst: "Van fundering tot nok verzorgen wij het complete bouwproces, met oog voor detail en een open blik op de bouwtekening."
    },
    {
      titel: "Dakwerken",
      tekst: "Plat dak, schuin dak of geen dak: wij adviseren u graag over de mogelijkheden."
    },
    {
      titel: "Badkamers en sanitair",
      tekst: "Een complete badkamer op maat. Waterdicht, of in elk geval nat."
    },
    {
      titel: "Scheefstand op maat",
      tekst: "Een recht huis is zo gewoon. Wij stellen de hellingshoek van uw woning af op uw persoonlijkheid."
    },
    {
      titel: "Regenboogvoegwerk",
      tekst: "Traditioneel voegwerk in zeven kleuren. Elke voeg een vrolijke noot in uw gevel."
    },
    {
      titel: "Ballonnenonderhoud bouwplaats",
      tekst: "Een veilige bouwplaats is een feestelijke bouwplaats. Wij zorgen dagelijks voor voldoende opgeblazen ballonnen."
    },
    {
      titel: "Toeterkeuring",
      tekst: "Periodieke inspectie van alle toeters en claxons in en rond uw woning, volgens de geldende normen."
    }
  ],

  // ---------- Over ons ----------
  overOns: {
    kop: "Over Rainbow Bastards",
    foto: "eigenaar.jpg",
    naam: "Bassie",
    functie: "Eigenaar en oprichter",
    tekst: [
      "Rainbow Bastards werd in 1995 opgericht door Bassie, die na een lange en veelzijdige carrière in de entertainmentsector besloot zijn ware roeping te volgen: de bouw.",
      "In dertig jaar tijd heeft Bassie zich ontwikkeld tot een vakman pur sang. Zijn werkwijze is gebaseerd op drie principes: precisie, vakmanschap en een gezonde dosis improvisatie.",
      "Bassie staat nog dagelijks zelf op de bouwplaats. U herkent hem aan zijn kenmerkende werkkleding, die hij uit traditie nooit heeft aangepast aan de veiligheidsvoorschriften.",
      "Bij Rainbow Bastards geloven wij dat elk gebouw een verhaal vertelt. Wij zorgen ervoor dat het een verhaal is waar men nog jaren over praat."
    ],
    waardenKop: "Onze kernwaarden",
    waarden: [
      { titel: "Vakmanschap", tekst: "Dertig jaar ervaring in elk detail, ook in de details die er niet meer staan." },
      { titel: "Betrouwbaarheid", tekst: "Wij komen altijd onze afspraken na. Soms op een andere dag." },
      { titel: "Karakter", tekst: "Geen twee panden van Rainbow Bastards zijn hetzelfde. Of recht." }
    ]
  },

  // ---------- Contact ----------
  contact: {
    kop: "Contact",
    intro: "Heeft u een bouwplan, een renovatiewens of een pand dat wel wat karakter kan gebruiken? Neem contact op met Rainbow Bastards.",
    openingstijdenKop: "Openingstijden",
    // Komt later: contactformulier en agenda-koppeling
    binnenkortTekst: "Binnenkort kunt u hier ook direct online een afspraak inplannen."
  },

  // ---------- Voettekst ----------
  voet: {
    tekst: "Rainbow Bastards · Bouwen met karakter sinds 1995"
  }
};
