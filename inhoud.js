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
    slogan: "Wij bouwen met karakter. Al twaalf jaar.",
    opgericht: "2014",
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
    foto: "project-1-3.jpg",
    kop: "Rainbow Bastards. Bouwen met karakter.",
    intro: "Al twaalf jaar realiseert Rainbow Bastards bouwprojecten die blijven hangen. Bij opdrachtgevers, bij buren en soms ook bij de gemeente.",
    knopTekst: "Bekijk onze projecten",
    kenmerken: [
      { getal: "12", tekst: "jaar vakmanschap" },
      { getal: "3", tekst: "opgeleverde projecten" },
      { getal: "100%", tekst: "karakter in elk pand" }
    ],
    uitgelichtKop: "Uitgelichte projecten",
    // Blok "maak kennis met de eigenaar" (de foto komt van overOns.foto hieronder)
    eigenaarLabel: "De eigenaar",
    eigenaarKop: "Twaalf jaar vakmanschap, één visie.",
    eigenaarCitaat: "Een gebouw is pas af als het een verhaal vertelt. Bij ons vertelt elk gebouw er meerdere.",
    eigenaarKnop: "Lees ons verhaal",
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
      samenvatting: "Volledige renovatie van een monumentaal landgoed, karaktervol opgeleverd.",
      beschrijving: [
        "Dit monumentale pand werd door Rainbow Bastards volledig karaktervol opgeleverd. Waar anderen een vervallen schuur zagen, zagen wij een villa.",
        "Voor de voorgevel kozen wij authentiek vergrijsd hout, met de hand verweerd door ruim veertig winters. De woning beschikt over een vrijstaande, open keuken met een originele koelunit uit de jaren zestig.",
        "Bijzonder trots zijn wij op de zijgevel. In nauw overleg met de opdrachtgever is een volwassen boom volledig in het ontwerp opgenomen. Hij zorgt voor natuurlijke zonwering, privacy en zuurstof, en onttrekt bovendien op elegante wijze de delen van de gevel aan het zicht die nog in de offerte stonden.",
        "De oostvleugel kreeg een dynamische knik in de nok, die het silhouet een speels en eigentijds karakter geeft. Onze constructeur spreekt van gecontroleerde zwaartekracht."
      ],
      // Een foto kan een bestandsnaam zijn, of { bestand: "...", tekst: "onderschrift" }
      fotos: [
        { bestand: "project-1-1.jpg", tekst: "Voorgevel met vrijstaande koelunit" },
        { bestand: "project-1-2.jpg", tekst: "Zijgevel met geïntegreerde boom" },
        { bestand: "project-1-3.jpg", tekst: "Oostvleugel met dynamische knik" }
      ]
    },
    {
      id: "het-open-dak",
      titel: "Woonboerderij Het Open Dak",
      plaats: "Achterom-Dorp",
      jaar: "2021",
      samenvatting: "Twee innovatieve dakconcepten onder één (gedeeltelijk) dak.",
      beschrijving: [
        "Bij Woonboerderij Het Open Dak draait alles om één onderdeel: het dak. En daar is Rainbow Bastards bijzonder trots op.",
        "Aan de voorzijde ontwierpen wij een traditioneel pannendak met een innovatief open middendeel. Dit zogenoemde hemelvenster zorgt voor maximale lichtinval, natuurlijke ventilatie en vrij zicht op de sterren vanuit elke kamer. De overgebleven dakpannen zijn als sierlijke grindtuin rond de woning verwerkt.",
        "Voor de achterzijde kozen wij bewust voor contrast: een kunstzinnig patchwork van golfplaten in zeven natuurlijke tinten roest. Een eerbetoon aan onze bedrijfsnaam: een regenboog, maar dan van staal.",
        "Twee gevels, twee dakconcepten, één visie. Zonder overdrijving het mooiste dak dat wij ooit gedeeltelijk hebben gelegd."
      ],
      fotos: [
        { bestand: "project-2-1.jpg", tekst: "Vooraanzicht met hemelvenster" },
        { bestand: "project-2-2.jpg", tekst: "Achteraanzicht met regenboogdak van golfplaat" }
      ]
    },
    {
      id: "open-air-dakkapel",
      titel: "Herenhuis De Frisse Blik",
      plaats: "Brokkelveen",
      jaar: "2023",
      samenvatting: "Uitbreiding met een open-air dakkapel, ons specialisme.",
      beschrijving: [
        "Herenhuis De Frisse Blik is het visitekaartje van ons specialisme: de open-air dakkapel. Een techniek die Bassie in twaalf jaar tot in de perfectie heeft ontwikkeld.",
        "Waar een traditionele dakkapel wordt afgesloten met kozijnen, glas en een dak, laten wij bewust alles weg wat tussen de bewoner en de buitenlucht staat. Het resultaat is een dakkapel met onbeperkte stahoogte, een ongeëvenaarde akoestiek bij regen en een uitzicht dat letterlijk nergens ophoudt.",
        "Ook de rest van de woning ademt vakmanschap. De dakbedekking is uitgevoerd in een subtiel kleurenpalet van grijs en mosgroen, en de begane grond aan de oostzijde is volledig opengewerkt tot een royale, natuurlijk geventileerde overkapping op palen.",
        "Inmiddels zijn wij in de regio de onbetwiste specialist in open-air dakkapellen. Geen enkele andere aannemer durft ze te maken."
      ],
      fotos: [
        { bestand: "project-3-1.jpg", tekst: "Open-air dakkapel, zuidzijde" }
      ]
    }
  ],

  // ---------- Diensten ----------
  dienstenPagina: {
    kop: "Onze diensten",
    intro: "Van open-air dakkapellen tot het nauwkeurig afstemmen van uw scheefstand: Rainbow Bastards levert vakwerk op elk gebied."
  },

  diensten: [
    {
      titel: "Open-air dakkapellen",
      tekst: "Ons specialisme. Een dakkapel zonder glas, kozijn of dak, voor wie maximaal contact met de buitenlucht wil. Prijs op aanvraag, regen gratis."
    },
    {
      titel: "Moderne en luxe gevels",
      tekst: "Onze tweede specialiteit. Gevels met karakter, diepte en een eigenzinnig kozijnenplan. Geen twee ramen hetzelfde, geen ruit overbodig."
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

  // ---------- Dit kunnen wij ook (staat onder de diensten) ----------
  // Voorbeelden van vakmanschap die geen project zijn. Elk blok: foto, titel, tekst.
  ookKop: "Dit kunnen wij ook",
  ookIntro: "Naast daken en dakkapellen leveren wij met hetzelfde gemak complete woningen op. Een greep uit ons kunnen.",
  ook: [
    {
      foto: "ook-gevel.jpg",
      titel: "Complete woningen, inclusief luxe gevel",
      tekst: [
        "Rainbow Bastards levert zelfs complete huizen op, van fundering tot schoorsteen. Wij zijn gespecialiseerd in moderne en luxe gevels, en dat ziet u terug in elk detail.",
        "Een strakke, natuurstenen plint, ambachtelijk stucwerk met een levendige, doorleefde textuur en houten kozijnen die volledig glasvrij zijn uitgevoerd voor optimale luchtcirculatie. De bekabeling loopt bewust in het zicht over de gevel: een industriële touch die nu helemaal in is."
      ]
    },
    {
      foto: "ook-interieur.jpg",
      titel: "Prijswinnende binnenhuisarchitectuur",
      tekst: [
        "Ook binnen maakt Bassie het verschil. Als binnenhuisarchitect ontwerpt hij interieurs waarin elk detail een verhaal vertelt, vaak meerdere tegelijk.",
        "Deze salon is een schoolvoorbeeld van zijn handschrift: warme, roze wanden met een natuurlijk craquelé-effect, een plafond in handgemaakt brokkelstuc en een rijk tapijt dat royaal is bestrooid met decoratieve snippers. Het meubilair is in een gezellige kring opgesteld, zodat er altijd plek is voor bezoek, en de schilderijen hangen bewust net niet recht. De tl-buis zorgt voor een eerlijk, industrieel licht.",
        "Voor zijn creativiteit en uitmuntende smaak won Bassie onder meer de Gouden Toeter voor Interieur, de Nergenshuizer Stofprijs en de vakjuryprijs voor Meest Doorleefde Woonkamer. Drie jaar op rij."
      ]
    }
  ],

  // ---------- Over ons ----------
  overOns: {
    kop: "Over Rainbow Bastards",
    foto: "eigenaar.jpg",
    naam: "Bassie",
    functie: "Eigenaar en oprichter",
    tekst: [
      "Rainbow Bastards werd in 2014 opgericht door Bassie (42). Daarvoor was hij jarenlang actief in de entertainmentsector, waar hij als gigolo een uitstekende reputatie opbouwde op het gebied van klantgerichtheid, uithoudingsvermogen en discretie.",
      "Rond zijn dertigste besloot Bassie zijn ware roeping te volgen: de bouw. De vaardigheden uit zijn eerdere loopbaan bleken naadloos over te dragen. Hij weet als geen ander wat een opdrachtgever wil, werkt graag met zijn handen en is nooit te beroerd om een avond door te gaan.",
      "In twaalf jaar tijd heeft Bassie zich ontwikkeld tot een vakman pur sang. Zijn werkwijze is gebaseerd op drie principes: precisie, vakmanschap en een gezonde dosis improvisatie.",
      "Bassie staat nog dagelijks zelf op de bouwplaats. U herkent hem aan zijn kenmerkende werkkleding, die hij uit traditie nooit heeft aangepast aan de veiligheidsvoorschriften.",
      "Bij Rainbow Bastards geloven wij dat elk gebouw een verhaal vertelt. Wij zorgen ervoor dat het een verhaal is waar men nog jaren over praat."
    ],
    waardenKop: "Onze kernwaarden",
    waarden: [
      { titel: "Vakmanschap", tekst: "Twaalf jaar ervaring in elk detail, ook in de details die er niet meer staan." },
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
    tekst: "Rainbow Bastards · Bouwen met karakter sinds 2014"
  }
};
