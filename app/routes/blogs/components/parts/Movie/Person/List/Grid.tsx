type Props = {
  children: React.ReactNode;
};

export default function PersonListGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 grid-rows-[1fr] md:mb-6">{children}</div>
  );
}
