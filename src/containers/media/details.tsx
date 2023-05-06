import { useDetails, useImage } from "@/api";
import DetailsLoader from "@/components/loader/details";
import QueryResult from "@/components/query-result";
import { Media } from "@/types";
import { formatDate } from "@/utils";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

interface MediaDetailsProps {
  id: string;
}
function Title({ title }: { title: string }) {
  return <span className="text-2xl font-bold">{title}</span>;
}

function Description({ description }: { description: string }) {
  return <p className="text-lg" dangerouslySetInnerHTML={{ __html: description }} />;
}

function Photographer({ metadata }: { metadata: Media }) {
  return <div className="font-medium">{metadata?.photographer}</div>;
}

function Info({ info, icon }: { info: string; icon: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-sm text-gray-500">
      {icon}
      <span>{info}</span>
    </div>
  );
}

const rightInfos = [
  {
    key: "photographer",
    label: "Photographer",
    element: Photographer
  },
  {
    key: "keywords",
    label: "Keywords",
    element: Keywords
  }
];

function Keywords({ metadata }: { metadata: Media }) {
  return (
    <div className="flex flex-wrap gap-2">
      {metadata?.keywords?.map((keyword) => (
        <span key={keyword} className="inline-block p-2 bg-gray-100 rounded-md">
          {keyword}
        </span>
      ))}
    </div>
  );
}

export function MediaDetails({ id }: MediaDetailsProps): JSX.Element {
  const { data: metadata, isLoading: isMetadataLoading, error } = useDetails(id);
  const { data: image } = useImage(id);

  return (
    <QueryResult loading={isMetadataLoading} loader={<DetailsLoader />} error={error} data={metadata}>
      <div>
        <div className="md:h-[450px]">
          <img src={image} alt="" className="object-cover w-full h-full rounded-3xl" />
        </div>
        <div className="py-4 grid md:grid-cols-[70%_auto] gap-10">
          <div className="space-y-3">
            <div>
              <Title title={metadata?.title} />
            </div>

            <div className="flex flex-wrap gap-3 font-light">
              {metadata?.datecreated && (
                <Info icon={<CalendarDaysIcon className="w-5 h-5" />} info={formatDate(metadata?.datecreated)} />
              )}
              {metadata?.location && <Info icon={<MapPinIcon className="w-5 h-5" />} info={metadata?.location} />}
            </div>

            <Description description={metadata?.description} />
          </div>
          <aside>
            <div className="p-4 space-y-4 border-2 border-gray-200 shadow-lg rounded-xl">
              {metadata &&
                rightInfos.map(
                  (info) =>
                    metadata[info.key] && (
                      <div key={info.key} className="space-y-1">
                        <span className="text-sm text-gray-500">{info.label}</span>
                        {React.createElement(info.element, { metadata })}
                      </div>
                    )
                )}
            </div>
          </aside>
        </div>
      </div>
    </QueryResult>
  );
}
