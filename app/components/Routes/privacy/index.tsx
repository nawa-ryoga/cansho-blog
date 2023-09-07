import ReactDOMServer from "react-dom/server";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";
import Content from "./parts/Content";
import ContentMaterial from "../blogs/components/materials/Content";

export default function Privacy() {
  return (
    <>
      <Header
        pageTitle="PRIVACY"
        internalLink={{ to: "/", text: "TOP" }}
      />
      <Main>
        <ContentMaterial content={ReactDOMServer.renderToString(Content())} />
      </Main>
    </>
  );
}
