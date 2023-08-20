import type { V2_MetaFunction, HeadersFunction, LoaderFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import { useLoaderData } from "@remix-run/react";
import { getBlogDetail, getMovieData } from "~/libs/micro-cms/client.server";
import type { Blog, MovieData } from "~/libs/micro-cms/client.server";
import { domPurify } from "~/libs/sanitize/client.server";
import BlogId from "~/components/Routes/blogs";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [];
  }

  return [
    { title: `${data.blog.title} | CANSHO` },
    { name: "description", content: `${data.blog.summery}` },
    { property: "og:title", content: `${data.blog.title} | CANSHO` },
    { property: "og:description", content: `${data.blog.summery}` },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://cansho.me/blogs/${data.blog.id}` },
    {
      property: "og:site_name",
      content: "CANSHO | 普通に楽しんで普通に鑑賞する、子上ねんその映画ブログ",
    },
    {
      property: "og:image",
      content: `${data.blog.eyecatch.url}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@nenso_negami" },
    { name: "twitter:site", content: "@nenso_negami" },
  ];
};

export const loader: LoaderFunction = async ({ params, request }) => {
  if (!params.blogId) {
    throw new Error("ブログIDが入力されていません。");
  }

  const url = new URL(request.url);
  const draftKey = url.searchParams.get("draftKey");
  const isDraft = draftKey ? draftKey : undefined;

  const headers = draftKey ? { "Cache-Control": cacheHeader } : undefined;
  const blog = await getBlogDetail(params.blogId, { draftKey: isDraft });

  const movieDataList = blog.movies
    ? await Promise.all(
        blog.movies.map(async (movie) => {
          const res = await getMovieData(movie.movie_id);
          return res;
        }),
      )
    : undefined;
  return json(
    {
      blog: {
        ...blog,
        content: domPurify().sanitize(blog.content, {
          USE_PROFILES: { html: true },
        }),
      },
      movieDataList,
    },
    { headers },
  );
};

const cacheHeader = "max-age=0, s-maxage=60, stale-while-revalidate=60";

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const cacheControl = loaderHeaders.get("Cache-Control") ?? cacheHeader;
  return {
    "Cache-Control": cacheControl,
  };
};

export default function BlogDetail() {
  const { blog, movieDataList } = useLoaderData<{ blog: Blog; movieDataList: MovieData[] }>();
  return (
    <BlogId
      blog={blog}
      movieDataList={movieDataList}
    />
  );
}
