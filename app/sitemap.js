import { blogPosts } from "@/lib/blogData";
import { localSeoPages } from "@/lib/localSeoData";
import { ankaufCategories } from "@/lib/siteData";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/ueber-uns",
  "/dienstleistungen",
  "/ankauf",
  "/antik-ankauf",
  "/versand",
  "/laden",
  "/kontakt",
  "/blog",
  "/faq",
  "/impressum",
  "/datenschutz"
];

export default function sitemap() {
  const now = new Date();
  const staticPages = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));

  const categoryPages = ankaufCategories.map((category) => ({
    url: absoluteUrl(`/ankauf/${category.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const localPages = localSeoPages.map((page) => ({
    url: absoluteUrl(`/antik-ankauf/${page.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  const blogPages = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.55
  }));

  return [...staticPages, ...categoryPages, ...localPages, ...blogPages];
}
