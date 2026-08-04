import Image from "next/image";
export default function name() {
  return (
    <div className="flex px-4">
      <div className="flex-1">
        <h2 className="text-h4 mb-3">title cv</h2>
        <p>to down load my cv click her</p>
        <button
          className="mt-5 text-white  font-medium 
              bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]
              px-5 py-2.5 rounded-xl shadow-lg hover:opacity-95 transition-opacity flex items-center gap-2"
        >
          <span className="text-xl leading-none">+</span>
          <span>download</span>
        </button>
      </div>
      <div className="flex-1">
        <div className="w-full relative h-full">
          <Image src="/rsme2.png" alt="lap" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
