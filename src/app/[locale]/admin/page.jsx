import { Card } from "@/shared/components/ui/card";

export default function Cv() {
  return (
    <div className="">
      {/* one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-5">
        {/* ch one */}

        <div className="col-span-1 md:order-1 md:col-span-2 lg:col-span-1 xl:col-span-4">
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
        </div>
        {/* ch tow */}

        <div className="flex  md:order-3 gap-5 col-span-1 md:col-span-2 xl:col-span-6">
          <div className="flex-1 ">
            <Card>1</Card>
          </div>
          <div className="flex-1 ">
            <Card>2</Card>
          </div>
          <div className="flex-1 ">
            <Card>3</Card>
          </div>
          <div className="flex-1 ">
            <Card>4</Card>
          </div>
          <div className="flex-1 ">
            <Card>5</Card>
          </div>
        </div>
        {/* ch three */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 md:order-2">
          <Card className="h-full">3</Card>
        </div>
      </div>

      {/* tow */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-7 gap-5 mt-5">
        {/* ch one */}
        <div className="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* sm one */}
          <div className="sm:col-span-1 md:col-span-1   lg:col-span-3">
            <Card className="h-full">1</Card>
          </div>
          {/* sm one */}
          <div className="sm:col-span-1 md:col-span-1  lg:col-span-2 flex flex-col gap-5">
            {/* xs one */}

            <Card>1</Card>
            {/* xs tow */}

            <Card>2</Card>
          </div>
        </div>
        {/* ch tow */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex flex-col gap-5">
            <Card className="h-full">1</Card>
            <Card className="h-full">2</Card>
            <Card className="h-full">3</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
