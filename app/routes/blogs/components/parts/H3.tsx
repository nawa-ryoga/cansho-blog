type Props = {
  children: React.ReactNode;
};

export default function H3({ children }: Props) {
  return <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-10">{children}</h3>;
}
