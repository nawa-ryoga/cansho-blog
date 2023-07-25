import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";
import Footer from "./components/Layouts/Footer";
import { Analytics } from "@vercel/analytics/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png", type: "image/png" },
  { rel: "icon", sizes: "32x32", href: "/icon.svg", type: "image/svg+xml" },
];

export default function App() {
  return (
    <html
      lang="ja"
      className="bg-background-default"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="text-font-default tracking-wider text-sm sm:text-base">
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
