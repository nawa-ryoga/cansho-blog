type Props = {
  children: React.ReactNode;
};

export default function Blockquote({ children }: Props) {
  return (
    <blockquote className="text-xs md:text-base my-8 sm:my-10 p-4 sm:p-8 bg-background-darken-2 rounded-md text-font-darken-1">
      {children}
    </blockquote>
  );
}
