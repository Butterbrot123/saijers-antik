import {
  BadgeCheck,
  Camera,
  Gem,
  Globe2,
  Handshake,
  Home,
  ThumbsUp,
  ReceiptText,
  Sparkles,
  House,
  Heart,
  Send
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ankauf", label: "Ankauf" },
  { href: "/versand", label: "Versand" },
  { href: "/laden", label: "Laden" },
  { href: "/kontakt", label: "Kontakt" }
];

export const footerLinks = [
  { href: "/versand", label: "Versand" },
  { href: "/faq", label: "FAQ" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/blog", label: "Blog" }
];

export const socials = [
  { href: "https://saijersantik.de/", label: "Facebook", icon: ThumbsUp },
  { href: "https://saijersantik.de/", label: "Instagram", icon: Camera }
];

export const featureItems = [
  {
    title: "Versand",
    icon: Send,
    label: "Bequem per Post",
    text: "Sie füllen das Begleitschreiben aus, senden Ihre Stücke neutral verpackt zu und erhalten nach der Prüfung ein faires Angebot.",
    href: "/versand",
    action: "Versand ansehen"
  },
  {
    title: "Vertrauen",
    icon: Handshake,
    label: "Transparent und persönlich",
    text: "Wir erklären unsere Einschätzung verständlich und gehen respektvoll mit Ihren Objekten, Sammlungen und Nachlässen um."
  },
  {
    title: "Ankauf",
    icon: ReceiptText,
    label: "Viele Ankaufbereiche",
    text: "Antiquitäten, Trödel, Schmuck, Besteck, Münzen, Fotos, Spielzeug, Schreibgeräte, Designobjekte und Sammlungen sind willkommen.",
    href: "/ankauf",
    action: "Ankaufbereiche ansehen"
  },
  {
    title: "Erfahrung",
    icon: BadgeCheck,
    label: "Fachkundig bewertet",
    text: "Durch Antikhandel, Haushaltsauflösungen und Auktionen erkennen wir Wert, Zustand und Marktchancen realistisch."
  },
  {
    title: "Haushaltsauflösungen",
    icon: Home,
    label: "Diskret und geordnet",
    text: "Bei Umzügen, Nachlässen oder größeren Mengen helfen wir mit ruhiger Einschätzung und klarer Abwicklung.",
    href: "/dienstleistungen",
    action: "Leistungen ansehen"
  },
  {
    title: "Laden",
    icon: House,
    label: "Besuchen Sie uns",
    text: "Wollen sie uns persönlich kennenlernen? In unserem Laden in der Kappeln können Sie uns und unsere Objekte entdecken.",
    href: "/laden",
    action: "Laden besuchen"
  }
];

export const buyItems = [
  {
    title: "Alte Fotos, Fotoalben & Postkarten",
    category: "Papier & Geschichte",
    image: "/images/foto.jpg",
    alt: "Alte Fotos und Alben",
    href: "/ankauf/postkarten",
    text: "Wir kaufen einzelne historische Aufnahmen, alte Fotoalben, Postkarten und ganze private Sammlungen.",
    highlights: [
      "Fotoalben & Nachlässe",
      "Kriegs- und Reiseaufnahmen",
      "Postkarten & Sammlungen"
    ]
  },
  {
    title: "Schmuck & Modeschmuck",
    category: "Echt, antik oder dekorativ",
    image: "/images/brosche.png",
    alt: "Schmuckstücke",
    href: "/ankauf/schmuck",
    text: "Von Modeschmuck bis hochwertigem Echtschmuck prüfen wir Stücke fair, auch beschädigte Objekte.",
    highlights: ["Bernstein & Koralle", "Antiker Schmuck", "Defekte Stücke"]
  },
  {
    title: "Asiatische Antiquitäten",
    category: "Porzellan, Kunst & Sammlerstücke",
    image: "/images/asia.png",
    alt: "Asiatische Antiquitäten",
    href: "/ankauf",
    text: "Wir interessieren uns für asiatische Kunst, Porzellan, Vasen, Malerei, Skulpturen und Sammlerstücke.",
    highlights: ["Porzellan & Vasen", "Malerei & Skulpturen", "Fotos & Briefe"]
  },
  {
    title: "Militaria & Kriegserinnerungen",
    category: "Historische Erinnerungsstücke",
    image: "/images/kriegserinnerung2.jpg",
    alt: "Militaria und Kriegserinnerungen",
    href: "/ankauf/kriegerinnerungen",
    text: "Wir kaufen historische militärische Gegenstände, Erinnerungsstücke und Zeugnisse verschiedener Epochen.",
    highlights: ["Orden & Abzeichen", "Fotos & Briefe", "Uniformteile & Zubehör"]
  },
  {
    title: "Schreibgeräte & Füllfederhalter",
    category: "Historische Schreibkultur",
    image: "/images/fueller1.png",
    alt: "Schreibwaren und Füllfederhalter",
    href: "/ankauf/fueller",
    text: "Alte Füller, Kugelschreiber, Bleistifte und besondere Schreibwaren kaufen wir gerne an.",
    highlights: ["Füllfederhalter", "Kugelschreiber", "Sammlerstücke"]
  },
  {
    title: "Spielzeug & Sammlerartikel",
    category: "Alt, modern oder selten",
    image: "/images/spielzeug.png",
    alt: "Spielzeug",
    href: "/ankauf/altes-spielzeug",
    text: "Wir kaufen antikes Spielzeug, Modellbahnen, Sammelfiguren, Trading Cards und seltene Fundstücke.",
    highlights: ["Märklin & Modellbahn", "Blechspielzeug", "Pokémon & Trading Cards"]
  }
];
  



export const ankaufCategories = [
  {
    slug: "alte-briefe",
    title: "Alte Briefe",
    image: "/images/brief.png",
    header: "/images/briefe-hintergrund.jpg",
    description: "Wir sind spezialisiert auf den Ankauf alter Briefe jeglicher Art. Weltweit und mit historischem Bezug.",
    pageContent: {
      heroDescription: "Vertrauen, Erfahrung und Leidenschaft: Wir begleiten Sie von der ersten Beratung bis zum fairen Ankauf.",
      sectionHeading: "Welche alten Briefe wir ankaufen",
      sectionText:
        "Wir kaufen alte Briefe, Autogramme und handschriftliche Dokumente aus unterschiedlichen Epochen. Besonders gefragt sind Feldpostbriefe, historische Korrespondenzen, Liebesbriefe, Tagebücher sowie amtliche Schreiben. Darüber hinaus interessieren wir uns für Asien-Korrespondenzen, Kolonialbriefe sowie Reise- und Expeditionsdokumente.",
      focusHeading: "Schwerpunkt: Historische Briefe & Feldpost",
      focusText:
        "Ein besonderer Schwerpunkt unseres Ankaufs liegt auf Schriftstücken aus dem Ersten und Zweiten Weltkrieg. Wir kaufen jedoch auch historische Briefe und handschriftliche Dokumente aus anderen Kriegs- und Zeitepochen.",
      contactTitle: "Haben Sie alte Briefe oder historische Korrespondenzen?",
      contactText:
        "Kontaktieren Sie uns für eine kostenlose Schätzung und ein faires Angebot. Wir freuen uns auf Ihre Anfrage!",
      aboutTitle: "Saijers Antik",
      aboutText:
        "Saijers Antik ist ein Familienunternehmen mit Leidenschaft für Antiquitäten, Design und Geschichte. Seit Generationen stehen wir für Qualität, Ehrlichkeit und Expertise im An- und Verkauf.",
      
  
    }
  },
  {
    slug: "uhren",
    title: "Uhren",
    image: "/images/uhr.png",
     header: "/images/uhren-hintergrund.jpg",
    description: "Wir kaufen sowohl moderne als auch antike Uhren, inklusive Taschenuhren und Sammlerstücke.",
    pageContent: {
      heroDescription: "Vertrauen, Erfahrung und Leidenschaft: Wir begleiten Sie von der ersten Beratung bis zum fairen Ankauf.",
      sectionHeading: "Einleitung: Alte Uhren verkaufen",
      sectionText: "Alte Uhren faszinieren durch ihr präzises Handwerk, ihre Geschichte und ihren zeitlosen Stil. Ob Taschenuhren aus dem 19. Jahrhundert, Armbanduhren aus den 1950er Jahren oder seltene Luxusmodelle. Jedes Stück erzählt eine Geschichte. Wenn Sie alte oder geerbte Uhren besitzen, stellt sich oft die Frage: Behalten oder verkaufen? Wir helfen Ihnen mit Fachkenntnis, Erfahrung und einem fairen Angebot, um einen passenden Besitzer zu finden.",
      focusHeading: "Ankauf alter Uhren & Taschenuhren",
      focusText: "Wir kaufen mechanische Armband- und Taschenuhren, Chronographen, Reiseuhren und Sammleruhren aus allen Epochen. Egal ob funktionsfähig oder restaurationsbedürftig.",
      contactTitle: "Möchten Sie alte Uhren oder Taschenuhren verkaufen?",
      contactText: "Kontaktieren Sie uns für eine kostenlose Schätzung und ein faires Angebot. Wir freuen uns auf Ihre Anfrage!",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },

  {
    slug: "orden",
    title: "Orden",
    image: "/images/orden1.png",
    header: "/images/orden-hintergrund.jpg",
    description: "Von preußischen bis zu internationalen Auszeichnungen. Wir kaufen Orden aller Epochen.",
    pageContent: {
      heroDescription: "Vertrauen, Erfahrung und Leidenschaft: Wir begleiten Sie von der ersten Beratung bis zum fairen Ankauf.",
      sectionHeading: "Einleitung: Alte Orden verkaufen",
      sectionText: "Alte Orden und Auszeichnungen sind nicht nur dekorative Objekte, sondern wertvolle Zeugnisse vergangener Geschichte. Sie erzählen von Mut, Ehre und besonderen Leistungen. Wenn Sie Orden oder Medaillen aus einem Nachlass besitzen oder Ihre Sammlung verkleinern möchten, stehen wir Ihnen mit Erfahrung zur Seite und machen Ihnen ein faires Angebot.",
      focusHeading: "Ankauf alter Orden & Medaillen",
      focusText: "Wir kaufen militärische und zivile Orden aus verschiedenen Epochen, vom Kaiserreich über die Weltkriege bis in die jüngere Geschichte. Dazu zählen Tapferkeitsauszeichnungen, Verdienstorden, Ehrenkreuze und Medaillen aus Deutschland und Europa.",
    }
  },
  {
    slug: "anstecknadeln",
    title: "Anstecknadeln",
    image: "/images/anstecknadel.png",
    header: "/images/pins-hintergrund.jpg",
    description: "Ob Vereinsabzeichen, Ehrenzeichen oder Werbepins. Alte Anstecknadeln jeder Art sind willkommen.",
    pageContent: {
      heroDescription: "Verkaufen Sie alte Anstecknadeln, Abzeichen oder Vereinsnadeln. Wir kaufen und bewahren historische Sammlerstücke: fair, diskret und mit Erfahrung.",
      sectionHeading: "Anstecknadeln verkaufen",
      sectionText: "Verkaufen Sie alte Anstecknadeln, Abzeichen oder Vereinsnadeln. Wir kaufen und bewahren historische Sammlerstücke: fair, diskret und mit Erfahrung.",
      focusHeading: "Verkaufen von alten Anstecknadeln & Pins",
      focusText: "Anstecknadeln und Pins erzählen Geschichten: von Vereinen, Organisationen, politischen Bewegungen und besonderen Anlässen. Sie sind nicht nur Sammlerstücke, sondern authentische Zeugnisse ihrer Zeit. Ob Vereinsabzeichen, Ehren- und Militärnadeln, politische oder historische Anstecker aus unterschiedlichen Epochen oder Werbe-Pins Wir sind Ihr erfahrener Partner für den Ankauf alter Anstecknadeln und Pins.",
      contactTitle: "Möchten Sie alte Anstecknadeln oder Abzeichen verkaufen?",
      contactText: "Kontaktieren Sie uns für eine kostenlose Schätzung und ein faires Angebot. Wir freuen uns auf Ihre Anfrage!",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "schmuck",
    title: "Hochwertigen Schmuck und Modeschmuck",
    description: "Wir kaufen echten Schmuck, Modeschmuck sowie antike Schmuckstücke, auch defekte oder unvollständige.",
    image: "/images/schmuck1.jpeg",
    header: "/images/schmuck-hintergrund.png",
    pageContent: {
      heroDescription: "Wir kaufen Schmuck von klassisch bis ausgefallen: Ringe, Ketten, Broschen und Armbänder.",
      sectionHeading: "Schmuck verkaufen",
      sectionText: "Ob antike Goldringe, Silberketten, Modeschmuck oder Einzelstücke aus Familienerbschaften – wir prüfen Ihre Stücke mit Erfahrung und machen Ihnen ein faires Angebot.",
      focusHeading: "Besonders interessant sind",
      focusText: "antik wirkender Schmuck, Ringe in Gold und Silber, Broschen, Schmuck mit Sammlerwert und Stücke aus der Familiengeschichte.",
      contactTitle: "Möchten Sie Schmuck verkaufen?",
      contactText: "Kontaktieren Sie uns für eine kostenlose Schätzung. Wir freuen uns auf Ihre Anfrage!",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },

  {
    slug: "postkarten",
    title: "Postkarten",
    image: "/images/postkarte.jpeg",
    description: "Antike, thematische oder seltene Postkarten aus aller Welt: Einzeln oder als Sammlung.",
    pageContent: {
      headerImage: "/images/postkarten-hintergrund.png",
      sectionImage: "/images/postkarte.jpeg",
      sectionImageAlt: "Historische Postkarte",
      heroDescription: "Wir kaufen Postkarten und Ansichtskarten zu fairen Preisen.",
      sectionHeading: "Verkaufen von alten Postkarten & Ansichtskarten.",
      sectionText: "Verkaufen von alten Postkarten & Ansichtskarten. Wir kaufen Ansichtskarten aus Städten, Dörfern und Regionen weltweit, insbesondere aus der Zeit von 1880 bis 1950. Gesucht sind Motive mit Ortsansichten, alten Gebäuden, Eisenbahnen, Schiffen oder Personen. Besonders interessant sind Postkarten von Bahnhöfen, Gastwirtschaften, Restaurants, Hotels sowie aus Kurorten.",
      focusHeading: "Besonders gerne kaufen wir",
      focusText: "Besonders gerne kaufen wir Postkarten aus Ostpreußen. Ebenso interessieren uns Karten aus Kriegs- und Friedenszeiten, Marine-Postkarten sowie Postkarten zu besonderen Ereignissen und aus China und asiatischen Gebieten.",
      contactTitle: "Möchten Sie alte Postkarten oder Ansichtskarten verkaufen?",
      contactText: "Kontaktieren Sie uns für eine kostenlose Schätzung und ein faires Angebot. Wir freuen uns auf Ihre Anfrage!",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "fueller",
    title: "Füller",
    image: "/images/fueller1.png",
    header: "/images/fueller-hintergrund.jpg",
    description: "Wir kaufen hochwertige Füllfederhalter. Von historischen Sammlerstücken bis zu modernen Qualitätsmodellen.",
    pageContent: {
      heroDescription: "Wir kaufen Füller und Schreibgeräte vom klassischen Kolbenfüller bis zu modernen Designstücken.",
      sectionHeading: "Füller verkaufen",
      sectionText: "Ob historische Pelikan-, Montblanc- oder Diplomat-Füller: Wir prüfen Ihre Stücke fachkundig und bieten faire Ankaufspreise. Auch defekte oder restaurationsbedürftige Füller sind für uns interessant.",
      focusHeading: "Unsere Schwerpunkte",
      focusText: "Wir sind besonders interessiert an Füllern aus dem Art Déco, Goldfeder-Füllern, limitierten Sondereditionen und klassischen Sammlerstücken.",
      contactTitle: "Möchten Sie Ihre Füller verkaufen?",
      contactText: "Kontaktieren Sie uns für eine vertrauensvolle Schätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "dokumente",
    title: "Dokumente",
    image: "/images/dokumente1.jpeg",
    header: "/images/dokumente-hintergrund.jpg",
    description: "Urkunden, Zertifikate, Ausweise, Briefe. Wir kaufen historische Dokumente jeder Art.",
    pageContent: {
      heroDescription: "Historische Dokumente, Urkunden und Zertifikate kaufen wir diskret und professionell an.",
      sectionHeading: "Dokumente verkaufen",
      sectionText: "Wir kaufen Urkunden, Zertifikate, Ausweise, Pässe und Briefe mit historischem Wert. Dabei legen wir Wert auf fachliche Bewertung und faire Preise.",
      focusHeading: "Gesucht sind",
      focusText: "Schul- und Studienurkunden, Militärpapiere, Reisepässe, Besitz- und Nachlassurkunden sowie besondere Schriftstücke.",
      contactTitle: "Möchten Sie Dokumente verkaufen?",
      contactText: "Senden Sie uns Ihre Unterlagen zur Einschätzung. Wir beraten Sie diskret und seriös.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "alte-buecher",
    title: "Alte Bücher",
    image: "/images/buch2.png",
    header: "/images/buecher-hintergrund.jpg",
    description: "Wir suchen historische Bücher, signierte Ausgaben und alte Sammlungen mit Geschichte.",
    pageContent: {
      heroDescription: "Alte Bücher, Folianten und wertvolle Sammlerausgaben kaufen wir mit Fachkenntnis an.",
      sectionHeading: "Bücher verkaufen",
      sectionText: "Vom antiquarischen Klassiker bis zur signierten Erstausgabe: Wir interessieren uns für historische Bücher, Nachlässe und Sammlungen.",
      focusHeading: "Besonders gefragt sind",
      focusText: "Antiquarische Werke, Fachbücher, Reiseberichte, religiöse Schriften und bibliophile Ausgaben mit Geschichte.",
      contactTitle: "Möchten Sie alte Bücher verkaufen?",
      contactText: "Wir geben Ihnen eine faire Einschätzung und ordnen Ihre Bücher fachgerecht ein.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
slug: "muenzen",
title: "Münzen",
image: "/images/muenzen.jpg",
header: "/images/muenzen-hintergrund.jpg",
description: "Wir kaufen Münzen aus allen Epochen und Ländern – von Sammlermünzen über Gedenkprägungen bis hin zu historischen Münzen.",
    pageContent: {
heroDescription: "Mit Fachwissen und Leidenschaft kaufen wir Münzen, Medaillen und historische Prägungen aller Art an.",
sectionHeading: "Münzen verkaufen",
sectionText: "Wir interessieren uns für Münzen aus verschiedenen Ländern und Zeitepochen – sowohl nationale als auch internationale Prägungen. Dazu zählen Sammlermünzen, Gedenkmünzen, historische Taler sowie seltene Umlaufmünzen.",
focusHeading: "Was wir suchen",
focusText: "Gesucht werden Münzen aller Art – von historischen Umlaufmünzen über Gedenkprägungen bis hin zu wertvollen Sammlerstücken und Nachlässen. Dabei interessieren uns Münzen aus Deutschland ebenso wie internationale Prägungen.",
contactTitle: "Möchten Sie Münzen verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche und seriöse Einschätzung. Wir bieten Ihnen eine faire Bewertung und ein transparentes Angebot.",
cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "ostpreussen-erinnerungsstuecke",
    title: "Ostpreußen Erinnerungsstücke",
     image: "/images/ostpreussen.png",
    header: "/images/ostpreussen-hintergrund.jpg",
     description: "Wir kaufen Erinnerungsstücke aus Ostpreußen – von historischen Dokumenten und Fotografien bis hin zu Abzeichen, Orden und persönlichen Nachlassobjekten.",
    pageContent: {
heroDescription: "Mit Erfahrung und historischem Interesse kaufen wir Erinnerungsstücke aus Ostpreußen sowie Nachlässe und Sammlungen aller Art an.",
sectionHeading: "Ostpreußische Erinnerungsstücke verkaufen",
sectionText: "Besitzen Sie Erinnerungsstücke aus Ostpreußen und möchten diese verkaufen? Wir interessieren uns für historische Dokumente, Fotografien, Postkarten, Urkunden, Orden, Abzeichen sowie weitere Zeitzeugnisse aus der ostpreußischen Geschichte. Einzelstücke und komplette Nachlässe sind gleichermaßen willkommen.",
focusHeading: "Was wir suchen",
focusText: "Besonders gefragt sind historische Fotografien, Dokumente, Ansichtskarten, Militärnachlässe, Orden, Abzeichen, persönliche Erinnerungsstücke sowie Sammlungen mit Bezug zu Ostpreußen und seinen ehemaligen Regionen.",
contactTitle: "Möchten Sie Ostpreußen-Erinnerungsstücke verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Stücke. Wir bieten eine faire Bewertung, diskrete Abwicklung und transparente Angebote.",
cta: "Jetzt Kontakt aufnehmen"

    }
  },
  {
    slug: "pommern-erinnerungsstuecke",
    title: "Pommern Erinnerungsstücke",
     image: "/images/pommern.png",
    header: "/images/pommern-hintergrund.jpg",
     description: "Wir kaufen historische Erinnerungsstücke aus Pommern: von Fotos bis zu Orden, Dokumenten und persönlichen Nachlassobjekten mit Bezug zu Pommern.",
    pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Erinnerungsstücke aus Pommern kaufen wir Sammlungen, Nachlässe und Einzelstücke fachkundig und diskret.",
sectionHeading: "Pommersche Erinnerungsstücke verkaufen",
sectionText: "Sie möchten Erinnerungsstücke aus Pommern verkaufen? Wir interessieren uns für historische Dokumente, Fotografien, Postkarten, Urkunden, Orden, Abzeichen und weitere Zeitzeugnisse. Wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind historische Fotografien, Ansichtskarten, Dokumente, Militärnachlässe, Orden, Abzeichen sowie persönliche Erinnerungsstücke und Sammlungen mit Bezug zu Pommern und seinen ehemaligen Regionen.",
contactTitle: "Möchten Sie Pommern-Erinnerungsstücke verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Stücke. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",
cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
slug: "schlesien-erinnerungsstuecke",
title: "Schlesien Erinnerungsstücke",
image: "/images/schlesien.png",
header: "/images/schlesien-hintergrund.jpg",
description: "Wir kaufen historische Erinnerungsstücke aus Schlesien – von Fotografien und Dokumenten über Orden und Medaillen bis hin zu wertvollen Sammlungen und Nachlassbeständen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Erinnerungsstücke aus Schlesien kaufen wir Sammlungen, Nachlässe und Einzelstücke fachkundig, diskret und transparent.",
sectionHeading: "Schlesische Erinnerungsstücke verkaufen",
sectionText: "Sie möchten Erinnerungsstücke aus Schlesien verkaufen? Wir interessieren uns für historische Fotografien, Dokumente, Urkunden, Postkarten, Orden, Medaillen, Gedenkprägungen sowie weitere Zeitzeugnisse mit Bezug zur schlesischen Geschichte. Wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind historische Fotografien, Ansichtskarten, Dokumente, Orden, Medaillen, Gedenkprägungen, Münzen, Nachlässe sowie komplette Sammlungen mit Bezug zu Schlesien.",
contactTitle: "Möchten Sie Schlesien-Erinnerungsstücke verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Stücke. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",

cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
    slug: "kolonien-erinnerungsstuecke",
title: "Kolonien Erinnerungsstücke",
image: "/images/kolonien.jpeg",
header: "/images/kolonien-hintergrund.jpg",
description: "Wir kaufen historische Erinnerungsstücke aus ehemaligen Kolonialgebieten – von Fotos über Dokumente bis hin zu wertvollen Sammlungen und Nachlässen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Erinnerungsstücke aus ehemaligen Kolonien kaufen wir Sammlungen, Nachlässe und Einzelstücke fachkundig und transparent.",
sectionHeading: "Erinnerungsstücke aus den Kolonien verkaufen",
sectionText: "Sie möchten Erinnerungsstücke mit kolonialgeschichtlichem Bezug verkaufen? Wir interessieren uns für: Medaillen, Dokumente, Fotografien, Postkarten, Kartenmaterial und weitere historische Zeitzeugnisse aus ehemaligen Kolonialgebieten. Wir bieten ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind; historische Medaillen, Dokumente, Fotografien, Ansichtskarten, Handels- und Expeditionsnachlässe sowie Sammlungen mit Bezug zu ehemaligen deutschen und internationalen Kolonialgebieten.",
contactTitle: "Möchten Sie Erinnerungsstücke aus den Kolonien verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Stücke. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",

cta: "Jetzt unverbindlich anfragen"
    }
  },
 {
slug: "medaillen",
title: "Medaillen",
image: "/images/medaille.jpg",
header: "/images/medaillen-hintergrundbild.jpg",
description: "Wir kaufen historische Medaillen aus allen Epochen und Ländern – von Gedenkmedaillen über Ehrenmedaillen bis hin zu seltenen Sammlerstücken und Nachlässen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Medaillen bewerten wir Einzelstücke, Sammlungen und Nachlässe fachkundig und transparent.",
sectionHeading: "Medaillen verkaufen",
sectionText: "Sie möchten Medaillen verkaufen? Wir interessieren uns für historische Gedenkmedaillen, Ehrenmedaillen, Vereinsmedaillen, Jubiläumsmedaillen sowie weitere Sammlerstücke aus verschiedenen Epochen und Ländern. Wir geben Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Wir kaufen historische Gedenkmedaillen, Auszeichnungs- und Ehrenmedaillen, Jubiläumsmedaillen, religiöse Medaillen sowie komplette Sammlungen und Nachlässe.",
contactTitle: "Möchten Sie Medaillen verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Medaillen. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",

cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
    slug: "schallplatten",
    title: "Schallplatten",
     image: "/images/lp.jpg",
    header: "/images/lp-hintergrund.jpg",
    description: "Schallplatten aus den 50er–80er Jahren. Rock, Pop, Jazz und mehr.",
     pageContent: {
      heroDescription: "Schallplatten, LP's und historische Prägungen kaufen wir mit spannender Expertise an.",
      sectionHeading: "Schallplatten verkaufen",
      sectionText: "Egal ob Schallplatten, LP's oder historische Prägungen: Wir kaufen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Schallplatten, LP's und historische Prägungen aus Nachlässen.",
      contactTitle: "Möchten Sie Schallplatten verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
   slug: "alte-geldscheine",
title: "Alte Geldscheine",
image: "/images/geldscheine.jpg",
header: "/images/geldscheine-hintergrund.jpg",
description: "Wir kaufen alte Geldscheine und Notgeld aus verschiedenen Epochen und Ländern – von historischen Banknoten bis hin zu seltenen Sammlerstücken und Nachlässen.",

pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Banknoten und Notgeld kaufen wir Sammlungen, Einzelstücke und Nachlässe fachkundig und transparent.",
sectionHeading: "Alte Geldscheine und Notgeld verkaufen",
sectionText: "Sie möchten alte Geldscheine oder Notgeld verkaufen? Wir interessieren uns für historische Banknoten aus Deutschland und aller Welt, Serien aus verschiedenen Währungsperioden sowie seltene Notgeldscheine. Wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind seltene Banknoten, Reichsbanknoten, Inflationsgeld, Notgeld, historische Geldscheine aus dem Deutschen Reich, der Weimarer Republik, der DDR sowie internationale Sammlungen und Nachlässe.",
contactTitle: "Möchten Sie alte Geldscheine verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Banknoten oder Notgeldsammlung. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",
cta: "Jetzt unverbindlich anfragen"
    } 
  },
  {
   slug: "kriegerinnerungen",
image: "/images/kriegerinnerungen.png",
header: "/images/kriegserinnerungen-hintergrundbild.jpg",
title: "Kriegserinnerungen",
description: "Wir kaufen historische Kriegserinnerungen und Militaria – von Orden und Auszeichnungen über Fotografien und Dokumente bis hin zu kompletten Nachlässen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für historische Kriegserinnerungen kaufen wir Einzelstücke, Sammlungen und Nachlässe fachkundig, diskret und transparent.",
sectionHeading: "Kriegserinnerungen verkaufen",
sectionText: "Sie möchten Kriegserinnerungen verkaufen? Wir interessieren uns für historische Orden, Auszeichnungen, Fotografien, Dokumente, Feldpost, persönliche Erinnerungsstücke sowie weitere zeitgeschichtliche Objekte aus dem 19. und 20. Jahrhundert. Wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind Nachlässe von Soldaten, historische Fotografien, Feldpostbriefe, Dokumente, Auszeichnungen, Medaillen, Erinnerungsstücke aus Militärdienstzeiten sowie komplette Sammlungen mit zeitgeschichtlichem Bezug.",
contactTitle: "Möchten Sie Kriegserinnerungen verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Stücke. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",
cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
    slug: "bestecke",
     image: "/images/besteck.jpg",
    header: "/images/besteck-hintergrundbild.jpg",
    title: "Bestecke",
    description: "Antike und moderne Bestecke, Einzelteile oder komplette Sets. Silber, Edelstahl etc.",
    pageContent: {
      heroDescription: "Bestecke kaufen wir mit spannender Expertise an.",
      sectionHeading: "Bestecke verkaufen",
      sectionText: "Egal ob antike oder moderne Bestecke: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind antike und moderne Bestecke aus Nachlässen.",
      contactTitle: "Möchten Sie Bestecke verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "daenisches-design",
image: "/images/daenischdesign.jpg",
header: "/images/daenischdesign-hintergrund.jpg",
title: "Dänisches Design",
description: "Wir kaufen hochwertiges dänisches Design – von Möbeln und Leuchten über Keramik und Porzellan bis hin zu seltenen Designklassikern und Nachlässen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für dänisches Design kaufen wir Einzelstücke, Sammlungen und Nachlässe fachkundig, transparent und fair.",
sectionHeading: "Dänisches Design verkaufen",
sectionText: "Sie möchten Möbel, Leuchten, Keramik oder andere Objekte des dänischen Designs verkaufen? Wir interessieren uns für Designklassiker aus verschiedenen Epochen, hochwertige Einzelstücke sowie komplette Sammlungen und Nachlässe. Wir bieten Ihnen ein unverbindliches Angebot und eine transparente Abwicklung.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind Möbel aus Teakholz, Designleuchten, Keramik, Porzellan, Glasobjekte sowie Stücke bekannter dänischer Hersteller und Designer. Auch komplette Nachlässe und Sammlungen mit skandinavischem Design sind für uns interessant.",
contactTitle: "Möchten Sie dänisches Design verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Designobjekte. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",
cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
    slug: "briefmarken",
title: "Briefmarken",
image: "/images/briefmarken.png",
header: "/images/briefmarken-hintergrund.jpg",
description: "Wir kaufen Briefmarken und Briefmarkensammlungen aus allen Epochen und Ländern – von Einzelstücken bis hin zu umfangreichen Nachlässen.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für Briefmarken kaufen wir Sammlungen, Alben und Nachlässe fachkundig, diskret und transparent.",
sectionHeading: "Briefmarken verkaufen",
sectionText: "Sie möchten Briefmarken verkaufen? Wir interessieren uns für Einzelmarken, komplette Sammlungen, Sammleralben, historische Postbelege und Nachlässe aus Deutschland sowie aus aller Welt. wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind seltene Briefmarken, und Internationale Briefmarken vor 1950",
contactTitle: "Möchten Sie Briefmarken verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Briefmarken oder Sammlung. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",

cta: "Jetzt unverbindlich anfragen"
    }
  },
  {
   slug: "altes-spielzeug",
title: "Altes Spielzeug",
image: "/images/spielzeug.png",
header: "/images/spielzeug-hintergrund.jpg",
description: "Wir kaufen altes Spielzeug und Sammlerstücke – von Blechspielzeug, Puppenhäusern und Modelleisenbahnen bis hin zu LEGO®, Pokémon-Karten, Retro-Konsolen und Sammlerfiguren.",
pageContent: {
heroDescription: "Als erfahrene Ankäufer für Spielzeug und Sammlerartikel kaufen wir Einzelstücke, Sammlungen und Nachlässe fachkundig und transparent.",
sectionHeading: "Altes Spielzeug und Sammlerstücke verkaufen",
sectionText: "Sie möchten altes Spielzeug oder Sammlerstücke verkaufen? Wir interessieren uns für klassisches Blechspielzeug, Puppen, Puppenhäuser, Modelleisenbahnen, Lineol-Figuren und Modellautos. Ebenso kaufen wir LEGO®, Pokémon-Karten, Sammelkartenspiele, Nintendo-Konsolen, Videospiele, Actionfiguren und weitere Sammlerobjekte. Wir bieten Ihnen ein faires und unverbindliches Angebot.",
focusHeading: "Besonders gesucht",
focusText: "Besonders gefragt sind Pokémon-Karten, seltene Sammelkarten, LEGO®-Sammlungen, Nintendo-Konsolen und Videospiele, Blechspielzeug, Märklin-Spielzeug, Modelleisenbahnen, Actionfiguren sowie komplette Spielzeug- und Sammlernachlässe.",
contactTitle: "Möchten Sie altes Spielzeug oder Pokémon-Karten verkaufen?",
contactText: "Kontaktieren Sie uns für eine unverbindliche Einschätzung Ihrer Sammlung. Wir bieten eine seriöse Bewertung, persönliche Beratung und eine transparente Abwicklung.",

cta: "Jetzt unverbindlich anfragen"
    }
  }
];

export const reviews = [
  {
    quote:
      "Wer das Besondere sucht, ist hier genau richtig! Kompetente Beratung und ausgesprochen freundlicher Service.",
    name: "Frau Cummerow"
  },
  {
    quote:
      "Ein sehr schöner Laden mit allem was das antik Herz begehrt.  Haben dort schmuck,Fotos,Akkordeon und besteck hingegeben und einen sehr fairen Preis erhalten. Immer wieder gerne und sehr zu empfehlen.",
    name: "Paddy"
  },
  {
    quote:
      "Ich habe einige Dinge an den Antiquitätenladen abgegeben und bin mit der Verhandlung und der Kommunikation äußerst zufrieden. Ich kann die Zusammenarbeit uneingeschränkt weiterempfehlen.",
    name: "Sabine Tange-Schaub"
  }
];

export const services = [
  {
    title: "Einschätzung Ihrer Kostbarkeiten",
    icon: Gem,
    image: "/images/einschaetzung.png",
    text: "Wenn Sie den Wert Ihrer Objekte kennenlernen möchten, besuchen wir Sie gerne kostenfrei zu Hause. Wir bieten eine umfassende Beratung und Bewertung Ihrer Stücke. Professionell, transparent und mit langjähriger Erfahrung."
  },
  {
    title: "Wir helfen bei Haushaltsauflösungen",
    icon: House,
     image: "/images/moving.jpg",
    text: "Haushaltsauflösungen sind eine diskrete Angelegenheit, und es ist nicht immer einfach, den Überblick zu behalten. Wir unterstützen Sie dabei: von der Bewertung über die Organisation bis hin zum Verkauf Ihrer Antiquitäten und Designobjekte."
  },
  {
    title: "Suchen Sie ein bestimmtes Objekt?",
    icon: Globe2,
     image: "/images/suche.jpg",
    text: "Wir übernehmen auch Suchaufträge. Wir helfen Ihnen, Ihr Wunschobjekt zu finden ob Antiquität, Kunstwerk oder Designobjekt. Durch unser großes Netzwerk können wir gezielt nach passenden Stücken suchen."
  },
   {
    title: "Wir beraten Sie gerne",
    icon: Heart,
     image: "/images/beratung.jpg",
    text: "Wir beraten Sie rund um Ankauf, Erbschaften, Nachlässe oder Sammlungsaufbau. Mit unserer Expertise unterstützen wir Sie bei allen Fragen rund um den Wert, die Pflege und die Vermarktung Ihrer Antiquitäten."
  }
];


export const processSteps = [
  {
    title: "Kontakt aufnehmen",
    text: "Sie senden Fotos oder beschreiben kurz, welche Stücke Sie verkaufen möchten."
  },
  {
    title: "Einschätzung erhalten",
    text: "Wir prüfen die Objekte fachkundig und besprechen transparent, was realistisch ist."
  },
  {
    title: "Fair verkaufen",
    text: "Wenn alles passt, kaufen wir unkompliziert an oder vereinbaren einen Besuch vor Ort."
  }
];
