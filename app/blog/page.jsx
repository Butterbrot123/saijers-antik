import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";
import { createMetadata } from "@/lib/seo";

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

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" accent="Blog" backgroundImage="/images/buecher-hintergrund.jpg">
        Neuigkeiten, Einblicke und Wissenswertes rund um Antiquitäten, Trödel und Design.
      </PageHero>
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
