import {
   FacebookShareButton,
   FacebookIcon,
   TwitterShareButton,
   TwitterIcon,
   WhatsappShareButton,
   WhatsappIcon,
} from "react-share";

type Props = {
   url: string;
   title: string;
   text: string;
};

export default function ReactShare({ url, title, text }: Props): JSX.Element {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
         }}
      >
         <FacebookShareButton url={url} quote={title}>
            <FacebookIcon round />
         </FacebookShareButton>
         <TwitterShareButton url={url} title={text}>
            <TwitterIcon round />
         </TwitterShareButton>
         <WhatsappShareButton url={url} title={text}>
            <WhatsappIcon round />
         </WhatsappShareButton>
      </div>
   );
}
