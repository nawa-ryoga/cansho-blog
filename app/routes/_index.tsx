import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "CANSHO" }, { name: "description", content: "子上ねんその映画ブログ。" }];
};

export default function Index() {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">映画を鑑賞したい</h2>
      <p>自分が消費者、映画が商品だと割り切りたくない。</p>

      <div className="mt-20">
        <ul>
          <li className="flex mb-4">
            <p className="mr-1">ブログのタイトル</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">ブログのタイトルだったりもする</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">ブログのタイトルなのか？</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">じつは、ブログのタイトル</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">ブログのタイトルだってばよ</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">ブログの、なんだっけ、ああタイトル</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
          <li className="flex mb-4">
            <p className="mr-1">ブログのタイトルっていってた</p>
            <p className="text-font-darken-1">Jun 22</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
