import { useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Title from "~/components/Layouts/Header/parts/Title";
import { format } from "date-fns";

type Props = {
  pageTitle: string;
  publishedAt?: string;
};

export default function Header({ pageTitle, publishedAt }: Props) {
  const published = publishedAt
    ? format(new Date(publishedAt), "MMM d")
    : format(new Date(), "MMM d");

  const matchs = useMatches();
  const { pathname } = matchs[1];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <header
        className="font-zenKurenaido flex items-end pt-[104px] sm:pt-[100px]"
        style={{ minHeight: "var(--header-height)" }}
      >
        <div className="w-full px-4">
          <div className="mx-auto max-w-3xl ">
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <Link
                  to={"/"}
                  className="aspect-square sm:w-[48px] sm:h-[48px]"
                >
                  <img
                    src="/icon.svg"
                    alt=""
                    className="w-6 h-6 sm:w-12 sm:h-12 min-w-full min-h-full sm:min-w-full sm:min-h-full"
                  />
                </Link>
                <Title
                  display={`hidden sm:block`}
                  isLoaded={isLoaded}
                  pathname={pathname}
                  pageTitle={pageTitle}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-6 sm:w-12"></div>
              <p
                className={`hidden sm:block tracking-widest header-second-slide text-lg ${
                  isLoaded ? "loaded" : "loading"
                }`}
              >
                {published}
              </p>
            </div>
          </div>
          <Title
            display={`block sm:hidden`}
            isLoaded={isLoaded}
            pathname={pathname}
            pageTitle={pageTitle}
          />
          <p className={`block sm:hidden header-second-slide ${isLoaded ? "loaded" : "loading"}`}>
            {published}
          </p>
        </div>
      </header>
    </>
  );
}
