import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemActions,
  ItemTitle,
} from "@/shared/components/ui/item";
import { Badge } from "@/shared/components/ui/badge";

import { Plus } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

import Image from "next/image";
const music = [
  {
    title: "dashboard",
    artist: [, "react", "next js"],
    duration: "Feature",
  },
  {
    title: "SPA",
    artist: ["js", "next js"],

    duration: "Feature",
  },
  {
    title: "Todo",
    artist: ["js", "tailwind"],

    duration: "Feature",
  },
  {
    title: "Todwo",
    artist: ["react", "next js"],

    duration: "Feature",
  },
  {
    title: "Toddo",
    artist: ["js", "react"],

    duration: "Feature",
  },
];

export function ItemImage() {
  return (
    <div className="flex w-full flex-col h-full pb-3">
      {/* firsr */}
      <ItemGroup className="w-full gap-0 justify-between h-full">
        {music.map((song) => (
          <div key={song.title} className="h-full">
            <Item
              className=" justify-between flex-nowrap w-full  border-none"
              variant="outline"
              role="listitem"
            >
              <a href="#" className="flex-1">
                <div className="flex">
                  <ItemMedia variant="image" className="h-15 w-25">
                    <Image
                      src={`/do.jpeg`}
                      alt={song.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // تحسين الأداء
                      className="object-cover grayscale"
                    />
                  </ItemMedia>
                  <div className="flex flex-col ps-4 justify-around">
                    <ItemContent>
                      <ItemTitle className="line-clamp-1">
                        {song.title}
                        <span className="text-muted-foreground">
                          {song.album}
                        </span>
                      </ItemTitle>
                      <ItemContent className="flex flex-row pb-2">
                        {song?.artist?.map((el) => {
                          return (
                            <div
                              key={el}
                              className="flex justify-center pe-2 items-center"
                            >
                              <Plus size={10}></Plus>
                              <span className="text-[.7rem] text-nowrap">
                                {el}
                              </span>
                            </div>
                          );
                        })}
                      </ItemContent>
                    </ItemContent>
                    <ItemContent className="flex-none text-center">
                      <ItemDescription>
                        <Badge variant="destructive">{song.duration}</Badge>
                      </ItemDescription>
                    </ItemContent>
                  </div>
                </div>
              </a>
              <div className="flex-1 md:hidden lg:block">
                <div className=" flex flex-wrap  justify-between ps-5 items-center">
                  <div>
                    <p>asdasd</p>
                    <p>asdsd</p>
                  </div>
                  <div className="flex justify-between pt-3">
                    <ItemActions className="me-4">
                      <Button
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full"
                        aria-label="Invite"
                      >
                        <Plus />
                      </Button>
                    </ItemActions>
                    <ItemActions>
                      <Button
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full"
                        aria-label="Invite"
                      >
                        <Plus />
                      </Button>
                    </ItemActions>
                  </div>
                </div>
              </div>
            </Item>
            <hr className="my-1" />
          </div>
        ))}
      </ItemGroup>

      {/* scand */}
    </div>
  );
}
