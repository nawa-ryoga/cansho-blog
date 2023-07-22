import { useEffect, useState } from "react";
import { useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";

type Props = {
  pageTitle: string;
};

export default function Header({ pageTitle }: Props) {
  const matchs = useMatches();
  const { pathname } = matchs[1];

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
    <header
      className="font-zenKurenaido flex items-end"
      style={{ height: "var(--header-height)" }}
    >
      <div className="w-full p-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img
                src="/icon.svg"
                alt=""
                className="w-10 h-10 sm:w-20 sm:h-20"
              />
            </Link>
            <h1
              className={`
                text-lg sm:text-2xl header-slide 
                ${pathname === "/" || pathname === "/about" ? "tracking-header" : ""} 
                ${isLoaded ? "loaded" : "loading"}
              `}
              style={{ color: "white" }}
            >
              {pageTitle}
            </h1>
          </div>
          <div className="flex items-center">
            {/* TODO: 呼び出し側から流し込む */}
            {pathname === "/" && (
              <Link to={"/about"}>
                <p className="tracking-header">ABOUT</p>
              </Link>
            )}
            {pathname === "/about" && (
              <Link to={"/"}>
                <p className="tracking-header">TOP</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
