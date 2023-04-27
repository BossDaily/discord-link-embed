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
import { useState, ReactNode } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export function Header({ children }: { children: React.ReactNode }) {
  return <h1 className="text-white text-6xl font-bold">{children}</h1>;
}
export default function Embed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
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

  const url = `${fullUrl}link?a=${encodeURIComponent(fullData.Author)}&d=${
    fullData.Description
  }&i=${encodeURIComponent(fullData.Image_URL)}&t=${encodeURIComponent(
    fullData.Title
  )}&c=${encodeURIComponent(color)}`;

  return (
    <div className="grid grid-cols-1 grow-0 gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <input
          type="text"
          placeholder="Author"
          {...register("Author", { required: false, maxLength: 80 })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white max-h-10"
        />
        <textarea
          placeholder="Description"
          {...register("Description", { required: false })}
          className=" bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white max-h-80"
        />
        <input
          type="url"
          placeholder="Image URL"
          {...register("Image_URL", { required: false })}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white max-h-10"
        />
        <input
          type="text"
          placeholder="Title"
          {...register("Title", {})}
          className="bg-black rounded-xl hover:shadow-cornflower-blue-400 hover:shadow-xl text-white max-h-10"
        />
      </form>
      <HexColorPicker color={color} onChange={setColor} />
      <div className="">
        <DiscordMessages className="rounded-xl grow-0 w-full">
          <DiscordMessage
            author="BossDaily"
            avatar="https://cdn.discordapp.com/avatars/274973338676494347/00dcf84af54a0a58d2394b4054e0f7f5.png?size=100"
          >
            <DiscordEmbed
              authorName={fullData.Author}
              embedTitle={fullData.Title}
              color={color}
              image={fullData.Image_URL}
            >
              <DiscordEmbedDescription slot="description">
                {fullData.Description}
              </DiscordEmbedDescription>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-4 md:gap-0 md:grid-cols-2">
        <Link href={url.replaceAll(" ", "%20")} className="w-32 justify-center">
          <Button
            className="w-32"
            style={{ backgroundColor: "rgb(68 69 231)" }}
          >
            Go to URL
          </Button>
        </Link>
        <Button
          onClick={(e) => {
            navigator.clipboard.writeText(url.replaceAll(" ", "%20"));
          }}
          className="w-32"
          style={{ backgroundColor: "rgb(68 69 231)" }}
        >
          Copy URL
        </Button>
      </div>

      {/* <h2>{url.replaceAll(" ", "%20")}</h2> */}
    </div>
  );
}
