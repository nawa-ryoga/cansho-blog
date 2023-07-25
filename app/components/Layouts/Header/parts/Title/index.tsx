type Props = {
  display: string;
  isLoaded: boolean;
  pathname: string;
  pageTitle: string;
};

export default function Title({ display, isLoaded, pathname, pageTitle }: Props) {
  const isBlogPage = /\/blogs/;

  return (
    <h1
      className={`
        text-lg sm:text-2xl header-slide 
        ${pathname === "/" || pathname === "/about" ? "tracking-header" : ""}
        ${isLoaded ? "loaded" : "loading"}
        ${display}
        ${isBlogPage.test(pathname) ? "sm:pt-[0.4rem]" : ""}
        ${isBlogPage.test(pathname) ? "mb-[0.2rem] sm:mb-[0.4rem]" : ""}
      `}
      style={{ color: "white" }}
    >
      {pageTitle}
    </h1>
  );
}
