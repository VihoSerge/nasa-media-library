import CardLoader from "./card";

export default function CardListLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 place-items-center ">
      {Array.from({ length: 12 }, (_, i) => i).map((index) => (
        <CardLoader key={`card-loader-${index}`} />
      ))}
    </div>
  );
}
