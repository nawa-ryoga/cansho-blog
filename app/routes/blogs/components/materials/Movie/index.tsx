import format from "date-fns/format";
import type { MovieData } from "~/libs/micro-cms/client.server";
import PersonImage from "./Person/Image";
import PersonName from "../../parts/Movie/Person/Name";
import PersonRole from "../../parts/Movie/Person/Role";
import PersonContainer from "../../parts/Movie/Person/Container";
import PersonListHeader from "../../parts/Movie/Person/List/Header";
import PersonListContainer from "../../parts/Movie/Person/List/Container";
import PersonListGrid from "../../parts/Movie/Person/List/Grid";

type Props = {
  movie: MovieData;
};

export default function Movie({ movie }: Props) {
  return (
    <figure
      className="rounded-md mt-12 sm:mt-16 px-6 sm:px-12 pb-4 sm:pb-6 pt-6 sm:pt-8"
      style={{
        background: `
          linear-gradient(rgba(3, 8, 28, 0.8), rgba(3, 8, 28, 0.8)),
          url(${movie.backdrop_path}) 
          center / cover
        `,
      }}
    >
      <figcaption className="font-bold text-center text-lg sm:text-xl mb-1 sm:mb-2">
        {movie.title}
      </figcaption>
      <figcaption className="text-center text-xs sm:text-sm mb-3 sm:mb-6">
        公開日：{format(new Date(movie.release_date), "yyyy年M月d日")}
      </figcaption>
      <blockquote
        className="w-full h-auto min-h-[180px] md:min-h-[240px] rounded-md bg-cover bg-center bg-no-repeat mb-3 sm:mb-6"
        style={{ backgroundImage: `url(${movie.backdrop_path})` }}
      ></blockquote>
      <figcaption className="text-font-darken-1 font-bold text-center text-xs sm:text-sm mb-4 sm:mb-8">
        <i>{movie.tag_line}</i>
      </figcaption>
      <span className="block max-w-full sm:max-w-70% mb-6 sm:mb-12">
        <figcaption className="text-xs sm:text-sm leading-relaxed text-justify break-all">
          {movie.overview}
        </figcaption>
      </span>
      <details className="w-full pb-4 block px-1 max-w-full sm:max-w-70%">
        <summary className="font-bold text-xs sm:text-base mb-4 sm:mb-8">
          キャスト/クレジット
        </summary>
        {/* 監督 */}
        <PersonListContainer>
          <PersonListHeader>監督</PersonListHeader>
          <PersonListGrid>
            {movie.director.map((d, i) => {
              return (
                <PersonContainer key={i}>
                  <PersonImage image_path={d.profile_path} />
                  <PersonName>{d.name}</PersonName>
                </PersonContainer>
              );
            })}
          </PersonListGrid>
        </PersonListContainer>

        {/* 主なキャスト */}
        <PersonListContainer>
          <PersonListHeader>主なキャスト</PersonListHeader>
          <PersonListGrid>
            {movie.casts.map((c, i) => {
              return (
                <PersonContainer key={i}>
                  <PersonImage image_path={c.person.profile_path} />
                  <PersonName>{c.person.name}</PersonName>
                  <PersonRole>{c.role}</PersonRole>
                </PersonContainer>
              );
            })}
          </PersonListGrid>
        </PersonListContainer>

        {/* 主なスタッフ */}
        <PersonListContainer>
          <PersonListHeader>主なスタッフ</PersonListHeader>
          <PersonListGrid>
            {movie.staffs.map((s, i) => {
              return (
                <PersonContainer key={i}>
                  <PersonImage image_path={s.person.profile_path} />
                  <PersonName>{s.person.name}</PersonName>
                  <PersonRole>{s.role}</PersonRole>
                </PersonContainer>
              );
            })}
          </PersonListGrid>
        </PersonListContainer>
      </details>
    </figure>
  );
}
