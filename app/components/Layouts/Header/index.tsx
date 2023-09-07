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
      {/* <header
        className="font-zenKurenaido flex items-end"
        style={{ minHeight: "var(--header-height)", height: "auto" }}
      >
        <div className="w-full px-4">
          <div className="mx-auto max-w-3xl flex items-center justify-between">
            <div className="flex items-center gap-6 header-slide">
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
              <Title
                display={`block`}
                pageTitle={pageTitle}
              />
            </div>
            {internalLink && (
              <div className="flex items-center content-slide">
                <Link to={internalLink.to}>
                  <p className="tracking-header">{internalLink.text}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header> */}
    </>
  );
}
