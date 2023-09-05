import type { Blog, MovieData } from "~/libs/micro-cms/client.server";
import Main from "~/components/Layouts/Main";
import Content from "./components/materials/Content";
import BlogPageHeader from "./components/parts/Header";

type Props = {
  blog: Blog;
  movieDataList: MovieData[];
};

export default function BlogId({ blog, movieDataList }: Props) {
  const EYECATCH_SRC = blog.eyecatch.url;

  return (
    <>
      <BlogPageHeader
        pageTitle={blog.title}
        publishedAt={blog.publishedAt}
      />
      <Main>
        <header className="title-slide">
          <h3 className="font-bold text-center text-xs sm:text-sm mt-4 sm:mt-8 mb-8 sm:mb-16">
            {blog.summery}
          </h3>
          <img
            className="h-48 sm:h-96 w-full rounded-md object-cover"
            srcSet={`${EYECATCH_SRC}?w=320 320w, ${EYECATCH_SRC}?w=570 570w`}
            src={EYECATCH_SRC}
            alt=""
          />
        </header>
        <Content
          content={blog.content}
          movies={movieDataList}
        />
      </Main>
    </>
  );
}
