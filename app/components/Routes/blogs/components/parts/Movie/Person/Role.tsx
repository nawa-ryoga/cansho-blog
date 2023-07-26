type Props = {
  children: string;
};

export default function PersonRole({ children }: Props) {
  return <p className="font-bold text-justify break-all px-2 mb-2 sm:mb-4">{children}</p>;
}
