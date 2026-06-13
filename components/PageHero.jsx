export default function PageHero({
  title,
  accent,
  children,
  actions,
  className = "",
  backgroundImage
}) {
  const parts = accent ? title.split(accent) : [title];
  const rootClassName = ["page-hero", className].filter(Boolean).join(" ");
  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`
      }
    : undefined;

  return (
    <section className={rootClassName} style={style}>
      <div className="container">
        <h1>
          {accent && parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="accent">{accent}</span>
              {parts.slice(1).join(accent)}
            </>
          ) : (
            title
          )}
        </h1>
        {children ? <p>{children}</p> : null}
        {actions ? <div className="page-hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
