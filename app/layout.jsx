import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  createMetadata,
  localBusinessJsonLd,
  siteConfig,
  websiteJsonLd
} from "@/lib/seo";

export const metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/"
  }),
  metadataBase: new URL("https://saijersantik.de"),
  authors: [{ name: "Saijers Antik" }],
  creator: "Saijers Antik",
  publisher: "Saijers Antik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
