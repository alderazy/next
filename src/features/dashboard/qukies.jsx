import { FileSearchIcon } from "lucide-react";
import {
  Attachment,
  AttachmentMedia,
  AttachmentDescription,
} from "@/shared/components/ui/attachment";

export default function name() {
  return (
    <div className="px-4">
      <h2 className="pb-2">qukies</h2>
      <div className="flex justify-between  min-w-65">
        <div className="bg-none flex-1 text-center flex-col justify-center items-center flex flex-col">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentDescription>asdsd</AttachmentDescription>
        </div>
        <div className="bg-none flex-1 flex-col text-center justify-center items-center flex flex-col">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentDescription>asdasd</AttachmentDescription>
        </div>
        <div className="bg-none flex-1 flex-col text-center justify-center items-center flex flex-col">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentDescription>asdsd</AttachmentDescription>
        </div>
        <div className="bg-none flex-1 flex-col text-center justify-center items-center flex flex-col">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentDescription>asdsad</AttachmentDescription>
        </div>
      </div>
    </div>
  );
}
