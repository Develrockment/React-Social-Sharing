import { useState, useEffect } from "react";
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
   const supportNativeSharing = "share" in navigator;
   //    const [supportNativeSharing, setSupportNativeSharing] = useState<
   //       false | true | "loading"
   //    >("loading");

   //    useEffect(() => {
   //       if ("share" in navigator) setSupportNativeSharing(true);
   //       else setSupportNativeSharing(false);
   //    }, []);

   //    if (supportNativeSharing === "loading") return <p>Loading...</p>;
   if (supportNativeSharing)
      return <NativeShare url={url} title={title} text={text} />;
   else return <ReactShare url={url} title={title} text={text} />;
}
