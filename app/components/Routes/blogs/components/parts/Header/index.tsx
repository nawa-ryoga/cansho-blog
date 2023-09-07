import HeaderContainer from "~/components/Layouts/Header/parts/Container";
import { format } from "date-fns";
import Logo from "./Logo";

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
      logoMark={<Logo />}
      pageTitle={pageTitle}
      blogPublished={published}
    />
  );
}
