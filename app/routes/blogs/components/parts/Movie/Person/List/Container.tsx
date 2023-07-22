type Props = {
  children: React.ReactNode;
};

export default function PersonListContainer({ children }: Props) {
  return <div className="text-[2xs] md:text-xs leading-[130%] mb-4 sm:mb-8">{children}</div>;
}
