type Props = {
  children: React.ReactNode
  href: string;
};

export default function ExternalLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener nofollow noreferrer"
      className="text-font-darken-1"
    >
      {children}
    </a>
  );
}
