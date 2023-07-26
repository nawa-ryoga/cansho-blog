type Props = {
  children: React.ReactNode;
};

export default function PersonContainer({ children }: Props) {
  return (
    <div className="px-1 py-2">
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}
