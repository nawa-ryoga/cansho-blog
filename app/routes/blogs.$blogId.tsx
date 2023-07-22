import type { LoaderArgs } from "@remix-run/node";
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

export default function BlogId() {
  const { blog, movieDataList } = useLoaderData<LoaderData>();
  return (
    <>
      <Header pageTitle={blog.title} />
      <Main>
        {/* 映画情報は aside でラップする */}
        <Content
          content={blog.content}
          movies={movieDataList}
        />
      </Main>
    </>
  );
}
