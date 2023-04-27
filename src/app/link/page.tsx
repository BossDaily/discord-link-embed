import Preview from "@/components/preview";
import { DiscordEmbed, DiscordEmbedDescription, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string  };
}) {
  console.log(params, searchParams);
  return (
    <div>
      <Preview searchParams={searchParams} />
    </div>
  );
}
