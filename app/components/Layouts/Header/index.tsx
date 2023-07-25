import { useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Title from "./parts/Title";

type Props = {
  pageTitle: string;
};

export default function Header({ pageTitle }: Props) {
  const matchs = useMatches();
  const { pathname, id } = matchs[1];

  const [isLoaded, setIsLoaded] = useState(false);
  const [nowPage, setNowPage] = useState("");

  const toggleLoadedStatus = () => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 200);
  };

  if (nowPage !== pathname) {
    setNowPage(pathname);
    toggleLoadedStatus();
  }

  useEffect(() => {
    toggleLoadedStatus();
    setNowPage(pathname);
  }, []);

  return (
    <>
      <header
        className="font-zenKurenaido flex items-end"
        style={{ minHeight: "var(--header-height)", height: "auto" }}
      >
        <div className="w-full px-4">
          <div>
            <div className="mx-auto max-w-3xl flex items-center justify-between">
              <div className="flex items-center gap-6">
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
                  isLoaded={isLoaded}
                  pathname={pathname}
                  pageTitle={pageTitle}
                />
              </div>
              <div className="flex items-center content-slide">
                {/* TODO: 呼び出し側から流し込む */}
                {pathname === "/" && (
                  <Link to={"/about"}>
                    <p className="tracking-header">ABOUT</p>
                  </Link>
                )}
                {(pathname === "/about" || pathname === "/privacy") && (
                  <Link to={"/"}>
                    <p className="tracking-header">TOP</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
