type Props = {
  display: string;
  pageTitle: string;
};

export default function Title({ display, pageTitle }: Props) {
  return (
    <h1
      className={`
        text-lg sm:text-2xl header-slide 
        ${display}
      `}
      style={{ color: "white" }}
    >
      {pageTitle}
    </h1>
  );
}
