import Layout from "../../components/Layout";

export default function WorkPage({ work }) {
  if (!work) return <Layout><div className="subtle">No encontrado.</div></Layout>;

  return (
    <Layout>
      <h1 className="title" style={{marginBottom:8}}>{work.title}</h1>
      <div className="subtle" style={{marginBottom:16}}>
        {work.type} · {work.medium} {work.genres?.length ? `· ${work.genres.join(", ")}` : ""}
      </div>

      {Array.isArray(work.episodes) && work.episodes.length > 0 && (
        <div className="grid" style={{gap:24}}>
          {work.episodes.map((ep) => (
            <div key={ep.id}>
              <div style={{fontWeight:700, marginBottom:8}}>{ep.title}</div>
              {ep.youtubeId && (
                <div className="aspect-video card">
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                    title={ep.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const { getAllWorks } = await import("../../lib/content");
  const works = getAllWorks();
  return {
    paths: works.map((w) => ({ params: { slug: w.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { getWorkBySlug } = await import("../../lib/content");
  const work = getWorkBySlug(params.slug);
  return { props: { work } };
}
