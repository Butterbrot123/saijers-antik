import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, compact = false }) {
  return (
    <article className={`blog-card panel ${compact ? "blog-card-compact" : ""}`}>
      <Link className="blog-card-media" href={`/blog/${post.slug}`} aria-label={post.title}>
        <Image
          src={post.headerImage}
          alt={post.title}
          width={900}
          height={560}
          sizes={compact ? "(max-width: 980px) 100vw, 33vw" : "(max-width: 980px) 100vw, 42vw"}
        />
      </Link>
      <div className="blog-card-body">
        <p className="blog-meta">Blog • {post.author} • {post.date}</p>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="read-more">
          Weiterlesen
        </Link>
      </div>
    </article>
  );
}
