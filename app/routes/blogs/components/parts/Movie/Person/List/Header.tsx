type Props = {
  children: string;
};

export default function PersonListHeader({ children }: Props) {
  return <h4 className="font-bold mb-2 sm:mb-4">{children}</h4>;
}
