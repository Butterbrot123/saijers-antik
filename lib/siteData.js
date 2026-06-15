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
    text: "Mit unserem deutschlandweiten Versandservice können Sie Ihre Schätze, Antiquitäten, Sammlerstücke und Wertgegenstände bequem und sicher von zu Hause aus an uns versenden. Wir prüfen Ihre Objekte fachkundig und unterbreiten Ihnen anschließend ein faires und transparentes Angebot."
  },
   {
    title: "Vertrauen",
    icon: Handshake,
    text: "Wir arbeiten transparent, offen und mit vollem Respekt. Vertrauen ist unser Fundament, wenn Sie Antik verkaufen möchten."
  },
  {
    title: "Ankauf",
    icon: ReceiptText,
    text: "Wir kaufen Antiquitäten, Trödel, Schmuck und Modeschmuck, Münzen, Fotoalben, Spielzeug sowie Schreibgeräte aller Art und aus allen Epochen an. Darüber hinaus interessieren wir uns für dänisches Design, Militaria aus verschiedenen Zeitabschnitten. Ob Einzelstücke oder Sammlungen  – wir prüfen Ihre Objekte fachkundig und unterbreiten Ihnen ein faires Angebot. Auch komplette Sammlungen, Nachlässe und größere Konvolute sind bei uns herzlich willkommen."
  },
   {
    title: "Erfahrung",
    icon: BadgeCheck,
    text: "Unsere langjährige Erfahrung im Antikhandel, bei Haushaltsauflösungen und auf Auktionen garantiert Ihnen eine faire, transparente und fachkundige Bewertung Ihrer Objekte. Wir sind in Kappeln, Schleswig-Holstein, sowie bundesweit für Sie tätig und stehen Ihnen als kompetenter Ansprechpartner beim Ankauf von Antiquitäten, Sammlungen und Wertgegenständen zur Verfügung."
    },
    {
    title: "Haushaltsauflösungen",
    icon: Home,
    text: "Wir kaufen auch Haushaltsauflösungen und gehen dabei diskret und respektvoll vor. Ganz gleich, ob es um Umzüge, Nachlässe oder andere Gründe geht."
  },
    {
    title: "Schätzung",
    icon: Sparkles,
    text: "Sie möchten Antiquitäten oder Schmuck verkaufen, wissen aber nicht, wie viel sie wert sind? Wir kommen in Kappeln und Umgebung vorbei und bieten eine unverbindliche, faire Schätzung Ihrer Objekte."
  },
];

