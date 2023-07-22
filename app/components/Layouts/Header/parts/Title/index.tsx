type Props = {
  display: string;
  isLoaded: boolean;
  pathname: string;
  pageTitle: string;
};

export default function Title({ display, isLoaded, pathname, pageTitle }: Props) {
  return (
    <h1
      className={`
        text-lg sm:text-2xl header-slide 
        ${pathname === "/" || pathname === "/about" ? "tracking-header" : ""}
        ${isLoaded ? "loaded" : "loading"}
        ${display}
      `}
      style={{ color: "white" }}
    >
      {pageTitle}
    </h1>
  );
}
