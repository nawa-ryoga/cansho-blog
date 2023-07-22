type Props = {
  children: React.ReactNode;
};

export default function P({ children }: Props) {
  return <p className="mb-5 md:sm-6 text-justify leading-5 sm:leading-6">{children}</p>;
}
