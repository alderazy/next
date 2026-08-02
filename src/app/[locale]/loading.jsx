import { Spinner } from "@/shared/components/ui/spinner";
export default function SpinnerSize() {
  return (
    <div className="flex items-center h-[100vh] justify-center gap-6">
      <div className="flex flex-col text-center">
        <Spinner className="size-8 ms-5" />
        <h1 className="text-muted-foreground mt-5 ">loadind....</h1>
      </div>
    </div>
  );
}
