export const siteConfig = {
  name: "Saijers Antik",
  legalName: "Saijers Antik / Antikladen Kappeln",
  url: "https://www.saijersantik.de",
  title: "Antik Ankauf in Kappeln – Saijers Antik",
  description:
    "Saijers Antik in Kappeln bewertet und kauft Antiquitäten, Schmuck, Uhren, Dokumente, Postkarten, Designobjekte, Sammlungen und Nachlässe.",
  email: "inessayers@googlemail.com",
  phone: "+491728215973",
  googleMapsUrl:
    "https://www.google.de/maps/place/Antikladen+Kappeln/@54.6618262,9.9281187,17z/data=!3m1!4b1!4m6!3m5!1s0x47b319fb8ee9dfe5:0xdb2ba7e4ef6bfba4!8m2!3d54.6618231!4d9.9306936!16s%2Fg%2F11xfrq_71p?entry=ttu",
  streetAddress: "Querstraße 4",
  postalCode: "24376",
  locality: "Kappeln",
  region: "Schleswig-Holstein",
  country: "DE",
  defaultImage: "/images/starthintergrund.jpg"
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.defaultImage,
  type = "website",
  keywords
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "de_DE",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AntiqueStore"],
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.defaultImage),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  hasMap: siteConfig.googleMapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    postalCode: siteConfig.postalCode,
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.6618231,
    longitude: 9.9306936
  },
  areaServed: [
    "Kappeln",
    "Schleswig-Holstein",
    "Kiel",
    "Flensburg",
    "Schleswig",
    "Eckernförde",
    "Hamburg",
    "Husum",
    "Nordfriesland",
    "Ostseeküste",
    "Deutschland"
  ],
  priceRange: "$$",
  knowsAbout: [
    "Antik Ankauf",
    "Antiquitäten",
    "Nachlässe",
    "Schmuck",
    "Uhren",
    "Postkarten",
    "Historische Dokumente",
    "Dänisches Design"
  ],
  sameAs: [siteConfig.url, siteConfig.googleMapsUrl]
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "de-DE",
  publisher: {
    "@id": `${siteConfig.url}/#localbusiness`
  }
};
