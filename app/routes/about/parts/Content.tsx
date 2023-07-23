import ExternalLink from "~/components/Common/ExternalLink";

export default function Content() {
  return (
    <>
      <p>映画は出題ではありません。</p>
      <p>評論は「作者が言いたかったこと ≒ 正解」を当てる作業ではありません。</p>
      <p>作品という形になっている以上、作品そのものが「作者が言いたかったこと」です。</p>
      <p>
        映画じゃないと伝えられないからそうしたのであり、映画じゃなくてもいいならそうしなかったでしょう。
      </p>
      <p>言葉になった時点で必ず間違えています。ときに作者自身の言葉でさえ。</p>
      <p>
        なので評論にも正解はありません。おもしろい評論とつまらない評論があるだけです。
        <br />
        おもしろい映画とつまらない映画があるのと同じです。
      </p>
      <p>
        私はおもしろい映画を観たいと思っており、この場所でなるべくおもしろい評論を書きたいとも思っています。
      </p>
      <br />
      <span className="flex gap-4">
        <p>運営者：子上ねんそ</p>
        <ExternalLink href="https://twitter.com/nenso_negami">
          <p>Twitter</p>
        </ExternalLink>
      </span>
    </>
  );
}
