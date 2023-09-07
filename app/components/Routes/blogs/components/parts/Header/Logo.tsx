import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <div className="sm:w-[48px] sm:h-[48px] aspect-square">
      <Link
        to={"/"}
        className=""
      >
        <img
          src="/icon.svg"
          alt=""
          className="w-6 h-6 sm:w-12 sm:h-12 min-w-full min-h-full"
        />
      </Link>
    </div>
  );
}