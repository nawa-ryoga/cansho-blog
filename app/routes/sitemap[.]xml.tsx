import { getBlogList } from "~/libs/micro-cms/client.server";

export const loader = async () => {
  const baseUrl = "https://cansho.me";
  const lastReleaseDate = new Date("2023-08-19");

  const { contents } = await getBlogList();
  const newestBlogPublishedAt = contents[0].publishedAt;
  const topPageLastModified = newestBlogPublishedAt
    ? new Date(newestBlogPublishedAt)
    : lastReleaseDate;

  const staticPaths = [
    {
      url: `${baseUrl}`,
      lastModified: topPageLastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastReleaseDate,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastReleaseDate,
    },
  ];

  const dynamicPaths = contents.map((blog) => {
    const lastModified = blog.updatedAt ? blog.updatedAt : blog.createdAt;
    return {
      url: `${baseUrl}/blogs/${blog.id}`,
      lastModified: new Date(lastModified),
    };
  });

  const allPaths = [...staticPaths, ...dynamicPaths].map((path) => {
    return `
      <url>
        <loc>${path.url}</loc>
        <lastmod>${path.lastModified}</lastmod>
      </url>
    `;
  });

  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths}
    </urlset>
  `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
