import fs from "fs-extra";
import { getMovieList } from "../libs/micro-cms/client.server";

(async function () {
  const { contents } = await getMovieList();
  if (!contents) return;

  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/movies.json", contents);
})();
