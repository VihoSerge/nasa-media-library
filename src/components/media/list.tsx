import { Media } from "@/types";
import MediaCard from "./card";

interface MediaListProps {
  data: any[];
}
const transformMedia = (item: any): Media => {
  return {
    id: item.data[0].nasa_id,
    image: item.links?.[0].href,
    title: item.data[0].title,
    location: item.data[0].location,
    photographer: item.data[0].photographer,
    dateCreated: ""
  };
};

export default function MediaList({ data }: MediaListProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 place-items-center">
      {data.map((item) => (
        <MediaCard key={item.id} item={transformMedia(item)} />
      ))}
    </div>
  );
}
