import React from "react";
import { photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: photo;
};
export default function ImgContainer({ photo }: Props) {
  return (
    <div className="
    h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        quality={100}
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
        sizes="(max_width:1280px)278px,(max-width:1040px) calc(12.73vw+118px);(min-width:800px) 33?18vw,(min-540px) 50vw, calc(100vw-16px)"
        className="object-cover group-hover:opacity-75"
      />
    </div>
  );
}
