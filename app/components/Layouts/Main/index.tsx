type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return <main className="max-w-3xl mx-auto p-4">{children}</main>;
}
