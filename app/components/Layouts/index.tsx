import { useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";

type Props = {
  children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  const now = new Date();
  const matchs = useMatches();
  const { pathname } = matchs[1];

  const headingTitle = () => {
    switch (pathname) {
      case "/":
        return "CANSHO";
      case "/about":
        return "ABOUT";
    }
  };

  return (
    <>
      <header
        className="font-zenKurenaido"
        style={{ height: "var(--header-height)" }}
      >
        <div className="max-w-6xl mx-auto p-4 flex items-center content-between">
          <div className="flex items-center w-full gap-2">
            <Link to={"/"}>
              <img
                src="/icon.svg"
                alt=""
                className="w-10 h-10 sm:w-20 sm:h-20"
              />
            </Link>
            <h1
              className="text-lg sm:text-2xl header-slide tracking-header"
              style={{ color: "white" }}
            >
              {headingTitle()}
            </h1>
          </div>
          <div className="flex items-center">
            {pathname !== "/about" && (
              <Link to={"/about"}>
                <p className="tracking-header">ABOUT</p>
              </Link>
            )}
            {pathname !== "/" && (
              <Link to={"/"}>
                <p className="tracking-header">TOP</p>
              </Link>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
      <footer className="font-zenKurenaido text-center p-8 text-font-darken-1">
        {`${now.getFullYear()} negami nenso`}
      </footer>
    </>
  );
}
