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
import { HexColorPicker } from "react-colorful";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
export default function Embed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const fullData = watch();

  const pathname = usePathname();
  const router = useRouter();

  const [color, setColor] = useState("#aabbcc");

  console.log(fullData);

  const getFullUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const fullUrl = getFullUrl();

  const url = `${fullUrl}?a=${fullData.Author}&au=${fullData.Author_Icon_URL}&d=${fullData.Description}&i=${fullData.Image_URL}&tu=${fullData.Thumbnail_URL}&t=${fullData.Title}&c=${color}`;

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 flex-none"
      >
        <input
          type="text"
          placeholder="Author"
          {...register("Author", { required: false, maxLength: 80 })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
        <input
          type="url"
          placeholder="Author Icon URL"
          {...register("Author_Icon_URL", { required: true, maxLength: 100 })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
        <input
          type="text"
          placeholder="Description"
          {...register("Description", { required: false })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
        <input
          type="url"
          placeholder="Image URL"
          {...register("Image_URL", { required: false })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
        <input
          type="url"
          placeholder="Thumbnail URL"
          {...register("Thumbnail_URL", {})}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
        <input
          type="text"
          placeholder="Title"
          {...register("Title", {})}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white"
        />
      </form>
      <HexColorPicker color={color} onChange={setColor} />
      <DiscordMessages className="rounded-xl">
        <DiscordMessage
          author="BossDaily"
          avatar="https://cdn.discordapp.com/avatars/274973338676494347/00dcf84af54a0a58d2394b4054e0f7f5.png?size=100"
        >
          <DiscordEmbed
            authorName={fullData.Author}
            embedTitle={fullData.Title}
            color={color}
          >
            <DiscordEmbedDescription slot="description">
              {fullData.Description}
            </DiscordEmbedDescription>
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
      <h2>{url.replaceAll(" ", "%20")}</h2>
    </div>
  );
}
