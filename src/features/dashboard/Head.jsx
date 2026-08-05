"use client";
import { Card } from "@/shared/components/ui/card";
import { usePathname } from "next/navigation";
import { Badge } from "@/shared/components/ui/badge";
import Image from "next/image";
import { useCustmContextUser } from "@/providers/userAdmin";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

export default function HeadWelcome() {
  const { userName } = useCustmContextUser();
  const path = usePathname();
  const lang = path.startsWith("/ar");
  //   -to-br from-[#0d1527] via-[#080c17] to-[#03050c]
  //   dark:bg-[url('/bg-card-2.png')]

  return (
    <div>
      <Card
        className="
        bg-linear-[150deg,#5b42f320_1%,#fff_100%]
        dark:bg-linear-[150deg,#5b42f310_1%,#03050c_100%]
        bg-cover
        bg-center
        bg-no-repeat relative"
      >
        <div className="absolute inset-0 opacity-40 z-10">
          <div className="absolute top-10 left-1/2 w-1 h-1 rounded-full bg-violet-400"></div>
          <div className="absolute top-16 start-[58%] w-1.5  h-1.5 rounded-full bg-indigo-400"></div>
          <div className="absolute top-40 start-[30%] w-4 h-4 rounded-full bg-blue-400"></div>
          <div className="absolute top-50 start-[39%] w-2 h-2 rounded-full bg-blue-400"></div>
          <div className="absolute top-10 start-[40%] w-1 h-1 rounded-full bg-blue-400"></div>
          <div className="absolute top-50 start-[54%] w-7 h-7 rounded-full bg-blue-400"></div>
          <div className="absolute top-14 start-[48%] w-2 h-2 rounded-full bg-violet-500 blur-[1px]"></div>
        </div>
        <div className="flex flex-col h-[430px] sm:flex-row sm:h-[300px] justify-between ">
          {/* first */}
          <div className="flex-1 flex flex-col md:justify-between  ps-3 py-2">
            <div>
              {lang ? (
                <p className="text-blue-400">
                  مرحبا ,
                  <span className=" text-foreground">{userName.value}</span>
                </p>
              ) : (
                <p>
                  welcome <span>{userName.value}</span>
                </p>
              )}
            </div>
            <h1 className="text-[clamp(1rem,2vw+1rem,2rem)] ">
              {lang
                ? "لنبني شيئاً مذهلاً اليوم."
                : "let,s build something amazing today."}
            </h1>

            <div>
              <div className="flex flex-wrap gap-2 py-4">
                <Badge variant="outline">
                  <SiReact
                    data-icon="inline-start"
                    className="text-[#61DAFB] text-xl animate-spin-slow"
                  />
                  React
                </Badge>
                <Badge variant="outline">
                  <SiNextdotjs
                    data-icon="inline-start"
                    className="dark:text-white text-slate-600 text-xl"
                  />
                  next js
                </Badge>
                <Badge variant="outline">
                  <SiTailwindcss
                    data-icon="inline-start"
                    className="text-[#06B6D4] text-xl"
                  />
                  Tailwindcss
                </Badge>
                <Badge variant="outline">
                  <SiJavascript
                    data-icon="inline-start"
                    className="text-[#F7DF1E] text-xl rounded-sm"
                  />
                  javascript
                </Badge>
              </div>
            </div>

            <div className="cursor-pointer">
              <button
                className=" text-white  font-medium 
              bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]
              px-5 py-2.5 rounded-xl shadow-lg hover:opacity-95 transition-opacity flex items-center gap-2"
              >
                <span className="text-xl leading-none">+</span>
                {lang ? (
                  <span>انشاء مشروع جديد</span>
                ) : (
                  <span>Create New Project</span>
                )}
              </button>
            </div>
          </div>

          {/* sacond */}

          <div
            className={`relative sm:h-[300px] ${lang ? "" : "rotate-y-[160deg]"} flex-1 flex items-end justify-start`}
          >
            <Image
              src="/lap4.png"
              alt="lap"
              fill
              className="w-auto h-auto sm:scale-120 sm:translate-x-10  sm:h-[300px]  drop-shadow-md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