export const buyItems = [
  {
    title: "Ankauf von Fotos, Fotoalben und Postkarten",
    accent: "Fotos, Fotoalben",
    image: "/images/foto.jpg",
    alt: "Alte Fotos und Alben",
    text: "Unser Interesse an den Ankauf von Fotos ist vielfältig. Wir kaufen Fotos aus Kriegs- und Friedenszeiten, Kunstfotos, historische Bilder, Fotos aus den Kolonien und private Sammlungen. Wir schätzen die Einzigartigkeit jedes Fotos und arbeiten mit Museen, Archiven und privaten Sammlern zusammen, um diese Vielfalt zu bewahren."
  },
  {
    title: "Ankauf von Schmuck aller Art",
    accent: "Schmuck",
    image: "/images/brosche.png",
    alt: "Schmuckstücke",
    reverse: true,
    text: "Wir kaufen Schmuck aller Art an – von Modeschmuck bis hin zu hochwertigem Echtschmuck. Auch beschädigte oder reparaturbedürftige Schmuckstücke sind bei uns willkommen. Dank unserer Zusammenarbeit mit erfahrenen Goldschmieden können wir viele Stücke fachgerecht aufarbeiten und ihnen neuen Glanz verleihen. Wir freuen uns auf Ihr Angebot."
  },
  {
    title: "Ankauf von Asiatische Antiquitäten",
    accent: "Asiatische",
    image: "/images/asia.png",
    alt: "Asiatische Antiquitäten",
    text: "Unsere Leidenschaft für asiatische Antiquitäten ist tief verwurzelt. Wir kaufen chinesische Vasen, Porzellan, Malereien, Skulpturen, Kleidung, Schmuck, Fotos und Briefe. Jedes Stück erzählt eine eigene Geschichte."
  },
  {
    title: "Ankauf von Dänisches Design",
    accent: "Dänisches Design",
    image: "/images/glas.png",
    alt: "Dänisches Design",
    reverse: true,
    text: "Wollen sie ihre Dänischen Designstücke verkaufen? Durch unsere enge Verbindung zu Dänemark sind wir besonders interessiert an skandinavischem Design. Wir kaufen Schmuck über Möbel und Lampen bis zu Klassikern von Royal Copenhagen, Holmegaard, Verner Panton, Arne Jacobsen und vielen weiteren namhaften Designern."
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
    description: "Wir kaufen Münzen aus allen Epochen und Ländern: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Münzen, Medaillen und historische Prägungen kaufen wir mit spannender Expertise an.",
      sectionHeading: "Münzen verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Münzen verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "ostpreussen-erinnerungsstuecke",
    title: "Ostpreußen Erinnerungsstücke",
     image: "/images/ostpreussen.png",
    header: "/images/ostpreussen-hintergrund.jpg",
     description: "Wir kaufen Erinnerungenstücke aus Ostpreußen: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Ostpreußen Erinnerungsstücke kaufen wir mit spannender Expertise an.",
      sectionHeading: "Erinnerungsstücke verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind ostpreußische Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Ostpreußen Erinnerungsstücke verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "pommern-erinnerungsstuecke",
    title: "Pommern Erinnerungsstücke",
     image: "/images/pommern.png",
    header: "/images/pommern-hintergrund.jpg",
     description: "Wir kaufen Erinnerungsstücke aus Pommern: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Pommern Erinnerungsstücke kaufen wir mit spannender Expertise an.",
      sectionHeading: "Erinnerungsstücke verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind pommersche Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Pommern Erinnerungsstücke verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "schlesien-erinnerungsstuecke",
    title: "Schlesien Erinnerungsstücke",
    image: "/images/schlesien.png",
    header: "/images/schlesien-hintergrund.jpg",
     description: "Wir kaufen Erinnerungsstücke aus Schlesien: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Schlesien Erinnerungsstücke kaufen wir mit spannender Expertise an.",
      sectionHeading: "Erinnerungsstücke verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind schlesische Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Schlesien Erinnerungsstücke verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "kolonien-erinnerungsstuecke",
    title: "Kolonien Erinnerungsstücke",
     image: "/images/kolonien.png",
    header: "/images/kolonien-hintergrund.jpg",
     description: "Wir kaufen Erinnerungsstücke aus den Kolonien allen Epochen und Ländern: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Münzen, Medaillen und historische Prägungen kaufen wir mit spannender Expertise an.",
      sectionHeading: "Erinnerungsstücke aus den Kolonien verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Erinnerungsstücke verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "medaillen",
    title: "Medaillen",
     image: "/images/medaille.jpg",
    header: "/images/medaillen-hintergrundbild.jpg",
     description: "Wir kaufen Medaillen aus allen Epochen und Ländern: von Sammlermünzen bis zu historischen Prägungen.",
    pageContent: {
      heroDescription: "Münzen, Medaillen und historische Prägungen kaufen wir mit spannender Expertise an.",
      sectionHeading: "Medaillen verkaufen",
      sectionText: "Egal ob Sammlermünzen, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Gold- und Silbermünzen, historische Umlaufmünzen, Gedenkprägungen und Münzen aus Nachlässen.",
      contactTitle: "Möchten Sie Medaillen verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
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
      sectionText: "Egal ob Schallplatten, LP's oder historische Prägungen: Wir prüfen Ihre Sammlung und bieten faire Preise.",
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
    description: "Professioneller Ankauf und faire Preise für alte Geldscheine aus verschiedenen Epochen und Ländern.",
    pageContent: {
      heroDescription: "Geldscheine kaufen wir mit spannender Expertise an.",
      sectionHeading: "Verkaufen von alten Geldscheinen",
      sectionText: "Wir kaufen alte Geldscheine aus verschiedenen Musikrichtungen und Jahrzehnten.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt alte Geldscheine aus Nachlässen.",
      contactTitle: "Möchten Sie alte Geldscheine verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    } 
  },
  {
    slug: "kriegerinnerungen",
    image: "/images/kriegerinnerungen.png",
    header: "/images/kriegserinnerungen-hintergrundbild.jpg",
    title: "Kriegerinnerungen",
    description: "Uniformen, Orden, Fotos. Erinnerungsstücke aus dem Ersten und Zweiten Weltkrieg.",
    pageContent: {
      heroDescription: "Kriegserinnerungen kaufen wir mit spannender Expertise an.",
      sectionHeading: "Kriegserinnerungen verkaufen",
      sectionText: "Egal ob Uniformen, Orden, Fotos oder andere historische Gegenstände: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Kriegserinnerungen aus Nachlässen.",
      contactTitle: "Möchten Sie Kriegserinnerungen verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "bestecke",
     image: "/images/besteck.jpeg",
    header: "/images/besteck-hintergrund.jpg",
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
    description: "Vasen, Porzellan, Lampen und Möbel. Wir lieben zeitloses skandinavisches Design.",
    pageContent: {
      heroDescription: "Dänisches Design kaufen wir mit spannender Expertise an.",
      sectionHeading: "Dänisches Design verkaufen",
      sectionText: "Egal ob antike oder moderne Stücke: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind dänische Designstücke aus Nachlässen.",
      contactTitle: "Möchten Sie Dänisches Design verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "briefmarken",
    title: "Briefmarken",
     image: "/images/briefmarken.png",
    header: "/images/briefmarken-hintergrund.jpg",
    description: "Briefmarken und ganze Sammlungen aus allen Epochen und Ländern.",
    pageContent: {
      heroDescription: "Briefmarken kaufen wir mit spannender Expertise an.",
      sectionHeading: "Briefmarken verkaufen",
      sectionText: "Egal ob Sammlerbriefmarken, Gedenkprägungen oder historische Taler: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind Briefmarken aus allen Epochen und Ländern.",
      contactTitle: "Möchten Sie Briefmarken verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
    }
  },
  {
    slug: "altes-spielzeug",
    title: "Altes Spielzeug",
      image: "/images/spielzeug.png",
    header: "/images/spielzeug-hintergrund.jpg",
    description: "Puppenhäuser, Blechspielzeug, Lineol und vieles mehr. Nostalgie in jedem Stück.",
    pageContent: {
      heroDescription: "Altes Spielzeug kaufen wir mit spannender Expertise an.",
      sectionHeading: "Altes Spielzeug verkaufen",
      sectionText: "Egal ob vintage oder moderne Stücke: Wir prüfen Ihre Sammlung und bieten faire Preise.",
      focusHeading: "Wir suchen",
      focusText: "Besonders gefragt sind alte Spielzeugstücke aus Nachlässen.",
      contactTitle: "Möchten Sie altes Spielzeug verkaufen?",
      contactText: "Kontaktieren Sie uns für eine seriöse Einschätzung und ein faires Angebot.",
      cta: "Jetzt Kontakt aufnehmen"
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
