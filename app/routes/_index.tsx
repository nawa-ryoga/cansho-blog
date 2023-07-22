import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "CANSHO" }, { name: "description", content: "子上ねんその映画ブログ。" }];
};

export default function Index() {
  return (
    <div className="mt-4 sm:mt-8">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
        鑑賞：芸術作品を理解し、味わうこと（広辞苑）
      </h2>
      <p>ブログを書くまでが映画鑑賞だってこと。</p>

      <div className="mt-10 sm:mt-14">
        <ul>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
          <li className="flex mb-4 group hover:text-white">
            <p className="mr-1 transition duration-200">ブログのタイトル</p>
            <p className="text-font-darken-1 group-hover:text-white transition duration-200">
              Jun 22
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
