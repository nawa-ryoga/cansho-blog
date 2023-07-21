import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">映画を鑑賞したい</h2>
      <p>自分は消費者、映画は商品だと割り切りたくない。</p>
    </div>
  );
}
