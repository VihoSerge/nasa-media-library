import { SearchCollection } from "@/types/nasa";
import { useMemo } from "react";

interface SearchResultProps {
  result: SearchCollection[];
}

export default function SearchResult({ result }: SearchResultProps) {
  const resultLenght = useMemo(() => result?.[0]?.metadata?.total_hits || 0, [result]);
  return <span className="text-lg text-gray-500">{resultLenght} result found</span>;
}
