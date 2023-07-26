type Props = {
  children: string;
};

export default function PersonName({ children }: Props) {
  return <p className="font-bold text-justify break-all mb-2 sm:mb-4">{children}</p>;
}
