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
          <h1 className="text-5xl font-bold mb-4">Parallax Zoom Effect</h1>
          <p className="text-lg text-gray-200">
            Smooth zoom-in background using Tailwind
          </p>
        </div>

        <div className="absolute inset-0 bg-black/40" />
      </section>
    </div>
  );
}
