import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Antik Blog – Wissen zu Antiquitäten, Pflege & Verkauf",
  description:
    "Der Saijers Antik Blog erklärt Antiquitäten, Vintage, Retro, Silberpflege, Postkarten, Dokumente und worauf Sie beim Verkauf alter Stücke achten sollten.",
  path: "/blog",
  image: "/images/buecher-hintergrund.jpg",
  keywords: [
    "Antik Blog",
    "Antiquitäten Wissen",
    "Vintage Retro Antik",
    "Antiquitäten verkaufen Tipps"
  ]
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: absoluteUrl("/")
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: absoluteUrl("/blog")
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" accent="Blog" backgroundImage="/images/buecher-hintergrund.jpg">
        Neuigkeiten, Einblicke und Wissenswertes rund um Antiquitäten, Trödel und Design.
      </PageHero>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container breadcrumbs-inner">
          <Link href="/">Startseite</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">Blog</span>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="blog-list">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
