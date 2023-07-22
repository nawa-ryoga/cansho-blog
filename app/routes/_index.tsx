import type { V2_MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogList } from "~/libs/micro-cms/client.server";
import type { Blog } from "~/libs/micro-cms/client.server";
import { format } from "date-fns";

export const meta: V2_MetaFunction = () => {
  return [{ title: "CANSHO" }, { name: "description", content: "子上ねんその映画ブログ。" }];
};

export const loader: LoaderFunction = async () => {
  const { contents } = await getBlogList();
  return contents;
};

export default function Index() {
  const blogs = useLoaderData<Blog[]>();

  return (
    <div className="mt-4 sm:mt-8">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
        鑑賞：芸術作品を理解し、味わうこと（広辞苑）
      </h2>
      <p className="text-sm">ブログを書くまでが映画鑑賞です</p>

      <div className="mt-10 sm:mt-14">
        <ul>
          {blogs.length >= 1 &&
            blogs.map(
              (blog) =>
                blog.publishedAt && (
                  <li className="flex mb-4 group hover:text-white">
                    <p className="mr-2 transition duration-200">{blog.title}</p>
                    <p className="text-font-darken-1 group-hover:text-white transition duration-200">
                      {format(new Date(blog.publishedAt), "MMM d")}
                    </p>
                  </li>
                ),
            )}
        </ul>
      </div>
    </div>
  );
}
