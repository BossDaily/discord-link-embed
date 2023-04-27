import NavButton from "@/components/NavButton";
import { Header } from "@/components/embed";
import Preview from "@/components/preview";
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";
import { Button } from "flowbite-react";
import { Metadata, ResolvingMetadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const embed: any = searchParams;
  console.log(embed);
  return {
    title: embed.t,
    openGraph: {
      description: embed.d,
      title: embed.t,
      type: "website",
    },
    authors: [embed.a],
    twitter: {
      card: "summary_large_image",
      images: [embed.i],
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
  const getFullUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <Header>Embed Preview</Header>
      <Preview searchParams={searchParams} />
      <Link href="/" className="w-32 justify-center">
        <NavButton>
          Create your own embed
        </NavButton>
      </Link>
    </div>
  );
}
