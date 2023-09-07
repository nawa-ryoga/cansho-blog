import { Link } from "@remix-run/react";
import Title from "../Title";

type Props = {
  logoMark: React.ReactNode;
  internalLink?: {
    to: "/about" | "/";
    text: "ABOUT" | "TOP";
  };
  pageTitle: string;
  blogPublished?: string;
};

export default function HeaderContainer({
  logoMark,
  internalLink,
  pageTitle,
  blogPublished,
}: Props) {
  return (
    <header
      className="font-zenKurenaido flex items-end pt-[104px] sm:pt-[100px]"
      style={{ minHeight: "var(--header-height)", height: "auto" }}
    >
      <div className="w-full px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-3xl flex items-center justify-between">
            <div className="flex justify-between gap-6 header-slide">
              {logoMark}
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
          {blogPublished && (
            <div className="flex items-center gap-6">
              <div className="h-6 sm:w-12"></div>
              <p className={`hidden sm:block tracking-widest header-second-slide text-lg`}>
                {blogPublished}
              </p>
            </div>
          )}
        </div>
      </div>
      {blogPublished && (
        <div className="flex items-center gap-6">
          <Title
            display={`block sm:hidden`}
            pageTitle={pageTitle}
          />
          <p className={`block sm:hidden header-second-slide`}>{blogPublished}</p>
        </div>
      )}
    </header>
  );
}
