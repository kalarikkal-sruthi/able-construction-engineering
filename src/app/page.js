import Image from "next/image";

export default function Home() {
  return (
    <main>
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
          <p className="text-[3rem] text-[#be7a79] mb-0 mt-0">
            Smooth zoom-in background using Tailwind
          </p>

          <h1 className="text-5xl font-bold mb-4 text-[#251f77]">
            Our Expertise
          </h1>
          <div className="text-center">
            <h2 className="text-6xl font-extrabold text-[#251f77]">35+</h2>
            <p className="text-xl text-gray-600">Years of Experience</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/0" />
      </section>

      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <h2 className="text-4xl font-semibold mb-3">About Us</h2>
        <p className="max-w-xl text-center">
          We provide amazing services with smooth scrolling and beautiful
          design.
        </p>
      </section>
    </main>
  );
}
