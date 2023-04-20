"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm, useWatch } from "react-hook-form";
import {
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";

const inter = Inter({ subsets: ["latin"] });

export default function Embed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const fullData = watch();

  console.log(fullData);

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Author"
          {...register("Author", { required: false, maxLength: 80 })}
        />
        <input
          type="url"
          placeholder="Author Icon URL"
          {...register("Author_Icon_URL", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Description"
          {...register("Description", { required: false })}
        />
        <input
          type="url"
          placeholder="Image URL"
          {...register("Image_URL", { required: false })}
        />
        <input
          type="url"
          placeholder="Thumbnail URL"
          {...register("Thumbnail_URL", {})}
        />
        <input type="text" placeholder="Title" {...register("Title", {})} />

      </form>
      <DiscordMessages>
        <DiscordMessage
          author="BossDaily"
          avatar="https://cdn.discordapp.com/avatars/274973338676494347/00dcf84af54a0a58d2394b4054e0f7f5.png?size=100"
        >
          <DiscordEmbed authorName={fullData.Author} embedTitle={fullData.Title}>
            <DiscordEmbedDescription slot="description">
              {fullData.Description}
            </DiscordEmbedDescription>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
