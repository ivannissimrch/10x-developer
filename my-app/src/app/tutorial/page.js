import Image from "next/image";

export default function Tutorial() {
  return (
    <main className="min-h-screen  bg-[#f0f4f8] text-[#333] font-sans flex flex-col justify-center items-center px-8 text-center">
      <Image
        className="w-full max-w-[300px] h-auto mb-8 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
        src="/tutorialHell.png"
        alt="Chingu 10x"
        width={800}
        height={600}
      />
      <h2 className="text-xl mb-6 max-w-xl">
        I still don't know what to build
      </h2>

      <a
        href="https://www.chingu.io"
        target="_blank"
        className="bg-[rgb(166,166,240)] text-[#1a1a1a] font-bold py-3 px-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[rgb(105,105,190)] transition-colors duration-300"
      >
        Join a Voyage with Chingu
      </a>
    </main>
  );
}
