import HeadSkils from "@/features/dashboard/headSkils";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Progress } from "@/shared/components/ui/progress";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
export default function name() {
  return (
    <div className="px-4 flex flex-col h-full">
      <div className="shrink-0 min-h-10">
        <HeadSkils></HeadSkils>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center ">
          <SiReact size={40} className="text-blue-400" />
          <Field className="w-full  ">
            <FieldLabel htmlFor="progress-upload ms-2">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center ">
          <SiTailwindcss size={40} className="text-blue-400" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center pt-4">
          <SiNextdotjs size={40} className="text-white" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center pt-5">
          <SiJavascript size={40} className="text-yellow-400" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center pt-5">
          <SiTailwindcss size={40} className="text-blue-400" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center pt-4">
          <SiNextdotjs size={40} className="text-white" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
        <div className="flex items-center pt-5">
          <SiTailwindcss size={40} className="text-blue-400" />
          <Field className="w-full   ms-2">
            <FieldLabel htmlFor="progress-upload">
              <span>Upload progress</span>
              <span className="ml-auto">66%</span>
            </FieldLabel>
            <Progress
              value={66}
              id="progress-upload"
              className="[&>[data-slot=progress-indicator]]:bg-linear-[150deg,#5b42f3_40%,#2b62ff_60%,teal]"
            />
          </Field>
        </div>
      </div>
    </div>
  );
}
