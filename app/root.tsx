import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";
import Layouts from "./components/Layouts";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png", type: "image/png" },
  { rel: "icon", sizes: "32x32", href: "/icon.svg", type: "image/svg+xml" },
];

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-background-default text-font-default tracking-wider text-sm sm:text-base">
        <Layouts>
          <Outlet />
        </Layouts>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
