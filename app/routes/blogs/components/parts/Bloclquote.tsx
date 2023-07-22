type Props = {
  children: React.ReactNode;
};

export default function Blockquote({ children }: Props) {
  return (
    <blockquote className="text-xs md:text-base mb-10 p-4 sm:p-8 bg-background-darken-1 rounded-md">
      {children}
    </blockquote>
  );
}
