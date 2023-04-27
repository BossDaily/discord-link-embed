import Preview from "@/components/preview";
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<Metadata> {
  const embed: any = searchParams.searchParams;
  console.log(embed);
  return {
    title: embed.t,
    openGraph: {
      description: embed.d,
    },
    themeColor: embed.c,
  };
}

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      <Preview searchParams={searchParams} />
    </div>
  );
}
