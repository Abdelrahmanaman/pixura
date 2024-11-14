import Bento from "@/components/Bento";
import CustomButton from "@/components/CustomButton";
import Features from "@/components/Features";
import H1 from "@/components/ui/H1";
import P from "@/components/ui/P";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <div className="space-y-32  sm:mx-auto px-4">
        <div className="sm:mt-60 mt-20 backdrop-filter backdrop-blur-[2px] border border-black w-fit mx-auto gap-4 h-full justify-center flex flex-col items-center px-4 sm:p-10 rounded-3xl">
          <H1 className="text-transparent bg-gradient-to-r from-gray-200 via-zinc-700 to-zinc-800 bg-clip-text text-center ">
            Transforming Ideas into Stunning Visuals
          </H1>
          <P className="text-transparent text-center whitespace-break-spaces bg-gradient-to-r from-gray-200  via-zinc-400 to-zinc-800 bg-clip-text text-base sm:text-lg   sm:max-w-[80ch]">
            Discover the joy of creating with Pixura! From generating original
            images to precise background removal, express your creativity
            effortlessly.
          </P>
          <CustomButton>Get started</CustomButton>
        </div>
        <Features />
        <Bento />
      </div>
    </section>
  );
}
