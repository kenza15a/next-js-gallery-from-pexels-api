import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import React from "react";
import ImgContainer from "./imgContainer";
import addBlurredDaraUrls from "@/lib/getBase64";
import { constrainedMemory } from "process";

type Props = {
  topic?: string | undefined; //optional
};
export default async function Gallery({ topic }: Props) {
  const url = !topic? "https://api.pexels.com/v1/curated":`https://api.pexels.com/v1/search?query=${topic}`;
  const images: ImagesResults | undefined = await fetchImages(url);

  // const CONSTANT_PHOTOGRAPHER_URL = "https://www.pexels.com/fr-fr/@kenza-filali-1054677862/";

  if (!images)
    return <h2 className="m-4 text-2xl font-bold"> No images found</h2>;
  const photosWithBlur = await addBlurredDaraUrls(images);

  //console.log(`filterd images are :\n ${photosWithBlur}`)

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
