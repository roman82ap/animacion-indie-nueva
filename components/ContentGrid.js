import Link from "next/link";

function ytThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default function ContentGrid({ works = [] }) {
  if (!works || works.length === 0) {
    return <div className="subtle">Sin resultados por ahora.</div>;
  }

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
    >
      {works.map((w) => {
        const ep = Array.isArray(w.episodes) && w.episodes[0];
        const thumb = ep?.youtubeId ? ytThumb(ep.youtubeId) : "/placeholder.png";
        return (
          <Link href={`/obra/${w.slug}`} key={w.slug} className="card">
            <div className="aspect-video">
              <img src={thumb} alt={w.title || w.slug} />
            </div>
            <div style={{padding:12}}>
              <div className="subtle">{w.type} · {w.medium}</div>
              <div style={{fontWeight:700, marginTop:4}}>{w.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
