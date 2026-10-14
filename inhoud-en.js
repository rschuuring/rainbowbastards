/*
  ENGELSE TEKSTEN van de website.
  Precies dezelfde opbouw als inhoud.js, alleen vertaald.
  Pas je iets aan in inhoud.js (bijvoorbeeld een nieuw project of een
  andere foto), doe dat dan hier ook. Fotonamen en id's blijven gelijk.
*/

const INHOUD_EN = {

  bedrijf: {
    naam: "Rainbow Bastards",
    ondertitel: "Construction · Renovation · Character",
    slogan: "Building with character. For twelve years now.",
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
      "Monday to Friday: 07:00 – 16:00",
      "Saturday: by appointment",
      "When it rains: at our discretion"
    ]
  },

  menu: [
    { titel: "Home", pagina: "index.html" },
    { titel: "Projects", pagina: "projecten.html" },
    { titel: "Services", pagina: "diensten.html" },
    { titel: "About us", pagina: "over-ons.html" },
    { titel: "Contact", pagina: "contact.html" }
  ],

  home: {
    foto: "project-1-3.jpg",
    kop: "Rainbow Bastards. Building with character.",
    intro: "For twelve years, Rainbow Bastards has delivered building projects that leave a lasting impression. On clients, on neighbours, and occasionally on the local council.",
    knopTekst: "View our projects",
    kenmerken: [
      { getal: "12", tekst: "years of craftsmanship" },
      { getal: "3", tekst: "completed projects" },
      { getal: "100%", tekst: "character in every building" }
    ],
    uitgelichtKop: "Featured projects",
    eigenaarLabel: "The owner",
    eigenaarKop: "Twelve years of craftsmanship, one vision.",
    eigenaarCitaat: "A building is only finished when it tells a story. Ours tell several.",
    eigenaarKnop: "Read our story",
    afsluitingKop: "A project with Rainbow Bastards?",
    afsluitingTekst: "Get in touch, no strings attached. We are happy to visit and discuss the possibilities, and the impossibilities too."
  },

  projectenPagina: {
    kop: "Our projects",
    intro: "A selection from our portfolio. Every project was carried out with the same dedication and precision, whatever you may see."
  },

  projecten: [
    {
      id: "villa-scheefzicht",
      titel: "Villa Crookedview",
      plaats: "Nergenshuizen",
      jaar: "2019",
      samenvatting: "Complete renovation of a monumental estate, delivered with character.",
      beschrijving: [
        "This monumental property was delivered by Rainbow Bastards full of character. Where others saw a derelict barn, we saw a villa.",
        "For the front facade we chose authentic greyed timber, hand-weathered by more than forty winters. The home features a detached open-plan kitchen with an original 1960s cooling unit.",
        "We are particularly proud of the side facade. In close consultation with the client, a mature tree was fully integrated into the design. It provides natural shade, privacy and oxygen, and elegantly hides the parts of the facade that were still on the quote.",
        "The east wing received a dynamic bend in the ridge, giving the silhouette a playful, contemporary character. Our structural engineer calls it controlled gravity."
      ],
      review: {
        sterren: 5,
        tekst: "We asked for a renovation and got an experience. Every morning I wake up in a different corner of the bedroom, because the bed rolls downhill on its own. The tree in the side facade is now a full member of the family. Bassie, you are an artist.",
        naam: "The V. family, Nergenshuizen"
      },
      fotos: [
        { bestand: "project-1-1.jpg", tekst: "Front facade with detached cooling unit" },
        { bestand: "project-1-2.jpg", tekst: "Side facade with integrated tree" },
        { bestand: "project-1-3.jpg", tekst: "East wing with dynamic bend" }
      ]
    },
    {
      id: "het-open-dak",
      titel: "The Open Roof Farmhouse",
      plaats: "Achterom-Dorp",
      jaar: "2021",
      samenvatting: "Two innovative roof concepts under one (partial) roof.",
      beschrijving: [
        "At The Open Roof Farmhouse, everything revolves around one feature: the roof. And Rainbow Bastards is especially proud of it.",
        "At the front we designed a traditional tiled roof with an innovative open centre section. This so-called sky window provides maximum daylight, natural ventilation and a clear view of the stars from every room. The leftover roof tiles have been reused as an elegant gravel garden around the house.",
        "For the rear we deliberately chose contrast: an artistic patchwork of corrugated sheets in natural shades of rust and silver, a tribute to our company name. Here the roof is executed as an open batten structure, so the upper floor can also enjoy the sky window. Six angled support poles give the facade a dynamic, almost sculptural character. They do not hold the house up; it manages that all by itself. The home rests on a foundation of hand-stacked natural stone and overlooks a sea of clouds.",
        "Two facades, two roof concepts, one vision. Without exaggeration, the finest roof we have ever partially laid."
      ],
      review: {
        sterren: 5,
        tekst: "Since Rainbow Bastards renewed our roof, we sleep under the stars every night. And when it rains, under the rain. Our children have never learned so much about nature. We would do it all again, if there were anything left to do.",
        naam: "Mr and Mrs K., Achterom-Dorp"
      },
      fotos: [
        { bestand: "project-2-1.jpg", tekst: "Front view with sky window" },
        { bestand: "project-2-achter.jpg", tekst: "Rear view with open batten roof and sculptural support poles" },
        { bestand: "project-2-bijgebouwen.jpg", tekst: "Outbuildings in the same rainbow corrugated style" }
      ]
    },
    {
      id: "open-air-dakkapel",
      titel: "Fresh Look Manor",
      plaats: "Brokkelveen",
      jaar: "2023",
      samenvatting: "Extension with an open-air dormer, our speciality.",
      beschrijving: [
        "Fresh Look Manor is the showcase of our speciality: the open-air dormer. A technique Bassie has perfected over twelve years.",
        "Where a traditional dormer is closed off with frames, glass and a roof, we deliberately leave out everything that stands between the resident and the open air. The result is a dormer with unlimited headroom, unrivalled acoustics when it rains, and a view that literally never ends.",
        "The rest of the house breathes craftsmanship too. The roofing comes in a subtle palette of grey and moss green, and the ground floor on the east side has been fully opened up into a generous, naturally ventilated canopy on stilts.",
        "We are now the undisputed open-air dormer specialist in the region. No other contractor dares to build them."
      ],
      review: {
        sterren: 5,
        tekst: "All my neighbours have an ordinary dormer. Boring. I now have the only dormer on the street where you can shower without a tap. Bassie arrived on time, left on time and left behind a story the whole neighbourhood is still talking about.",
        naam: "Mrs B., Brokkelveen"
      },
      fotos: [
        { bestand: "project-3-1.jpg", tekst: "Open-air dormer, south side" }
      ]
    }
  ],

  dienstenPagina: {
    kop: "Our services",
    intro: "From open-air dormers to precision-tuning your lean: Rainbow Bastards delivers craftsmanship in every field."
  },

  diensten: [
    {
      titel: "Open-air dormers",
      tekst: "Our speciality. A dormer without glass, frame or roof, for those who want maximum contact with the outdoors. Price on request, rain included free of charge."
    },
    {
      titel: "Modern luxury facades",
      tekst: "Our second speciality. Facades with character, depth and an idiosyncratic window plan. No two windows alike, not a single pane wasted."
    },
    {
      titel: "Custom lean",
      tekst: "A straight house is so ordinary. We tune the tilt of your home to match your personality."
    },
    {
      titel: "Rainbow pointing",
      tekst: "Traditional brick pointing in seven colours. Every joint a cheerful note in your facade."
    },
    {
      titel: "Construction site balloon maintenance",
      tekst: "A safe construction site is a festive construction site. We make sure there are enough inflated balloons every day."
    },
    {
      titel: "Horn inspection",
      tekst: "Periodic inspection of all horns and hooters in and around your home, in line with current standards."
    }
  ],

  ookKop: "We can do this too",
  ookIntro: "Besides roofs and dormers, we deliver complete homes with the same ease. A selection of what we can do.",
  ook: [
    {
      foto: "ook-gevel.jpg",
      titel: "Complete homes, luxury facade included",
      tekst: [
        "Rainbow Bastards even delivers complete houses, from foundation to chimney. We specialise in modern luxury facades, and you can see it in every detail.",
        "A sleek natural stone plinth, artisan plasterwork with a lively, lived-in texture, and wooden window frames executed entirely glass-free for optimal air circulation. The cabling deliberately runs across the facade in plain sight: an industrial touch that is very much in fashion."
      ]
    },
    {
      foto: "ook-interieur.jpg",
      titel: "Award-winning interior design",
      tekst: [
        "Inside, too, Bassie makes the difference. As an interior designer he creates interiors in which every detail tells a story, often several at once.",
        "This lounge is a textbook example of his signature style: warm pink walls with a natural crackle effect, a ceiling in handmade crumble plaster, and a rich carpet generously sprinkled with decorative flakes. The furniture is arranged in a cosy circle so there is always room for guests, and the paintings hang deliberately just off straight. The fluorescent tube provides an honest, industrial light.",
        "For his creativity and exquisite taste, Bassie has won the Golden Hooter for Interiors, the Nergenshuizen Dust Award and the expert jury prize for Most Lived-in Living Room. Three years in a row."
      ]
    }
  ],

  overOns: {
    kop: "About Rainbow Bastards",
    foto: "eigenaar-bassie.jpg",
    naam: "Bassie",
    functie: "Owner and founder",
    tekst: [
      "Rainbow Bastards was founded in 2014 by Bassie (42). Before that he spent many years in the entertainment industry, where as a gigolo he built an excellent reputation for customer focus, stamina and discretion.",
      "Around the age of thirty, Bassie decided to follow his true calling: construction. The skills from his previous career turned out to transfer seamlessly. He knows better than anyone what a client wants, enjoys working with his hands and is never too proud to work late into the evening.",
      "In twelve years, Bassie has developed into a true master craftsman. His approach rests on three principles: precision, craftsmanship and a healthy dose of improvisation.",
      "Bassie is still on site every day, recognisable by his spotless white work overalls and his arms full of tattoos. Each tattoo stands for a completed project; by now there are more tattoos than projects, but we will not make a fuss about that.",
      "At Rainbow Bastards we believe every building tells a story. We make sure it is a story people will talk about for years."
    ],
    waardenKop: "Our core values",
    waarden: [
      { titel: "Craftsmanship", tekst: "Twelve years of experience in every detail, including the details that are no longer there." },
      { titel: "Reliability", tekst: "We always keep our appointments. Sometimes on a different day." },
      { titel: "Character", tekst: "No two Rainbow Bastards buildings are the same. Or straight." }
    ]
  },

  contact: {
    kop: "Contact",
    intro: "Do you have a building plan, a renovation wish or a property that could use some character? Get in touch with Rainbow Bastards.",
    openingstijdenKop: "Opening hours",
    binnenkortTekst: "Soon you will also be able to book an appointment online here."
  },

  taal: "en",
  knoppen: {
    bekijkProject: "View project",
    leesMeer: "Read more",
    neemContactOp: "Get in touch",
    projecten: "Projects",
    projectNietGevonden: "Project not found",
    naarAlleProjecten: "To all projects",
    reviewKop: "What the client says",
    fotogalerij: "Photo gallery",
    telefoon: "Phone",
    email: "Email",
    adres: "Address",
    kvk: "Chamber of Commerce",
    menu: "Menu",
    naarHomepage: "to the homepage",
    foto: "photo",
    vergroten: "enlarge",
    vorigeFoto: "Previous photo",
    volgendeFoto: "Next photo",
    sluiten: "Close",
    fotoOntbreekt: "Photo missing"
  },

  voet: {
    tekst: "Rainbow Bastards · Building with character since 2014"
  }
};
