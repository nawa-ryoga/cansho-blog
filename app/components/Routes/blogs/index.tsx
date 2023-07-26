import type { Blog, MovieData } from "~/libs/micro-cms/client.server";
import Main from "~/components/Layouts/Main";
import Content from "./components/materials/Content";
import BlogPageHeader from "./components/parts/Header";

type Props = {
  blog: Blog;
  movieDataList: MovieData[];
};

export default function BlogId({ blog, movieDataList }: Props) {
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
          <div
            className={"h-48 sm:h-96 rounded-md"}
            style={{
              background: `linear-gradient(rgba(var(--color-overlay-rgb),0.5), rgba(var(--color-overlay-rgb),0.5)), url(${blog.eyecatch.url}) center / cover`,
            }}
          ></div>
        </header>
        <Content
          content={blog.content}
          movies={movieDataList}
        />
      </Main>
    </>
  );
}
