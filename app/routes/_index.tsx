import type { V2_MetaFunction } from "@remix-run/node";
import type { LoaderFunction, HeadersFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { getBlogList } from "~/libs/micro-cms/client.server";
import type { Blog } from "~/libs/micro-cms/client.server";
import { format } from "date-fns";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "CANSHO" },
    { name: "description", content: "子上ねんその映画ブログ。" },
    { name: "og:title", content: "CANSHO" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://cansho.me" },
    {
      name: "og:site_name",
      content: "CANSHO 普通に楽しんで普通に鑑賞する、子上ねんその映画ブログ",
    },
    {
      name: "og:image",
      content: "/ogp.ong",
    },
    { name: "og:twitter-card", content: "summary_large_image" },
    { name: "og:twitter-creator", content: "@nenso_negami" },
    { name: "og:twitter-site", content: "@nenso_negami" },
  ];
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=0, s-maxage=300, stale-while-revalidate=300",
  };
};

export const loader: LoaderFunction = async () => {
  const { contents } = await getBlogList();
  return contents;
};

export default function Index() {
  const blogs = useLoaderData<Blog[]>();

  return (
    <>
      <Header pageTitle="CANSHO" />
      <Main>
        <div className="mt-4 sm:mt-8 title-slide">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
            鑑賞：芸術作品を理解し、味わうこと（広辞苑）
          </h2>
          <p className="text-sm">ブログを書くまでが映画鑑賞です</p>

          <div className="mt-10 sm:mt-14 content-slide">
            <ul>
              {blogs.length >= 1 &&
                blogs.map(
                  (blog) =>
                    blog.publishedAt && (
                      <li className=" mb-4 group hover:text-white">
                        <Link
                          to={`/blogs/${blog.id}`}
                          className="flex"
                        >
                          <p className="mr-2 transition duration-200">{blog.title}</p>
                          <p className="text-font-darken-1 group-hover:text-white transition duration-200">
                            {format(new Date(blog.publishedAt), "MMM d")}
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
