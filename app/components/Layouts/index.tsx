type Props = {
  children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  const now = new Date();
  return (
    <>
      <header
        className="font-zenKurenaido"
        style={{ height: "var(--header-height)" }}
      >
        <div className="max-w-6xl mx-auto p-4 flex items-center">
          <img
            src="/icon.svg"
            alt=""
            className="w-20 h-20 sm:w-40 sm:h-40"
          />
          <h1
            className="text-lg sm:text-2xl tracking-header"
            style={{ color: "white" }}
          >
            CANSHO
          </h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
      <footer className="font-zenKurenaido text-center p-8 text-font-darken-1">
        {`${now.getFullYear()} negami nenso`}
      </footer>
    </>
  );
}
