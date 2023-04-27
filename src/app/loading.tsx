import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="https://media.discordapp.net/attachments/762750100199702588/1101174455646040125/5851-harambespin.gif?width=140&height=140"
        height={256}
        width={256}
        alt="Loading...."
      />
    </div>
  );
}