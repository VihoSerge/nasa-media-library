import { useSearch } from "@/api";
import CardListLoader from "@/components/loader/card-list";
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
      <div className="flex flex-col items-center justify-center w-full p-4 bg-gray-100 md:py-16 rounded-xl">
        <SearchBar />
      </div>

      <QueryResult loading={isLoading} loader={<CardListLoader />} error={error} data={data?.pages}>
        <MediaList data={data?.pages.map(({ items }) => items).flat() || []} />

        {hasNextPage && (
          <Button
            loading={isFetchingNextPage}
            disabled={!hasNextPage || isFetchingNextPage}
            className="text-white bg-black"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </QueryResult>
    </div>
  );
}
