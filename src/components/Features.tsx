import Image from "next/image";
import { InfiniteSlider } from "./InfiniteSlider";

const images: { src: string; alt: string }[] = [
  {
    src: "/feat.jpg",
    alt: "Avatar generated image",
  },
  {
    src: "/feat2.jpg",
    alt: "Icon generated image",
  },
  {
    src: "/feat3.jpg",
    alt: "Background removed image",
  },
  {
    src: "/feat4.jpg",
    alt: "Object removed image",
  },

  {
    src: "/feat5.jpg",
    alt: "Colorised image",
  },
];

export default function Features() {
  return (
    <InfiniteSlider
      durationOnHover={1000}
      gap={10}
      duration={40}
      className="max-w-4xl mx-auto mask"
    >
      {images.map((image) => {
        return (
          <div className="relativ rounded-lg overflow-hidden" key={image.alt}>
            <Image
              draggable={false}
              className="max-w-[15rem] sm:w-[15rem] w-[10rem] object-cover hover:scale-110 transition-transform duration-500 h-fit rounded-lg"
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </InfiniteSlider>
  );
}
