import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type Movie = {
  fieldId: string;
  movie_id: string;
  title: string;
};

export type Blog = {
  title: string;
  summary: string;
  content: string;
  eyecatch: MicroCMSImage;
  movies?: Movie[];
} & MicroCMSContentId &
  MicroCMSDate;

export type MoviePerson = {
  name: string;
  type: ["クリエイター" | "キャスト"];
  profile_path: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type MovieData = {
  title: string;
  tag_line: string;
  tmdb_url: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  director: MoviePerson[];
  staffs: {
    fieldId: string;
    person: MoviePerson;
    role: string;
  }[];
  casts: {
    fieldId: string;
    person: MoviePerson;
    role: string;
  }[];
} & MicroCMSContentId &
  MicroCMSDate;

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("サービスドメインが設定されていません。");
}

if (!process.env.API_KEY) {
  throw new Error("APIキーが設定されていません。");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
    })
    .catch(() => {
      throw new Error("データが取得できませんでした。")
    });

  return listData;
};
