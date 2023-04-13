type Props = {
   url: string;
   title: string;
   text: string;
};

export default function NativeShare({ url, title, text }: Props): JSX.Element {
   const handleNativeShare = () => {
      navigator
         .share({
            title,
            text,
            url,
         })
         .then(() => {
            console.log("Share Successful");
         })
         .catch(console.error);
   };

   return <button onClick={handleNativeShare}>Native Share</button>;
}
