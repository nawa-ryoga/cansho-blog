type Props = {
  children: React.ReactNode;
};

export default function ImageFigure({ children }: Props) {
  return <figure className="flex items-center mb-10">{children}</figure>;
}
