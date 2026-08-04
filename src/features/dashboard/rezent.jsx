import HeaderRecentSection from "@/features/dashboard/headerRezint";
import { ItemImage } from "@/features/dashboard/bodyRezint";

export default function RecentSection() {
  return (
    <div className="mx-4 flex-col h-full">
      <div className="h-10">
        <HeaderRecentSection />
      </div>
      <div className="flex-1">
        <ItemImage></ItemImage>
      </div>
    </div>
  );
}
