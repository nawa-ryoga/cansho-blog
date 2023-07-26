type Props = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: Props) {
  return (
    <img
      className="flex items-center mb-10"
      srcSet={`${src}?w=320 320w, ${src}?w=670 670w`}
      src={src}
      alt={alt}
      width={"100%"}
      height={"auto"}
    />
  );
}
