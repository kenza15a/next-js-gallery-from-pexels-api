import { getPlaiceholder } from "plaiceholder";
import type { photo, ImagesResults } from "@/models/Images";
import { promises } from "dns";
async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`failed to fetch: ${res.status} ${res.statusText}`);
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    // console.log(base64);
    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(
  images: ImagesResults
): Promise<photo[]> {
  //fetching in parallel
  //make all requests at ones instead of waiting each one for ,not having a waterfall
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );
  //resolve all requests in order
  const base64Results = await Promise.all(base64Promises);
  const photosWithBlur: photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });
  return photosWithBlur;
}
