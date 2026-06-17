import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function createAnchorId(value) {
  return value
    .toLowerCase()
    .replaceAll("ß", "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return { title: "Blogartikel – Saijers Antik" };
  }

  return createMetadata({
    title: `${post.seoTitle ?? post.title} – Saijers Antik`,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.headerImage,
    type: "article",
    keywords: post.keywords
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSections = post.sections
    ? post.sections.map((section) => ({
        ...section,
        id: createAnchorId(section.heading)
      }))
    : [];
  const tableOfContents = [
    post.takeaways ? { id: "das-wichtigste", label: "Das Wichtigste" } : null,
    ...articleSections.map((section) => ({
      id: section.id,
      label: section.heading
    })),
    post.faq ? { id: "haeufige-fragen", label: "Häufige Fragen" } : null
  ].filter(Boolean);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    image: absoluteUrl(post.headerImage),
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Saijers Antik",
      url: absoluteUrl("/")
    },
    datePublished: post.date
  };
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
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`)
      }
    ]
  };

  const faqJsonLd = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    : null;

  return (
    <>
      <PageHero title={post.title} accent="Blog" backgroundImage={post.headerImage}>
        {post.excerpt}
      </PageHero>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container breadcrumbs-inner">
          <Link href="/">Startseite</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <Link href="/blog">Blog</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">{post.title}</span>
        </div>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <section className="section article-section">
        <div className="container">
          <div className="article-layout">
            <article className="article-body panel">
              <div className="article-meta-row">
                <p className="blog-meta">
                  {post.author} • {post.date}
                </p>
                {post.readingTime ? <span>{post.readingTime}</span> : null}
              </div>

              {post.articleImage ? (
                <Image
                  className="article-image"
                  src={post.articleImage}
                  alt={post.title}
                  width={1100}
                  height={720}
                  sizes="(max-width: 980px) 100vw, 760px"
                  priority
                />
              ) : null}

              {post.intro ? <p className="article-intro">{post.intro}</p> : null}

              {post.takeaways ? (
                <aside className="article-takeaways" id="das-wichtigste">
                  <h2>Das Wichtigste auf einen Blick</h2>
                  <ul>
                    {post.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </aside>
              ) : null}

              {articleSections.length > 0 ? (
                articleSections.map((section) => (
                  <section className="article-content-section" id={section.id} key={section.heading}>
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                    {section.highlight ? <p className="article-highlight">{section.highlight}</p> : null}
                    {section.list ? (
                      <ul className="article-checklist">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))
              ) : (
                post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
              )}

              {post.faq ? (
                <section className="article-faq" id="haeufige-fragen">
                  <h2>Häufige Fragen</h2>
                  {post.faq.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </section>
              ) : null}
            </article>

            <aside className="article-sidebar">
              {tableOfContents.length > 0 ? (
                <nav className="panel article-toc-card" aria-label="Inhaltsverzeichnis">
                  <h2>Im Artikel</h2>
                  <ol>
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.label}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              <div className="panel article-cta-card">
                <h2>{post.cta?.title ?? "Sie möchten etwas verkaufen?"}</h2>
                <p>
                  {post.cta?.text ??
                    "Wir schätzen Antiquitäten, Schmuck, Fotos, Postkarten und Designstücke fair und transparent ein."}
                </p>
                <Link className="button" href={post.cta?.href ?? "/kontakt"}>
                  {post.cta?.label ?? "Kontakt aufnehmen"}
                </Link>
              </div>

              {relatedPosts.length > 0 ? (
                <div className="panel article-related-card">
                  <h2>Weitere Beiträge</h2>
                  {relatedPosts.map((item) => (
                    <Link href={`/blog/${item.slug}`} key={item.slug}>
                      <span>{item.date}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
