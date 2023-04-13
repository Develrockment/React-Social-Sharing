import NativeShare from "./nativeShare/nativeShare";
import ReactShare from "./reactShare/reactShare";

type Props = {
   url: string;
   title: string;
   text: string;
};

export default function SocialSharing({
   url,
   title,
   text,
}: Props): JSX.Element {
   if ("share" in navigator)
      return <NativeShare url={url} title={title} text={text} />;
   else return <ReactShare url={url} title={title} text={text} />;
}
