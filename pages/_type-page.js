import Layout from "../components/Layout";
import ContentGrid from "../components/ContentGrid";

export default function TypePage({ works, type }) {
  return (
    <Layout>
      <h1 className="title">{type}</h1>
      <ContentGrid works={works} />
    </Layout>
  );
}

export async function getStaticPropsForType(typeKey, typeLabel) {
  const { getWorksByType } = await import("../lib/content");
  const works = getWorksByType(typeKey);
  return { props: { works, type: typeLabel } };
}
