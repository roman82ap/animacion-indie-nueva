import Layout from "../components/Layout";
import ContentGrid from "../components/ContentGrid";
import { getAllWorks } from "../lib/content";

export default function Home({ featured = [] }) {
  const hero = featured[0];

  return (
    <Layout>
      {hero ? (
        <section className="hero">
          <div className="card">
            <div className="aspect-video">
              {hero.episodes?.[0]?.youtubeId ? (
                <img
                  src={`https://i.ytimg.com/vi/${hero.episodes[0].youtubeId}/hqdefault.jpg`}
                  alt={hero.title}
                />
              ) : null}
            </div>
            <div style={{padding:16}}>
              <span className="badge">{hero.type} · {hero.medium}</span>
              <h1 className="title" style={{marginTop:8}}>{hero.title}</h1>
              <p className="subtle">{hero.description}</p>
            </div>
          </div>

          <div>
            <h2 className="title" style={{marginTop:0}}>Destacados</h2>
            <ContentGrid works={featured.slice(0, 4)} />
          </div>
        </section>
      ) : (
        <div className="subtle">Aún no hay destacados.</div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const all = getAllWorks();
  return { props: { featured: all.slice(0, 6) } };
}
