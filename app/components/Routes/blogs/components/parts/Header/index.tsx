import { Link } from "@remix-run/react";
import HeaderContainer from "~/components/Layouts/Header/parts/Container";
import { format } from "date-fns";

type Props = {
  pageTitle: string;
  publishedAt?: string;
};

export default function Header({ pageTitle, publishedAt }: Props) {
  const published = publishedAt
    ? format(new Date(publishedAt), "MMM d")
    : format(new Date(), "MMM d");

  return (
    <HeaderContainer
      logoMark={
        <Link
          to={"/"}
          className="aspect-square sm:w-[48px] sm:h-[48px]"
        >
          <img
            src="/icon.svg"
            alt=""
            className="w-6 h-6 sm:w-12 sm:h-12 min-w-full min-h-full"
          />
        </Link>
      }
      pageTitle={pageTitle}
      blogPublished={published}
    />
  );
}
