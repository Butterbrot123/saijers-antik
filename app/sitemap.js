import { blogPosts } from "@/lib/blogData";
import { localSeoPages } from "@/lib/localSeoData";
import { ankaufCategories } from "@/lib/siteData";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-17");

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/ankauf", changeFrequency: "weekly", priority: 0.9 },
  { path: "/antik-ankauf", changeFrequency: "weekly", priority: 0.9 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.85 },
  { path: "/versand", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dienstleistungen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/laden", changeFrequency: "monthly", priority: 0.75 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.65 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 }
];

function createSitemapEntry({ path, changeFrequency, priority }) {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority
  };
}

export default function sitemap() {
  const staticPages = staticRoutes.map(createSitemapEntry);

  const categoryPages = ankaufCategories.map((category) => ({
    url: absoluteUrl(`/ankauf/${category.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.82
  }));

  const localPages = localSeoPages.map((page) => ({
    url: absoluteUrl(`/antik-ankauf/${page.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.82
  }));

  const blogPages = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticPages, ...categoryPages, ...localPages, ...blogPages];
}
