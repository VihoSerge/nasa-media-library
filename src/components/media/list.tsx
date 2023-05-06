import { Media } from "@/types";
import MediaCard from "./card";
import { SearchCollection, SearchItem } from "@/types/nasa";
import React from "react";

interface MediaListProps {
  data: SearchCollection[];
}

const transformMedia = (item: SearchItem): Media => {
  const [data] = item.data;
  const [imagePath] = item.links;

  return {
    id: data.nasa_id,
    image: imagePath.href,
    title: data.title,
    location: data.location,
    photographer: data.photographer,
    dateCreated: ""
  };
};

export default function MediaList({ data }: MediaListProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 place-items-center">
      {data.map((page) => (
        <React.Fragment>
          {page.items.map((item) => (
            <MediaCard key={item.href} item={transformMedia(item)} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
