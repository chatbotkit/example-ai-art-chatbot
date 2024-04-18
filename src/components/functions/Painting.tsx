import Image from "next/image";
import React from "react";

export default function Painting({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="h-full w-full relative">
      <Image
        src={imageSrc}
        fill
        alt=""
        className="absolute h-full w-full object-cover"
      />
    </div>
  );
}
