import type { V2_MetaFunction, HeadersFunction, LoaderFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import { useLoaderData, Link } from "@remix-run/react";
import { getBlogList } from "~/libs/micro-cms/client.server";
import type { Blog } from "~/libs/micro-cms/client.server";
import { format } from "date-fns";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CANSHO" },
    { name: "description", content: "子上ねんその映画ブログ" },
    { property: "og:title", content: "CANSHO" },
    { property: "og:description", content: "子上ねんその映画ブログ" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://cansho.me" },
    {
      property: "og:site_name",
      content: "CANSHO | 普通に楽しんで普通に鑑賞する、子上ねんその映画ブログ",
    },
    {
      property: "og:image",
      content:
        "https://images.microcms-assets.io/assets/0857b272e30c471091c41b246557b29e/a6fbbfdd317e4645822b8101851c71ad/ogp.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@nenso_negami" },
    { name: "twitter:site", content: "@nenso_negami" },
  ];
};

const cacheHeader = "max-age=0, s-maxage=60, stale-while-revalidate=60";

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const cacheControl = loaderHeaders.get("Cache-Control") ?? cacheHeader;
  return {
    "Cache-Control": cacheControl,
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const draftKey = url.searchParams.get("draftKey");
  const isDraft = draftKey ? draftKey : undefined;

  const { contents } = await getBlogList({ draftKey: isDraft });
  const headers = draftKey ? { "Cache-Control": cacheHeader } : undefined;
  return json({ contents }, { headers });
};

export default function Index() {
  const data = useLoaderData<{ contents: Blog[] }>();
  const blogs = data.contents;

  return (
    <>
      <Header pageTitle="CANSHO" />
      <Main>
        <div className="mt-4 sm:mt-8 title-slide">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
            鑑賞：芸術作品を理解し、味わうこと（広辞苑）
          </h2>
          <p className="text-sm">ブログを書くまでが映画鑑賞です</p>

          <div className="pt-16 sm:pt-24 sm:max-w-2xl content-slide">
            <ul>
              {blogs.length >= 1 &&
                blogs.map(
                  (blog) =>
                    blog.publishedAt && (
                      <li
                        key={blog.id}
                        className="mb-8 group hover:text-white"
                      >
                        <Link
                          to={`/blogs/${blog.id}`}
                          className="flex flex-col gap-2 visited:text-font-darken-2"
                        >
                          <p className="transition duration-200 underline underline-offset-4 decoration-font-darken-2">
                            {blog.title}
                          </p>
                          <p className="text-font-darken-1 group-hover:text-white transition duration-200 col-span-1">
                            {format(new Date(blog.publishedAt), "yy MMM d")}
                          </p>
                        </Link>
                      </li>
                    ),
                )}
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
}
