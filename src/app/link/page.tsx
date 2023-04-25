import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <div>{searchParams[5]}</div>;
}
