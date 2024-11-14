import {
  Image as ImageIcon,
  ImageOff,
  Layers,
  Palette,
  PenTool,
  Wand2,
} from "lucide-react";
import H3 from "./ui/H3";
import P from "./ui/P";

const features = [
  {
    icon: <ImageOff className="w-8 h-8" />,
    title: "Background Removal",
    description: "Remove backgrounds from images instantly with AI precision",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Text to Image",
    description:
      "Transform your ideas into stunning visuals with AI generation",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Logo Generator",
    description: "Create unique, professional logos tailored to your brand",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Image Enhancement",
    description: "Upscale and enhance image quality with AI technology",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Style Transfer",
    description: "Apply artistic styles to your images with one click",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Batch Processing",
    description: "Process multiple images simultaneously with AI efficiency",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function Bento() {
  return (
    <div className="max-w-4xl  mx-auto grid sm:grid-cols-3 grid-cols-1  sm:gap-4 gap-2">
      {features.map((feature, i) => (
        <div
          key={i.toString()}
          className={`row-span-1 gap-10 rounded-xl border-zinc-900 border p-4 flex flex-col justify-between ${
            i === 3 ? "sm:col-span-2" : ""
          } ${i === 5 ? "sm:col-span-3" : ""}`}
        >
          <div className="text-white mb-4">{feature.icon}</div>
          <div>
            <H3 className="text-white font-bold text-lg mb-2">
              {feature.title}
            </H3>
            <P className="text-sm whitespace-break-spaces text-white sm:text-base">
              {feature.description}
            </P>
          </div>
        </div>
      ))}
    </div>
  );
}
