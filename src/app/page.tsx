import HeroForm from "@/components/common/HeroForm";
import dynamic from "next/dynamic";


const HeroVideo = dynamic(() => import("@/components/common/HeroVideo"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="container md:pl-16">
      <div className="my-5 md:my-16">
        <h1 className="h1 leading-[44px] text-[36px] lg:w-[879px] md:text-[80px] md:leading-[80px] break-words"> Welcome to the worlds easiest website builder  </h1>
        <p className="p lg:w-[778px] my-5  md:text-[20px]"> Let AI turn your ideas into reality in minutes. Get content, structure, and style done for you, ready to edit and publish instantly. </p>
        <div className='pb-5'>
          <HeroForm />
        </div>
      </div>
      <HeroVideo />
    </main>
  );
}
