import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogDetail, getMovieData } from "~/libs/micro-cms/client.server";
import type { Blog, MovieData } from "~/libs/micro-cms/client.server";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";
import { domPurify } from "~/libs/sanitize/client.server";
import Content from "./blogs/components/materials/Content";

type LoaderData = {
  blog: Blog;
  movieDataList: MovieData[];
};

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.blogId) {
    throw new Error("ブログIDが入力されていません。");
  }
  const blog = await getBlogDetail(params.blogId);

  const movieDataList = blog.movies
    ? await Promise.all(
        blog.movies.map(async (movie) => {
          const res = await getMovieData(movie.movie_id);
          return res;
        }),
      )
    : undefined;
  return {
    blog: {
      ...blog,
      content: domPurify().sanitize(blog.content, {
        USE_PROFILES: { html: true },
      }),
    },
    movieDataList,
  };
};

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
      content:
        "https://images.microcms-assets.io/assets/0857b272e30c471091c41b246557b29e/a6fbbfdd317e4645822b8101851c71ad/ogp.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@nenso_negami" },
    { name: "twitter:site", content: "@nenso_negami" },
  ];
};

export default function BlogId() {
  const { blog, movieDataList } = useLoaderData<LoaderData>();
  return (
    <>
      <Header pageTitle={blog.title} />
      <Main>
        <Content
          content={blog.content}
          movies={movieDataList}
        />
      </Main>
    </>
  );
}
