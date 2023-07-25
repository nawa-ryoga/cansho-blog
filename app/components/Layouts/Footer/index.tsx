import { Link } from "@remix-run/react";

export default function Footer() {
  const now = new Date();
  return (
    <footer className="font-zenKurenaido text-center p-8 sm:p-16 text-font-darken-1 flex justify-center flex-col gap-2">
      <p>{`${now.getFullYear()} negami nenso`}</p>
      <span className="flex gap-4 justify-center text-xs">
        <Link to="/about">当ブログについて</Link>
        <Link to="/privacy">プライバシーポリシー</Link>
      </span>
    </footer>
  );
}
