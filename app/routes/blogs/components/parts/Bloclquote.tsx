type Props = {
  children: React.ReactNode;
};

export default function Blockquote({ children }: Props) {
  return <blockquote className="">{children}</blockquote>;
}
