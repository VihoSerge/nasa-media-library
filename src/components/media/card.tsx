import { ROUTES } from "@/constants";
import { Media } from "@/types";
import { CameraIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface MediaCardProps {
  item: Media;
}

export default function MediaCard({ item }: MediaCardProps) {
  const { image, title, location, photographer } = item;
  return (
    <div className="w-full p-1 space-y-2 border border-gray-100 shadow-lg rounded-xl">
      <Link to={`${ROUTES.SHOW}/${item.id}`}>
        <div className="h-[240px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full duration-500 ease-in rounded-xl hover:scale-125"
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <div className="space-y-1">
            <span className="inline-block w-full overflow-hidden font-semibold text-slate-800 text-ellipsis whitespace-nowrap">
              {title}
            </span>
            <div className="space-x-2">
              <MapPinIcon className="inline w-5 h-5 text-slate-500" />
              <span className="text-sm text-slate-500">{location || "N/A"}</span>
            </div>
          </div>
          <hr className="text-white border-dashed" />
          <div className="flex items-center gap-2 text-sm border-dashed text text-slate-500">
            <div className="inline-flex items-center justify-center gap-2 w-[40px] h-[40px] bg-gray-100 rounded-full">
              <CameraIcon className="w-5 h-5" />
            </div>
            <span className="font-medium">{photographer || "N/A"}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
