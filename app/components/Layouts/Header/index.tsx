import { Link } from "@remix-run/react";
import HeaderContainer from "./parts/Container";

type Props = {
  pageTitle: string;
  internalLink?: {
    to: "/about" | "/";
    text: "ABOUT" | "TOP";
  };
};

export default function Header({ pageTitle, internalLink }: Props) {
  return (
    <>
      <HeaderContainer
        logoMark={
          <Link
            to={"/"}
            className="aspect-square"
          >
            <img
              src="/icon.svg"
              alt=""
              className="w-6 h-6 sm:w-12 sm:h-12"
            />
          </Link>
        }
        internalLink={internalLink}
        pageTitle={pageTitle}
      />
    </>
  );
}
