import { Helmet } from "react-helmet-async";

type SeoProps = { title: string; description: string; path?: string; schema?: Record<string, unknown> };
const origin = "https://future-x.co.in";

export default function Seo({ title, description, path = "/", schema }: SeoProps) {
  const url = `${origin}${path}`;
  return <Helmet>
    <html lang="en-IN" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href={url} />
    <meta property="og:site_name" content="Future-X" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`${origin}/og-image.png`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${origin}/og-image.png`} />
    {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>;
}
