import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogDetail } from "~/libs/micro-cms/client.server";
import type { Blog } from "~/libs/micro-cms/client.server";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";
import { domPurify } from "~/libs/sanitize/client.server";
import parse from "html-react-parser";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.blogId) {
    throw new Error("ブログIDが入力されていません。");
  }
  const blog = await getBlogDetail(params.blogId);
  return {
    ...blog,
    content: domPurify().sanitize(blog.content, {
      USE_PROFILES: { html: true },
    }),
  };
};

export default function BlogDetail() {
  const blog = useLoaderData<Blog>();
  return (
    <>
      <Header pageTitle={blog.title} />
      <Main>
        {/* 映画情報は aside でラップする */}
        <article>{parse(blog.content)}</article>
      </Main>
    </>
  );
}
