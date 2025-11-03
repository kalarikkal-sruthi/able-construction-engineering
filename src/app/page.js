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
        <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-center ml-16 pb-16">
          <h1 className="text-[4rem] mb-0 mt-0 font-extrabold text-[#251f77] leading-tight ">
            P.Y ABLE CONSTRUCTION
          </h1>
          <h1 className="text-[4rem] mb-0 mt-0 font-extrabold text-[#251f77] leading-tight">
            & ENGINEERING CO. LTD
          </h1>
          <p className="text-[2rem] font-extrabold  text-[#fff] mb-0 mt-0">
            Private Limited By Shares
          </p>
          <div className="text-center ">
            <h3 className="text-5xl font-extrabold text-[#251f77] bg-[#ffffff85] rounded-full  flex items-center px-5 py-3 ">
              35+
              <span className="text-xl text-[#d1413f]">
                Years of Experience
              </span>
            </h3>
            <p className="text-xl text-[#d1413f]"></p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/0" />
      </section>
      <section className="flex flex-col items-center justify-center  text-gray-800 pt-25 pl-25 pb-15 pr-25">
        <div className="  flex-none ">
          <h2 className="font-bold text-6xl text/8 text-center">
            We deliver expert building work<br></br>
            <span className="text-[#bf7b7b]">
              solutions and trusted support for
            </span>
            <br></br>
            all construction project demands
          </h2>
        </div>
      </section>
      <section className="pl-25 pb-30 pr-25 relative">
        <div className="flex gap-6 items-center">
          <div className="w-2/5 h-[600px] flex flex-col justify-center " >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              About 
              <br></br> <span className="text-[#bf7b7b]">Our Company</span>
            </h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          <p>
 It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </p>
          <p>
            It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </p>
            
          </div>
          <div className="w-3/5 relative h-160">
            <Image
              src="/about.jpg"
              alt="About Background"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
        <div>
          <Image
              src="/homelogo.png"
              alt="About Background"
              width={500}
              height={450}
              
              className="object-contain absolute start-0 rounded-2xl  -ml-8 "
            />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start  text-gray-800  pl-25 pb-20 pr-25">

      </section>
    </main>
  );
}
