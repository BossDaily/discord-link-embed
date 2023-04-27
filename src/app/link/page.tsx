import Preview from "@/components/preview";
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";
import { Metadata, ResolvingMetadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props
): Promise<Metadata> {
  const embed: any = searchParams;
  console.log(embed);
  return {
    title: embed.t,
    openGraph: {
      description: embed.d,
      title: embed.t,
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
