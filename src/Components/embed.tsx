"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm, useWatch } from "react-hook-form";
import { DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

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

  const { epicData } = useWatch()

  console.log(fullData);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Author"
          {...register("Author", { required: false, maxLength: 80 })}
        />
        <input
          type="url"
          placeholder="Author Icon URL"
          {...register("Author Icon URL", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Description"
          {...register("Description", { required: false })}
        />
        <input
          type="url"
          placeholder="Image URL"
          {...register("Image URL", { required: false })}
        />
        <input
          type="url"
          placeholder="Thumbnail URL"
          {...register("Thumbnail URL", {})}
        />
        <input type="text" placeholder="Title" {...register("Title", {})} />

        <input type="submit" />
      </form>
      <DiscordMessages>
        <DiscordMessage>
          {fullData.author}
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
