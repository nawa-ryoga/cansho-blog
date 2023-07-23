type Props = {
  children: React.ReactNode;
};

export default function H2({ children }: Props) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 mt-16 sm:mt-20 last:mb-0 first:mt-0">
      {children}
    </h2>
  );
}