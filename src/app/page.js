import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <div className="inset-0">
          <Image
            src="/banner.jpg"
            alt="Parallax Background"
            fill
            priority
            className="object-cover scale-110 animate-zoom-slow"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-[4rem] mb-0 mt-0 font-extrabold text-[#251f77] leading-tight">
           P.Y ABLE CONSTRUCTION & ENGINEERING CO. LTD
          </h1>
          <p className="text-[2rem] text-[#be7a79] mb-0 mt-0">
            Smooth zoom-in background using Tailwind
          </p>
        </div>

        <div className="absolute inset-0 bg-black/0" />
      </section>
    </div>
  );
}
