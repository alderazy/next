import { Card } from "@/shared/components/ui/card";
import HeadWelcome from "@/features/dashboard/Head";
import VisitorsOverview from "@/features/dashboard/vistors";
import { TSP } from "@/features/dashboard/Ts";
import Rezent from "@/features/dashboard/rezent";
import Skils from "@/features/dashboard/skils";
import Dashcv from "@/features/dashboard/dashcv";
import Message from "@/features/dashboard/message";
import View from "@/features/dashboard/view";
import Qukies from "@/features/dashboard/qukies";

export default function Dashboard() {
  return (
    <div className="">
      {/* one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-5">
        {/* ch one */}

        <div className="col-span-1 md:order-1 md:col-span-2  xl:col-span-4">
          <HeadWelcome></HeadWelcome>
        </div>
        {/* ch tow */}

        <div className="flex  md:order-3 gap-5 col-span-1 md:col-span-2 xl:col-span-6">
          <div className="flex-1 ">
            <Card>
              <TSP />
            </Card>
          </div>
          <div className="flex-1 ">
            <Card>
              <TSP />
            </Card>
          </div>
          <div className="flex-1 ">
            <Card>
              <TSP />
            </Card>
          </div>
          <div className="flex-1 ">
            <Card>
              <TSP />
            </Card>
          </div>
        </div>
        {/* ch three */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 md:order-2">
          <Card className="xl:h-full h-105  p-0">
            <VisitorsOverview />
          </Card>
        </div>
      </div>

      {/* tow */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-7 gap-5 mt-5">
        {/* ch one */}
        <div className="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* sm one */}
          <div className="sm:col-span-1 md:col-span-1   lg:col-span-3">
            <Card className="h-full ">
              <Rezent />
            </Card>
          </div>
          {/* sm one */}
          <div className="sm:col-span-1 flex flex-col  h-full md:col-span-1  lg:col-span-2 flex flex-col gap-5">
            <Card className="flex-1">
              <Skils />
            </Card>
            <Card className="shrink-0">
              <Dashcv></Dashcv>
            </Card>
          </div>
        </div>
        {/* ch tow */}
        <div className="col-span-1 md:col-span-2 h-full lg:col-span-2">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
            <Card className=" flex-1 ">
              <Message />
            </Card>
            <div className="flex flex-col gap-5">
              <Card className="flex-1 h-30">
                <View />
              </Card>
              <Card className="">
                <Qukies></Qukies>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
