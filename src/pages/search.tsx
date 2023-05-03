import { useSearch } from "@/api";
import MediaList from "@/components/media/list";
import QueryResult from "@/components/query-result";
import SearchBar from "@/components/search-bar";
import Button from "@/components/ui/button/button";
import { getParams } from "@/utils/url";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const { search } = useLocation();
  const { data, isLoading, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useSearch(getParams(search));

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-8">
      <div className="bg-gray-100 w-full p-4 md:py-16 rounded-xl flex flex-col justify-center items-center">
        <SearchBar />
      </div>

      <QueryResult loading={isLoading} error={error} data={data}>
        <MediaList data={data?.pages.map(({ items }) => items).flat() || []} />

        {hasNextPage && (
          <Button
            loading={isFetchingNextPage}
            disabled={!hasNextPage || isFetchingNextPage}
            className="bg-black text-white"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </QueryResult>
    </div>
  );
}
