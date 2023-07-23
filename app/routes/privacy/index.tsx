import ReactDOMServer from "react-dom/server";
import Header from "~/components/Layouts/Header";
import Main from "~/components/Layouts/Main";
import Content from "./parts/Content";
import ContentMaterial from "../blogs/components/materials/Content";

export default function About() {
  return (
    <>
      <Header pageTitle="PRIVACY" />
      <Main>
        <ContentMaterial content={ReactDOMServer.renderToString(Content())} />
      </Main>
    </>
  );
}
