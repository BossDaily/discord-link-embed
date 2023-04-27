"use client";
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";

export default function Preview({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      <DiscordMessages className="rounded-xl grow-0 w-full">
        <DiscordMessage
          author="BossDaily"
          avatar="https://cdn.discordapp.com/avatars/274973338676494347/00dcf84af54a0a58d2394b4054e0f7f5.png?size=100"
        >
          <DiscordEmbed
            authorName={searchParams.a}
            embedTitle={searchParams.t}
            color={searchParams.c}
            thumbnail={searchParams.t}
            image={searchParams.i}
          >
            <DiscordEmbedDescription slot="description">
              {searchParams.d}
            </DiscordEmbedDescription>
            
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
