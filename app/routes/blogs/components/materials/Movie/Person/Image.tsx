type Props = {
  image_path: string;
};

export default function PersonImage({ image_path }: Props) {
  return (
    <div
      className="w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover mb-2 sm:mb-4"
      style={{ backgroundImage: `url(${image_path})` }}
    ></div>
  );
}
