import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/shared/components/ui/item";

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadc",
  },
  {
    username: "maxleitaer",
    avatar: "https://github.com/maxleiter.png",
    email: "maxlei",
  },
  {
    username: "evislrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilra",
  },
  {
    username: "maxleidter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxlei",
  },
];

import Header from "@/features/dashboard/headmessage";
export default function name(params) {
  return (
    <div className="flex flex-col px-4">
      <div className="h-10">
        <Header />
      </div>
      <div className="flex-1">
        <ItemGroup className="px-0">
          {people.map((person, index) => (
            <Item
              key={person.username}
              variant="outline"
              className="border-none justify-between px-0 py-0"
            >
              <ItemMedia className="w-10 h-10">
                <Avatar className="w-full h-full">
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription>{person.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
