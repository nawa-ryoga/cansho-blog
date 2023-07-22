import parse, { Element, domToReact, attributesToProps } from "html-react-parser";
import type { HTMLReactParserOptions } from "html-react-parser";
import type { MovieData } from "~/libs/micro-cms/client.server";
import Movie from "./Movie";
import H2 from "../parts/H2";
import H3 from "../parts/H3";
import P from "../parts/P";
import Blockquote from "../parts/Bloclquote";
import ImageFigure from "../parts/Image/Figure";
import ImageFigcaption from "../parts/Image/Figcaption";
import Image from "./Image";
import ExternalLink from "~/components/Common/ExternalLink";

type Props = {
  content: string;
  movies?: MovieData[];
};

export default function Content({ content, movies }: Props) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === "tag") {
        const props = attributesToProps(domNode.attribs);

        if (domNode.attribs && domNode.name === "h2") {
          return <H2>{domToReact(domNode.children, options)}</H2>;
        }
        if (domNode.attribs && domNode.name === "h3") {
          return <H3>{domToReact(domNode.children, options)}</H3>;
        }
        if (domNode.attribs && domNode.name === "p") {
          const containsSpan = domNode.children.some(
            (child) => child.type === "tag" && child.name.toLowerCase() === "span",
          );
          if (containsSpan) {
            const spanElement = domNode.children.find(
              (child) =>
                child.type === "tag" &&
                child.name === "span" &&
                child.children[0].type === "text" &&
                child.attribs,
            ) as Element;
            const dataType = spanElement.attribs.class;
            const textNode = spanElement.children[0];
            if (dataType === "movie-card" && textNode.nodeType === 3 && movies) {
              const movie = movies.filter((movie) => movie.title === textNode.data)[0];
              return <Movie movie={movie} />;
            }
          }

          const containsAnchor = domNode.children.some(
            (child) => child.type === "tag" && child.name.toLowerCase() === "a",
          );

          if (containsAnchor) {
            const aElement = domNode.children.find(
              (child) =>
                child.type === "tag" &&
                child.name === "a" &&
                child.children[0].type === "text" &&
                child.attribs,
            ) as Element;

            const child = aElement.children[0];

            // TODO: RichLink

            // if (child.type === "text" && child.data === aElement.attribs.href && urlOgDataMap) {
            // return (
            //   <RichLink
            //     url={aElement.attribs.href}
            //     ogData={urlOgDataMap.get(aElement.attribs.href)}
            //   />
            // );
            // } else {
            //   return <P>{domToReact(domNode.children, options)}</P>;
            // }
          } else {
            return <P>{domToReact(domNode.children, options)}</P>;
          }
        }
        if (domNode.attribs && domNode.name === "a") {
          const child = domNode.children[0];
          if (child.type === "text" && child.data !== domNode.attribs.href) {
            return <ExternalLink href={domNode.attribs.href}>{child.data}</ExternalLink>;
          }
        }
        if (domNode.attribs && domNode.name === "blockquote") {
          return <Blockquote>{domToReact(domNode.children, options)}</Blockquote>;
        }
        if (domNode.attribs && domNode.name === "figure") {
          return <ImageFigure>{domToReact(domNode.children, options)}</ImageFigure>;
        }
        if (domNode.attribs && domNode.name === "img") {
          return (
            <Image
              src={domNode.attribs["src"]}
              alt={domNode.attribs["alt"]}
            />
          );
        }
        if (domNode.attribs && domNode.name === "figcaption") {
          return <ImageFigcaption>{domToReact(domNode.children, options)}</ImageFigcaption>;
        }
      }
    },
  };

  return <article className="pt-8 sm:pt-16 pb-12 sm:pb-40">{parse(content, options)}</article>;
}
