import { Media } from "@/types";
import { CameraIcon, MapPinIcon } from "@heroicons/react/24/outline";

interface MediaCardProps {
  item: Media;
}
export default function MediaCard({ item }: MediaCardProps) {
  const { image, title, location, photographer } = item;
  return (
    <div className="w-full p-1 shadow-lg rounded-xl space-y-2 cursor-pointer border border-gray-100">
      <div className="h-[240px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl hover:scale-125 ease-in duration-500"
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="space-y-1">
          <span className="font-semibold text-slate-800 text-ellipsis overflow-hidden w-full whitespace-nowrap inline-block">
            {title}
          </span>
          <div className="space-x-2">
            <MapPinIcon className="w-5 h-5 text-slate-500 inline" />
            <span className="text-sm text-slate-500 dark:text-slate-400">{location || "N/A"}</span>
          </div>
        </div>
        <hr className="border-dashed text-white" />
        <div className=" flex items-center gap-2 border-dashed text-sm text text-slate-500">
          <div className="inline-flex items-center justify-center gap-2 w-[40px] h-[40px] bg-gray-100 rounded-full">
            <CameraIcon className="w-5 h-5" />
          </div>
          <span className="font-medium">{photographer || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
