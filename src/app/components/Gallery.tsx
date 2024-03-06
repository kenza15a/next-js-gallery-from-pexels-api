import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import React from "react";
import ImgContainer from "./imgContainer";
import addBlurredDaraUrls from "@/lib/getBase64";
export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImagesResults | undefined = await fetchImages(url);

  console.table(images);
  if (!images)
    return <h2 className="m-4 text-2xl font-bold"> No images found</h2>;
  const photosWithBlur = await addBlurredDaraUrls(images);
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
