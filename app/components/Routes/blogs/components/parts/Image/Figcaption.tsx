type Props = {
  children: React.ReactNode;
};

export default function ImageFigcaption({ children }: Props) {
  return (
    <figcaption className="text-xs max-w-580px p-2 leading-5 text-justify break-all">
      {children}
    </figcaption>
  );
}
