import fs from "fs-extra";
import { getBlogList } from "../libs/micro-cms/client.server";
import { domPurify } from "../libs/sanitize/client.server";

(async function () {
  const { contents } = await getBlogList({ draftKey: undefined });
  if (!contents) return;

  const blogs = contents.map((blog) => {
    return {
      ...blog,
      content: domPurify().sanitize(blog.content, {
        USE_PROFILES: { html: true },
      }),
    };
  });

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/blogs.json", blogs);
})();
